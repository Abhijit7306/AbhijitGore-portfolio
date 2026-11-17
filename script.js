'use strict';

// Keep project URLs in one place. Empty values intentionally show an unavailable-link message.
const portfolioData = {
  projects: [
    { name: 'HireDx', kind: 'AI INTERVIEW INTELLIGENCE', description: 'An AI-powered interview analysis platform that helps people review recordings and turn communication insights into practical improvements.', problem: 'Makes it easier to spot what is working and what can improve in interview delivery.', features: ['Recording / upload', 'Transcript analysis', 'Filler word detection', 'Pace & pause insights', 'Communication feedback', 'Visual analytics'], tech: ['React', 'Next.js', 'Gemini AI', 'Supabase'], image: 'assets/hiredx-preview.svg', github: '', demo: '' },
    { name: 'Sahaay', kind: 'SOCIAL IMPACT · DISCOVERY', description: 'A service discovery concept that helps people in unfamiliar locations find essential options such as shelters, food, hotels, and hospitals.', problem: 'Helps people identify nearby support options when they need to navigate a new place.', features: ['Essential services discovery', 'Nearby support options', 'Accessibility-minded', 'Real-world social focus'], tech: [], image: 'assets/sahaay-preview.svg', github: '', demo: '' }
  ]
};

const translations = {
  en: { navHome:'Home',navAbout:'About',navSkills:'Skills',navProjects:'Projects',navEducation:'Education',navExperience:'Experience',navAchievements:'Achievements',navContact:'Contact',heroEyebrow:'COMPUTER SCIENCE · AI · PRODUCT BUILDING',heroTitle:'Computer Science Student | Building AI-Powered Products',heroIntro:'I’m a computer science student in Pune who enjoys turning ideas into useful software. I’m exploring AI and modern product development through hands-on projects, hackathons, and steady learning.',viewProjects:'View Projects ↗',contactMe:'Contact Me',downloadResume:'Download Resume ↓',hireMe:'Hire Me ↗',aboutHeading:'Curiosity, turned<br><em>into useful things.</em>',aboutBody:'I’m pursuing a Bachelor of Engineering in Computer Science after completing a diploma in Information Technology. I enjoy learning how software works end to end and building projects that make everyday tasks easier. AI is a particular interest, and I’m learning by experimenting, collaborating in hackathons, and shipping practical ideas.',skillsHeading:'Tools for <em>making.</em>',projectsHeading:'Ideas becoming <em>products.</em>',educationHeading:'Built on <em>learning.</em>',experienceHeading:'Experience in <em>progress.</em>',achievementsHeading:'Showing up.<br><em>Building forward.</em>',recommendHeading:'Recommendations<br><em>& connections.</em>',connect:'Let’s Connect ↗',contactHeading:'Have an idea?<br><em>Let’s talk.</em>',sendMessage:'Prepare Email ↗'},
  mr: { navHome:'मुख्यपृष्ठ',navAbout:'माझ्याबद्दल',navSkills:'कौशल्ये',navProjects:'प्रकल्प',navEducation:'शिक्षण',navExperience:'अनुभव',navAchievements:'उपलब्धी',navContact:'संपर्क',heroEyebrow:'संगणक विज्ञान · AI · उत्पादन निर्मिती',heroTitle:'संगणक विज्ञान विद्यार्थी | AI-आधारित उत्पादने तयार करत आहे',heroIntro:'मी पुण्यातील संगणक विज्ञानाचा विद्यार्थी आहे. कल्पनांना उपयुक्त सॉफ्टवेअरमध्ये रूपांतरित करायला मला आवडते. प्रकल्प, हॅकाथॉन आणि सातत्यपूर्ण शिक्षणातून AI व उत्पादन विकास शिकत आहे.',viewProjects:'प्रकल्प पहा ↗',contactMe:'संपर्क करा',downloadResume:'रेझ्युमे डाउनलोड ↓',hireMe:'कामासाठी संपर्क ↗',aboutHeading:'जिज्ञासेतून<br><em>उपयुक्त निर्मिती.</em>',aboutBody:'माहिती तंत्रज्ञानातील डिप्लोमानंतर मी संगणक विज्ञान अभियांत्रिकी पदवी घेत आहे. सॉफ्टवेअरची संपूर्ण प्रक्रिया समजून घेणे आणि दैनंदिन कामे सोपी करणारे प्रकल्प तयार करणे मला आवडते. AI मध्ये विशेष रस असून प्रयोग, हॅकाथॉनमधील सहकार्य आणि उपयुक्त कल्पना साकारून मी शिकत आहे.',skillsHeading:'निर्मितीसाठीची <em>साधने.</em>',projectsHeading:'कल्पनांचे <em>उत्पादनांत रूपांतर.</em>',educationHeading:'शिकण्यावर <em>आधारित.</em>',experienceHeading:'अनुभवाची <em>वाटचाल.</em>',achievementsHeading:'सहभागातून.<br><em>पुढे निर्मितीकडे.</em>',recommendHeading:'शिफारसी<br><em>आणि संपर्क.</em>',connect:'जोडले जाऊया ↗',contactHeading:'कल्पना आहे?<br><em>बोलूया.</em>',sendMessage:'ईमेल तयार करा ↗'},
  hi: { navHome:'होम',navAbout:'परिचय',navSkills:'कौशल',navProjects:'प्रोजेक्ट',navEducation:'शिक्षा',navExperience:'अनुभव',navAchievements:'उपलब्धियाँ',navContact:'संपर्क',heroEyebrow:'कंप्यूटर साइंस · AI · प्रोडक्ट निर्माण',heroTitle:'कंप्यूटर साइंस छात्र | AI-संचालित उत्पाद बना रहा हूँ',heroIntro:'मैं पुणे में कंप्यूटर साइंस का छात्र हूँ और विचारों को उपयोगी सॉफ्टवेयर में बदलना पसंद करता हूँ। प्रोजेक्ट, हैकाथॉन और लगातार सीखने के ज़रिए AI और आधुनिक प्रोडक्ट विकास सीख रहा हूँ।',viewProjects:'प्रोजेक्ट देखें ↗',contactMe:'संपर्क करें',downloadResume:'रेज़्यूमे डाउनलोड ↓',hireMe:'काम के लिए संपर्क ↗',aboutHeading:'जिज्ञासा से<br><em>उपयोगी निर्माण.</em>',aboutBody:'सूचना प्रौद्योगिकी में डिप्लोमा पूरा करने के बाद मैं कंप्यूटर साइंस में इंजीनियरिंग की पढ़ाई कर रहा हूँ। सॉफ्टवेयर को शुरू से अंत तक समझना और रोज़मर्रा के काम आसान करने वाले प्रोजेक्ट बनाना पसंद है। AI में खास रुचि है और प्रयोग, हैकाथॉन में सहयोग, तथा व्यावहारिक विचारों के ज़रिए सीख रहा हूँ।',skillsHeading:'बनाने के <em>औज़ार.</em>',projectsHeading:'विचार बन रहे हैं <em>उत्पाद.</em>',educationHeading:'सीखने पर <em>आधारित.</em>',experienceHeading:'अनुभव की <em>प्रगति.</em>',achievementsHeading:'भागीदारी से.<br><em>आगे निर्माण.</em>',recommendHeading:'सिफ़ारिशें<br><em>और संपर्क.</em>',connect:'जुड़ें ↗',contactHeading:'कोई विचार है?<br><em>बात करें.</em>',sendMessage:'ईमेल तैयार करें ↗'}
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const toast = (message) => { const el = $('#toast'); el.textContent = message; el.classList.add('show'); clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove('show'), 3000); };

function renderProjects() {
  const host = $('#project-list');
  host.innerHTML = portfolioData.projects.map((project) => {
    const tech = project.tech.length ? project.tech.map((item) => `<span>${item}</span>`).join('') : '<span>Technology details not listed</span>';
    const features = project.features.map((item) => `<span>${item}</span>`).join('');
    const link = (url, label) => url ? `<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>` : `<button type="button" data-unavailable="${label}">${label} ↗</button>`;
    return `<article class="project-card glass reveal"><div class="project-art"><img src="${project.image}" alt="Illustrative preview of ${project.name}"><span class="project-badge">${project.kind}</span></div><div class="project-body"><div class="project-top"><h3>${project.name}</h3><span class="project-kind">FEATURED PROJECT</span></div><p>${project.description}</p><p class="project-detail"><b>Problem:</b> ${project.problem}</p><div class="project-features">${features}</div><div class="badges">${tech}</div><div class="project-actions">${link(project.github, 'GitHub')}${link(project.demo, 'Live Demo')}</div></div></article>`;
  }).join('');
  $$('.project-card [data-unavailable]').forEach((button) => button.addEventListener('click', () => toast(`${button.dataset.unavailable} link has not been provided yet.`)));
}

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language === 'mr' ? 'mr' : language === 'hi' ? 'hi' : 'en';
  $$('[data-i18n]').forEach((node) => { if (dictionary[node.dataset.i18n]) node.innerHTML = dictionary[node.dataset.i18n]; });
  localStorage.setItem('portfolio-language', language);
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('portfolio-theme', theme);
  $('#theme-toggle').setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  $('.theme-icon').textContent = theme === 'dark' ? '☼' : '☾';
  $('meta[name="theme-color"]').content = theme === 'dark' ? '#080d1c' : '#f3f6fc';
}

function setupProfilePhoto() {
  const image = $('[data-profile]');
  fetch('assets/profile.jpg', { method: 'HEAD' }).then((response) => { if (!response.ok) throw new Error('photo missing'); image.src = 'assets/profile.jpg'; image.hidden = false; image.nextElementSibling.hidden = true; }).catch(() => { /* Keep the designed placeholder visible until the actual photo is supplied. */ });
}

function showLoader() {
  const loader = $('#preloader');
  const dismiss = () => { loader.classList.add('done'); setTimeout(() => loader.remove(), 650); };
  $('#skip-loader').addEventListener('click', dismiss);
  window.addEventListener('load', () => setTimeout(dismiss, 450), { once: true });
  setTimeout(dismiss, 1600);
}

function setupMenu() {
  const toggle = $('#menu-toggle'); const links = $('#nav-links');
  function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open navigation'); links.classList.remove('open'); document.body.classList.remove('menu-open'); }
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); links.classList.toggle('open', open); document.body.classList.toggle('menu-open', open); });
  links.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); }, { passive: true });
}

function setupReveal() {
  const items = $$('.reveal');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) { items.forEach((item) => item.classList.add('in-view')); return; }
  const observer = new IntersectionObserver((entries, instance) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); instance.unobserve(entry.target); } }), { threshold: .12 });
  items.forEach((item) => observer.observe(item));
}

function setupActiveNavigation() {
  const sections = $$('main section[id]'); const navLinks = $$('.nav-links a[href^="#"]');
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { navLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}`)); } }), { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach((section) => observer.observe(section));
}

function setupClock() {
  const time = $('#clock-time'), date = $('#clock-date');
  const update = () => { const now = new Date(); time.textContent = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(now); date.textContent = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).format(now); };
  update(); setInterval(update, 1000);
}

function setupTerminal() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { $('#terminal-command').textContent = 'whoami'; $('#terminal-output').innerHTML = '<span class="terminal-output-item">Computer Science Student</span><span class="terminal-output-item">AI Enthusiast</span><span class="terminal-output-item">Developer</span><span class="terminal-output-item">Problem Solver</span>'; return; }
  const command = $('#terminal-command'); const output = $('#terminal-output'); const first = 'whoami'; let index = 0;
  const type = () => { if (index < first.length) { command.textContent += first[index++]; setTimeout(type, 90); } else { output.innerHTML = ['Computer Science Student','AI Enthusiast','Developer','Problem Solver'].map((item) => `<span class="terminal-output-item">${item}</span>`).join(''); setTimeout(() => { command.textContent = ''; index = 0; typeSecond(); }, 2600); } };
  const typeSecond = () => { const second = 'interests'; let i = 0; const write = () => { if (i < second.length) { command.textContent += second[i++]; setTimeout(write, 95); } else { output.innerHTML = ['Generative AI','Agentic AI','Machine Learning','Software Development'].map((item) => `<span class="terminal-output-item">${item}</span>`).join(''); } }; write(); };
  setTimeout(type, 700);
}

function setupForm() {
  const form = $('#contact-form'); const feedback = $('#form-feedback');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); let valid = true;
    $$('.field-error', form).forEach((item) => item.textContent = '');
    $$('input,textarea', form).forEach((field) => field.removeAttribute('aria-invalid'));
    const values = new FormData(form); const fields = ['name','email','subject','message'];
    fields.forEach((name) => { const field = form.elements[name]; const value = String(values.get(name) || '').trim(); let error = ''; if (!value) error = 'Please fill out this field.'; else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Enter a valid email address.'; else if (name === 'message' && value.length < 10) error = 'Please write at least 10 characters.'; if (error) { valid = false; field.setAttribute('aria-invalid','true'); $('.field-error', field.parentElement).textContent = error; } });
    if (!valid) { feedback.textContent = 'Please check the highlighted fields and try again.'; feedback.className = 'form-note error'; const firstInvalid = $('[aria-invalid="true"]', form); if (firstInvalid) firstInvalid.focus(); return; }
    const subject = encodeURIComponent(String(values.get('subject')).trim()); const body = encodeURIComponent(`Hello Abhijit,\n\n${String(values.get('message')).trim()}\n\nFrom: ${String(values.get('name')).trim()}\nReply email: ${String(values.get('email')).trim()}`);
    feedback.textContent = 'Your email app should open with the message filled in. Nothing is sent or stored by this website.'; feedback.className = 'form-note success';
    window.location.href = `mailto:goreabhi7306@gmail.com?subject=${subject}&body=${body}`;
  });
}

function setupResume() {
  $$('[data-document]').forEach((button) => button.addEventListener('click', () => { const type = button.dataset.document; const path = `assets/${type}.pdf`; fetch(path, { method: 'HEAD' }).then((response) => { if (!response.ok) throw new Error('missing'); const link = document.createElement('a'); link.href = path; link.download = type === 'resume' ? 'Abhijit-Anil-Gore-Resume.pdf' : 'Abhijit-Anil-Gore-Portfolio.pdf'; link.click(); }).catch(() => toast(`${type === 'resume' ? 'Resume' : 'Portfolio'} PDF is not available yet. Add your file at ${path}.`)); }));
  $('#hire-button').addEventListener('click', () => { const choice = window.prompt('Choose a contact option: type email, WhatsApp, or contact'); if (!choice) return; const value = choice.trim().toLowerCase(); if (value.startsWith('e')) window.location.href = 'mailto:goreabhi7306@gmail.com?subject=Opportunity%20for%20Abhijit'; else if (value.startsWith('w')) window.open('https://wa.me/919970272421?text=Hello%20Abhijit%2C%20I%27d%20like%20to%20discuss%20an%20opportunity.', '_blank', 'noopener'); else document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); });
}

function setupScrollControls() {
  const button = $('#back-top');
  window.addEventListener('scroll', () => { button.classList.toggle('visible', window.scrollY > 650); }, { passive: true });
  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  const glow = $('.cursor-glow');
  if (matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) { document.addEventListener('pointermove', (event) => { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; glow.style.opacity = '.7'; }, { passive: true }); document.addEventListener('pointerleave', () => { glow.style.opacity = '0'; }); }
}

renderProjects();
setupProfilePhoto();
showLoader();
setTheme(localStorage.getItem('portfolio-theme') || 'dark');
const langSelect = $('#language'); const savedLanguage = localStorage.getItem('portfolio-language') || 'en'; langSelect.value = savedLanguage; applyLanguage(savedLanguage); langSelect.addEventListener('change', () => applyLanguage(langSelect.value));
$('#theme-toggle').addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
setupMenu(); setupReveal(); setupActiveNavigation(); setupClock(); setupTerminal(); setupForm(); setupResume(); setupScrollControls();
$('#year').textContent = new Date().getFullYear();
