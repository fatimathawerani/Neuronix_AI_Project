// THEME TOGGLE (PERSISTENT)
const toggle = document.getElementById('theme-toggle');
const KEY = 'scalesaas_theme';
const cards = document.querySelectorAll('.pricing-grid .card');

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggle.textContent = '☀️';
  } else {
    document.documentElement.removeAttribute('data-theme');
    toggle.textContent = '🌙';
  }
}

// Load stored preference
const saved = localStorage.getItem(KEY);
if (saved) {
  applyTheme(saved);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
}

// Toggle on click
toggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';

  applyTheme(newTheme);
  localStorage.setItem(KEY, newTheme);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId.length > 1) {
      e.preventDefault();
      const el = document.querySelector(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Pricing card selection
cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('selected')); // remove from others
    card.classList.add('selected'); // add to clicked card
  });
});


// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
