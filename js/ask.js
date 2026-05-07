// ── STATE ──────────────────────────────────────────────────────
let selectedCategory = 'all';
let lastQuery        = '';

// ── CATEGORY CHIPS ─────────────────────────────────────────────
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    selectedCategory = chip.dataset.cat;
  });
});

// ── CHAR COUNTER ───────────────────────────────────────────────
const questionInput = document.getElementById('questionInput');
const charCount     = document.getElementById('charCount');

if (questionInput) {
  questionInput.addEventListener('input', () => {
    const len = questionInput.value.length;
    charCount.textContent = `${len} / 500`;
    charCount.style.color = len > 450 ? '#e76f51' : '#9a9a90';
  });

  questionInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  });
}

// ── CLEAR BUTTON ───────────────────────────────────────────────
const clearBtn = document.getElementById('clearBtn');
if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    questionInput.value = '';
    charCount.textContent = '0 / 500';
    charCount.style.color = '#9a9a90';
    questionInput.focus();
    showIdle();
  });
}

// ── FILL EXAMPLE ───────────────────────────────────────────────
function fillExample(btn) {
  questionInput.value = btn.textContent;
  charCount.textContent = `${btn.textContent.length} / 500`;
  questionInput.focus();
}

// ── FILL AND SUBMIT (popular questions) ────────────────────────
function fillAndSubmit(text) {
  questionInput.value = text;
  charCount.textContent = `${text.length} / 500`;
  handleSubmit();
}

// ── SHOW STATES ────────────────────────────────────────────────
function showIdle() {
  document.getElementById('answerIdle').classList.remove('hidden');
  document.getElementById('answerLoading').classList.add('hidden');
  document.getElementById('answerResult').classList.add('hidden');
  document.getElementById('answerNotFound').classList.add('hidden');
}

function showLoading(text) {
  document.getElementById('answerIdle').classList.add('hidden');
  document.getElementById('answerLoading').classList.remove('hidden');
  document.getElementById('answerResult').classList.add('hidden');
  document.getElementById('answerNotFound').classList.add('hidden');
  document.getElementById('loadingText').textContent = text || 'Searching knowledge base...';
}

function showResult(item) {
  document.getElementById('answerIdle').classList.add('hidden');
  document.getElementById('answerLoading').classList.add('hidden');
  document.getElementById('answerNotFound').classList.add('hidden');

  const resultEl = document.getElementById('answerResult');
  resultEl.classList.remove('hidden');

  document.getElementById('resultSource').innerHTML  = '✅ Knowledge Base';
  document.getElementById('resultSource').className  = 'result-source';
  document.getElementById('resultMeta').textContent   = getCategoryLabel(item.category);
  document.getElementById('resultQuestion').textContent = item.question;
  document.getElementById('resultAnswer').textContent   = item.answer;

  // reset helpful buttons
  document.getElementById('btnYes').className = 'helpful-btn';
  document.getElementById('btnNo').className  = 'helpful-btn';

  // scroll into view
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showNotFound(query) {
  document.getElementById('answerIdle').classList.add('hidden');
  document.getElementById('answerLoading').classList.add('hidden');
  document.getElementById('answerResult').classList.add('hidden');

  const nfEl = document.getElementById('answerNotFound');
  nfEl.classList.remove('hidden');

  // reset AI box
  const aiBox = document.getElementById('aiAnswerBox');
  aiBox.innerHTML = `<div class="loading-dots">
    <span></span><span></span><span></span>
  </div>`;
  document.getElementById('aiResultActions').classList.add('hidden');

  // call Claude API
  callClaudeAPI(query);
}

// ── MAIN SUBMIT HANDLER ────────────────────────────────────────
function handleSubmit() {
  const query = questionInput.value.trim();
  if (!query) {
    questionInput.focus();
    questionInput.style.borderColor = '#e76f51';
    setTimeout(() => questionInput.style.borderColor = '', 1200);
    return;
  }

  lastQuery = query;
  showLoading('Searching knowledge base...');

  // slight delay for UX
  setTimeout(() => {
    let results = searchFarmingData(query);

    // filter by category if not 'all'
    if (selectedCategory !== 'all') {
      results = results.filter(r => r.category === selectedCategory);
    }

    if (results.length > 0 && results[0].score >= 3) {
      showResult(results[0]);
    } else {
      showNotFound(query);
    }
  }, 800);
}

// ── CLAUDE API CALL ────────────────────────────────────────────
async function callClaudeAPI(query) {
  const aiBox = document.getElementById('aiAnswerBox');

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'YOUR_API_KEY_HERE',
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-calls': 'true'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1000,
        system: `You are FarmHelp, an expert agricultural assistant helping farmers in South Asia. 
Answer farming questions clearly and practically. 
Keep answers concise (3-5 sentences or bullet points). 
Focus on actionable advice. 
If recommending chemicals, always mention safety precautions.
Do not use markdown formatting — plain text only.`,
        messages: [
          {
            role: 'user',
            content: query
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    const answer = data.content[0].text;

    // type out the answer character by character
    aiBox.textContent = '';
    aiBox.style.alignItems = 'flex-start';
    typeWriter(aiBox, answer, 0);

    // show actions after typing
    setTimeout(() => {
      document.getElementById('aiResultActions').classList.remove('hidden');
    }, answer.length * 18 + 400);

  } catch (err) {
    // graceful fallback when API is not yet set up
    aiBox.textContent = '';
    aiBox.style.alignItems = 'flex-start';

    const fallbackMsg = `We couldn't find an exact answer in our knowledge base for "${query}". 

Here are some steps you can take:
- Browse our Knowledge Base for related topics
- Try rephrasing your question with the crop name and specific symptoms
- Contact your local agricultural extension officer for in-person advice

Our AI assistant will be fully available soon to answer any question directly.`;

    typeWriter(aiBox, fallbackMsg, 0);

    document.getElementById('nfText').textContent =
      'Our knowledge base didn\'t have an exact match. Showing our best guidance below.';

    setTimeout(() => {
      document.getElementById('aiResultActions').classList.remove('hidden');
    }, 1200);
  }
}

// ── TYPEWRITER EFFECT ──────────────────────────────────────────
function typeWriter(el, text, index) {
  if (index < text.length) {
    el.textContent += text.charAt(index);
    setTimeout(() => typeWriter(el, text, index + 1), 16);
  }
}

// ── HELPFUL BUTTONS ────────────────────────────────────────────
function markHelpful(isYes) {
  const btnYes = document.getElementById('btnYes');
  const btnNo  = document.getElementById('btnNo');
  if (!btnYes || !btnNo) return;

  if (isYes) {
    btnYes.className = 'helpful-btn selected-yes';
    btnNo.className  = 'helpful-btn';
    btnYes.textContent = '👍 Thanks!';
  } else {
    btnNo.className  = 'helpful-btn selected-no';
    btnYes.className = 'helpful-btn';
    btnNo.textContent = '👎 Sorry!';
  }
}

// ── ASK ANOTHER ────────────────────────────────────────────────
function askAnother() {
  questionInput.value = '';
  charCount.textContent = '0 / 500';
  showIdle();
  questionInput.focus();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── URL PREFILL (from knowledge page links) ────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q');
  if (q && questionInput) {
    questionInput.value = q;
    charCount.textContent = `${q.length} / 500`;
    handleSubmit();
  }
});