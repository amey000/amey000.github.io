// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav background on scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
}));

// Theme toggle
const root = document.documentElement;
document.getElementById('themeToggle').addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Typing effect
const roles = ['Data Analyst', 'SQL & Redshift Specialist', 'BI & Reporting Automation', 'ML & GenAI Builder'];
const typed = document.getElementById('typed');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  let r = 0, i = roles[0].length, deleting = true;
  const tick = () => {
    const word = roles[r];
    typed.textContent = word.slice(0, i);
    let delay = deleting ? 45 : 90;
    if (deleting) {
      i--;
      if (i < 0) { deleting = false; r = (r + 1) % roles.length; i = 0; delay = 300; }
    } else {
      i++;
      if (i > roles[r].length) { deleting = true; i = roles[r].length; delay = 1800; }
    }
    setTimeout(tick, delay);
  };
  setTimeout(tick, 2000);
}

// Reveal on scroll + count-up stats
const countUp = el => {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const decimals = (el.dataset.count.split('.')[1] || '').length;
  if (reduceMotion) { el.textContent = target.toFixed(decimals) + suffix; return; }
  const start = performance.now(), dur = 1400;
  const step = now => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = (target * eased).toFixed(decimals) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    entry.target.querySelectorAll('[data-count]').forEach(countUp);
    io.unobserve(entry.target);
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Active nav link
const sections = [...document.querySelectorAll('main section[id]')];
const links = [...navLinks.querySelectorAll('a')];
const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => spy.observe(s));

// Contact form -> mailto
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = encodeURIComponent(`Portfolio contact from ${f.get('name')}`);
  const body = encodeURIComponent(`${f.get('message')}\n\n— ${f.get('name')} (${f.get('email')})`);
  window.location.href = `mailto:amey05ks@gmail.com?subject=${subject}&body=${body}`;
});
