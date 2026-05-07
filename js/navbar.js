// ── HAMBURGER MENU TOGGLE ──────────────────────────────────────
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // close menu when any link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
  });
}

// ── SET ACTIVE NAV LINK ────────────────────────────────────────
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const allLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

  allLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();

    // remove active from all first
    if (!link.classList.contains('btn-ask')) {
      link.classList.remove('active');
    }

    // set active on matching link
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
}

setActiveNav();