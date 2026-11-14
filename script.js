// ================= Translations =================
// German is written directly in index.html (the default on every load).
// English strings live here; German originals are captured from the page at startup.
const EN = {
  'nav.about': 'About',
  'nav.experience': 'Experience',
  'nav.projects': 'Projects',
  'nav.skills': 'Skills',
  'nav.education': 'Education',
  'nav.contact': 'Contact',
  'lang.aria': 'Auf Deutsch wechseln',
  'theme.aria': 'Toggle colour theme',
  'menu.aria': 'Open menu',

  'hero.eyebrow': 'Open to Data Analyst &amp; Working Student roles · Germany',
  'hero.hi': "Hi, I'm",
  'hero.bio': 'Data Analyst with 1.5+ years at <strong>Amazon</strong> and Master\'s coursework in <strong>Artificial Intelligence &amp; Robotics</strong>. I turn raw data into decisions with SQL, Python and Amazon Redshift, and build practical ML &amp; generative-AI systems, including a GDPR-compliant local RAG pipeline.',
  'hero.ctaProjects': 'View projects',
  'hero.ctaCv': 'Download CV',
  'hero.ctaContact': 'Get in touch',
  'hero.loc': 'Frankfurt am Main, Germany',
  'hero.photoAlt': 'Portrait of Amey Shete',
  'hero.badgeTop': 'ex-Amazon',

  'stats.years': 'Years at Amazon',
  'stats.ects': 'ECTS in AI &amp; Robotics',
  'stats.projects': 'AI / ML projects',
  'stats.trained': 'People trained in cyber security',

  'about.kicker': '01 · About',
  'about.title': 'Data-driven, AI-curious',
  'about.p1': 'At Amazon in Pune I built scalable data marts on Redshift, maintained ETL workflows, and automated the dashboards and Weekly Business Review reports that teams used to make decisions. Root-cause analysis and KPI monitoring were my daily work.',
  'about.p2': 'I then moved to Germany and completed 30 ECTS of Master\'s coursework in AI &amp; Robotics at Hochschule Hof, covering data mining, machine learning and intelligent robotics, alongside my own projects in LLMs, diffusion models and privacy-first AI. From February 2027 I\'m going deeper into analytics with an MSc in Data Analytics at BSBI Berlin.',
  'about.langK': 'Languages',
  'about.langEn': 'English',
  'about.langDe': 'German',
  'about.focusK': 'Focus',
  'about.focusV': 'SQL analytics · BI dashboards · ETL · ML &amp; GenAI',
  'about.basedK': 'Based in',
  'about.basedV': 'Frankfurt am Main, Germany',

  'exp.kicker': '02 · Experience',
  'exp.title': "Where I've worked",
  'exp.where': 'Amazon · Pune, India',
  'exp.dur': '1.5 yrs',
  'exp.bullets': `
    <li>Wrote and optimised complex <strong>SQL on Amazon Redshift</strong> to build scalable data marts for data warehousing and business reporting.</li>
    <li>Designed and maintained <strong>ETL workflows</strong> to extract, transform and integrate large datasets.</li>
    <li>Ran exploratory, trend and <strong>root cause analyses</strong> to monitor business KPIs and find operational improvements.</li>
    <li>Automated dashboards and <strong>Weekly Business Review (WBR)</strong> reports that drove data-driven decisions.</li>
    <li>Worked with cross-functional teams to scope requirements and present findings through reports and visualisations.</li>`,
  'tag.kpi': 'KPI Analysis',

  'proj.kicker': '03 · Projects',
  'proj.title': "Things I've built",
  'proj.rag.title': 'GDPR-Compliant Local RAG System',
  'proj.rag.desc': 'A fully local retrieval-augmented generation pipeline that never sends data off the machine. German personal data is redacted before it ever becomes a vector.',
  'proj.rag.list': `
    <li>Ollama (Llama 3 / Mistral) + Qdrant in an isolated Docker network</li>
    <li>Microsoft Presidio redacts names, IBANs and phone numbers pre-embedding</li>
    <li>multilingual-e5-large search with source-cited answers</li>`,
  'proj.lisa.desc': 'Couples GPT-4 with Stable Diffusion v1.5 to fix spatial layout errors in generated images, where objects end up in the wrong place.',
  'proj.lisa.list': `
    <li>LoRA fine-tuning on COCO 2017 on a 16 GB T4 using FP16 + gradient accumulation</li>
    <li>Dual-metric evaluation: CLIP score + GPT-3.5 as judge</li>`,
  'proj.health.desc': 'An end-to-end ML pipeline for health risk analysis, from raw medical data to an interactive prediction app.',
  'proj.health.list': `
    <li>EDA and feature engineering with Pandas &amp; Seaborn</li>
    <li>Benchmarked Scikit-Learn classifiers against a tuned XGBoost model</li>
    <li>Streamlit web app to explore predictions</li>`,
  'proj.workout.title': 'AI-Based Workout Assistant',
  'proj.workout.desc': 'A real-time computer-vision coach that counts reps and flags bad form from a live webcam stream.',
  'proj.workout.list': `
    <li>Pose estimation with OpenCV + MediaPipe for automatic rep counting</li>
    <li>Random Forest classifiers for posture and error detection</li>`,
  'proj.more': 'More on GitHub',

  'skills.kicker': '04 · Skills',
  'skills.title': 'My toolkit',
  'skills.bi': 'Data Analysis &amp; BI',
  'skills.biTags': '<span>EDA</span><span>KPI Monitoring</span><span>Root Cause Analysis</span><span>Reporting Automation</span><span>Power BI</span><span>Tableau</span>',
  'skills.de': 'Data Engineering &amp; Databases',
  'skills.prog': 'Programming',
  'skills.ml': 'Machine Learning &amp; AI',

  'edu.kicker': '05 · Education',
  'edu.title': 'Academic path',
  'edu.upcoming': 'Upcoming',
  'edu.bsbi': 'BSBI · Berlin, Germany',
  'edu.ects': '30 ECTS',
  'edu.hofTitle': "Master's Coursework, Artificial Intelligence &amp; Robotics",
  'edu.hofSub': 'Hochschule Hof, University of Applied Sciences · Germany',
  'edu.hofList': `
    <li>Data Mining and Machine Learning</li>
    <li>Intelligent Robotics</li>
    <li>AI Project</li>
    <li>New Technologies in AI and Robotics (seminar)</li>
    <li>New Technologies in Computer Science (seminar)</li>
    <li>German as a Foreign Language (B1.1)</li>`,
  'edu.done': 'Completed',
  'edu.btech': 'B.Tech in Computer Science &amp; Engineering',
  'edu.shivaji': 'Shivaji University · Kolhapur, India',

  'eng.kicker': '06 · Engagement',
  'eng.title': 'Beyond work',
  'eng.cyberT': 'Cyber Security Awareness Seminar',
  'eng.cyberD': 'Ran a hands-on IT security seminar for 100+ participants with practical tips for staying safe online.',
  'eng.sihD': "Made it through four rounds of India's nationwide programming competition.",

  'contact.kicker': '07 · Contact',
  'contact.title': "Let's work together",
  'contact.lead': "I'm looking for Data Analyst, BI and working-student roles in Germany. If you have one, or just want to talk data, I'd like to hear from you.",
  'contact.phone': 'Phone',

  'form.name': 'Name',
  'form.email': 'Email',
  'form.msg': 'Message',
  'form.namePh': 'Your name',
  'form.emailPh': 'you@company.com',
  'form.msgPh': 'Hi Amey, …',
  'form.send': 'Send message',
  'form.note': 'Opens your email app with the message filled in.',

  'footer.built': 'Built with HTML, CSS &amp; JS.',
  'footer.cv': 'Download CV ↓',
  'footer.top': 'Back to top ↑',
};

const META = {
  de: {
    title: document.title,
    desc: document.querySelector('meta[name="description"]').content,
    roles: ['Data Analyst', 'SQL- & Redshift-Spezialist', 'BI & Reporting-Automatisierung', 'ML- & GenAI-Entwickler'],
    mailSubject: name => `Kontakt über Portfolio von ${name}`,
    cv: { href: 'assets/Amey_Shete_CV.pdf', file: 'Amey_Shete_Lebenslauf.pdf' },
  },
  en: {
    title: 'Amey Shete | Data Analyst & AI Engineer',
    desc: "Portfolio of Amey Shete: Data Analyst with 1.5+ years at Amazon and Master's coursework in Artificial Intelligence & Robotics. SQL, Python, Redshift, ML and generative AI.",
    roles: ['Data Analyst', 'SQL & Redshift Specialist', 'BI & Reporting Automation', 'ML & GenAI Builder'],
    mailSubject: name => `Portfolio contact from ${name}`,
    cv: { href: 'assets/Amey_Shete_CV_EN.pdf', file: 'Amey_Shete_CV.pdf' },
  },
};

// Capture German originals from the page
const ATTRS = [['data-i18n-aria', 'aria-label'], ['data-i18n-ph', 'placeholder'], ['data-i18n-alt', 'alt']];
const DE = {};
document.querySelectorAll('[data-i18n]').forEach(el => { DE[el.dataset.i18n] = el.innerHTML; });
ATTRS.forEach(([data, attr]) => document.querySelectorAll(`[${data}]`).forEach(el => {
  DE[el.getAttribute(data)] = el.getAttribute(attr);
}));

let lang = 'de';
const root = document.documentElement;
const langBtn = document.getElementById('langToggle');

function setLang(next) {
  lang = next;
  const dict = next === 'en' ? EN : DE;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = dict[el.dataset.i18n];
    if (v != null) el.innerHTML = v;
  });
  ATTRS.forEach(([data, attr]) => document.querySelectorAll(`[${data}]`).forEach(el => {
    const v = dict[el.getAttribute(data)];
    if (v != null) el.setAttribute(attr, v);
  }));
  root.lang = next;
  document.title = META[next].title;
  document.querySelector('meta[name="description"]').content = META[next].desc;
  langBtn.dataset.active = next;
  document.querySelectorAll('a[data-cv]').forEach(a => {
    a.setAttribute('href', META[next].cv.href);
    a.setAttribute('download', META[next].cv.file);
  });
  resetTyping();
}
langBtn.dataset.active = 'de';
langBtn.addEventListener('click', () => setLang(lang === 'de' ? 'en' : 'de'));

// ================= UI =================
document.getElementById('year').textContent = new Date().getFullYear();

const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

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

document.getElementById('themeToggle').addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Typing effect (restarts when language changes)
const typed = document.getElementById('typed');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let typingTimer, r = 0, i = 0, deleting = true;
function tick() {
  const roles = META[lang].roles;
  typed.textContent = roles[r].slice(0, i);
  let delay = deleting ? 45 : 90;
  if (deleting) {
    i--;
    if (i < 0) { deleting = false; r = (r + 1) % roles.length; i = 0; delay = 300; }
  } else {
    i++;
    if (i > roles[r].length) { deleting = true; i = roles[r].length; delay = 1800; }
  }
  typingTimer = setTimeout(tick, delay);
}
function resetTyping() {
  clearTimeout(typingTimer);
  r = 0; i = META[lang].roles[0].length; deleting = true;
  typed.textContent = META[lang].roles[0];
  if (!reduceMotion) typingTimer = setTimeout(tick, 2000);
}
resetTyping();

// Reveal on scroll + count-up stats (decimal comma in German)
const fmt = (n, d) => n.toLocaleString(lang === 'de' ? 'de-DE' : 'en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const countUp = el => {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const decimals = (el.dataset.count.split('.')[1] || '').length;
  el.dataset.done = '1';
  if (reduceMotion) { el.textContent = fmt(target, decimals) + suffix; return; }
  const start = performance.now(), dur = 1400;
  const step = now => {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)), decimals) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
// re-format finished counters when switching language
langBtn.addEventListener('click', () => document.querySelectorAll('[data-count][data-done]').forEach(el => {
  const d = (el.dataset.count.split('.')[1] || '').length;
  el.textContent = fmt(parseFloat(el.dataset.count), d) + (el.dataset.suffix || '');
}));

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
  const subject = encodeURIComponent(META[lang].mailSubject(f.get('name')));
  const body = encodeURIComponent(`${f.get('message')}\n\n— ${f.get('name')} (${f.get('email')})`);
  window.location.href = `mailto:amey05ks@gmail.com?subject=${subject}&body=${body}`;
});
