// ── STATE ──────────────────────────────────────────────────────
let currentCategory = 'all';
let currentSearch   = '';
let allExpanded     = false;

// ── CATEGORY ICONS ─────────────────────────────────────────────
const catIcons = {
  'crop-diseases':      '🍂',
  'pests':              '🐛',
  'soil-fertilizers':   '🌱',
  'irrigation':         '💧',
  'weather-seasons':    '🌤️',
  'seeds-planting':     '🌾',
  'weed-management':    '🌿',
  'livestock':          '🐄',
  'organic-farming':    '♻️',
  'government-schemes': '🏛️',
  'general':            '💡'
};

// ── RENDER ACCORDION ───────────────────────────────────────────
function renderAccordion(items, searchQuery) {
  const list      = document.getElementById('accordionList');
  const empty     = document.getElementById('emptyState');
  const countEl   = document.getElementById('resultCount');

  list.innerHTML = '';

  if (items.length === 0) {
    empty.classList.remove('hidden');
    countEl.textContent = 'No results found';
    return;
  }

  empty.classList.add('hidden');

  const label = currentCategory === 'all'
    ? 'all topics'
    : getCategoryLabel(currentCategory);

  countEl.textContent = searchQuery
    ? `${items.length} result${items.length !== 1 ? 's' : ''} for "${searchQuery}"`
    : `Showing ${items.length} answer${items.length !== 1 ? 's' : ''} in ${label}`;

  items.forEach(item => {
    const icon    = catIcons[item.category] || '🌾';
    const catName = getCategoryLabel(item.category);

    // highlight search term in question and answer
    const question = searchQuery
      ? highlightText(item.question, searchQuery)
      : item.question;

    const answer = searchQuery
      ? highlightText(item.answer, searchQuery)
      : item.answer;

    // keyword tags (show first 4)
    const kwTags = item.keywords.slice(0, 4)
      .map(k => `<span class="kw-tag">${k}</span>`)
      .join('');

    const el = document.createElement('div');
    el.className = 'accordion-item';
    el.dataset.id = item.id;
    el.innerHTML = `
      <div class="accordion-header" onclick="toggleAccordion(${item.id})">
        <span class="accordion-cat-icon">${icon}</span>
        <span class="accordion-question">${question}</span>
        <span class="accordion-tag">${catName}</span>
        <span class="accordion-arrow">▼</span>
      </div>
      <div class="accordion-body">
        <div class="accordion-answer">${answer}</div>
        <div class="accordion-answer-footer">
          <div class="accordion-keywords">${kwTags}</div>
          <a href="ask.html?q=${encodeURIComponent(item.question)}"
             class="accordion-ask-link">Ask follow-up →</a>
        </div>
      </div>
    `;

    list.appendChild(el);
  });
}

// ── HIGHLIGHT SEARCH TERM ──────────────────────────────────────
function highlightText(text, query) {
  if (!query) return text;
  const words = query.trim().split(/\s+/).filter(w => w.length > 2);
  let result  = text;
  words.forEach(word => {
    const regex = new RegExp(`(${word})`, 'gi');
    result = result.replace(regex, '<span class="highlight">$1</span>');
  });
  return result;
}

// ── TOGGLE SINGLE ACCORDION ────────────────────────────────────
function toggleAccordion(id) {
  const item = document.querySelector(`.accordion-item[data-id="${id}"]`);
  if (!item) return;
  item.classList.toggle('open');
}

// ── EXPAND / COLLAPSE ALL ──────────────────────────────────────
function toggleExpandAll() {
  const btn   = document.getElementById('expandAllBtn');
  const items = document.querySelectorAll('.accordion-item');

  allExpanded = !allExpanded;

  items.forEach(item => {
    if (allExpanded) {
      item.classList.add('open');
    } else {
      item.classList.remove('open');
    }
  });

  btn.textContent = allExpanded ? '− Collapse All' : '＋ Expand All';
}

// ── FILTER BY CATEGORY ─────────────────────────────────────────
function applyFilters() {
  let items = currentCategory === 'all'
    ? [...farmingData]
    : farmingData.filter(d => d.category === currentCategory);

  if (currentSearch.trim().length > 1) {
    const results = searchFarmingData(currentSearch);
    const ids     = new Set(results.map(r => r.id));
    items = items.filter(d => ids.has(d.id));
  }

  renderAccordion(items, currentSearch);
  allExpanded = false;
  document.getElementById('expandAllBtn').textContent = '＋ Expand All';
}

// ── CATEGORY FILTER BUTTONS ────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn')
      .forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.cat;
    applyFilters();

    // on mobile scroll to content
    if (window.innerWidth < 900) {
      document.querySelector('.kb-content')
        .scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── SEARCH INPUT ───────────────────────────────────────────────
const kbSearch  = document.getElementById('kbSearch');
const kbClearBtn = document.getElementById('kbClearBtn');

if (kbSearch) {
  kbSearch.addEventListener('input', () => {
    currentSearch = kbSearch.value;

    // show/hide clear button
    if (currentSearch.length > 0) {
      kbClearBtn.classList.remove('hidden');
    } else {
      kbClearBtn.classList.add('hidden');
    }

    applyFilters();
  });

  kbSearch.addEventListener('keydown', e => {
    if (e.key === 'Escape') clearKbSearch();
  });
}

function clearKbSearch() {
  kbSearch.value  = '';
  currentSearch   = '';
  kbClearBtn.classList.add('hidden');
  applyFilters();
  kbSearch.focus();
}

// ── URL PARAMS (from homepage category links) ──────────────────
function readURLParams() {
  const params = new URLSearchParams(window.location.search);

  const cat    = params.get('cat');
  const search = params.get('search');

  if (cat) {
    currentCategory = cat;
    const btn = document.querySelector(`.filter-btn[data-cat="${cat}"]`);
    if (btn) {
      document.querySelectorAll('.filter-btn')
        .forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
  }

  if (search) {
    currentSearch    = search;
    kbSearch.value   = search;
    kbClearBtn.classList.remove('hidden');
  }
}

// ── INIT ───────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  readURLParams();
  applyFilters();
});