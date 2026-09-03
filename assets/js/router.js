// assets/js/router.js

const sections = {
  home:      { title: 'Киевская Русь',     template: 'pages/home.html' },
  history:   { title: 'История',           template: 'pages/history.html' },
  culture:   { title: 'Культура',           template: 'pages/culture.html' },
  persons:   { title: 'Личности',           template: 'pages/persons.html' },
  maps:      { title: 'Карты',              template: 'pages/maps.html' },
  weapons:   { title: 'Вооружение',         template: 'pages/weapons.html' },
  rurik:     { title: 'Рюрик',              template: 'pages/rulers/rurik.html', parent: 'history' },
  oleg:      { title: 'Олег Вещий',         template: 'pages/rulers/oleg.html', parent: 'history' },
  igor:      { title: 'Игорь Рюрикович',    template: 'pages/rulers/igor.html', parent: 'history' },
  olga:      { title: 'Княгиня Ольга',      template: 'pages/rulers/olga.html', parent: 'history' },
  svyatoslav:{ title: 'Святослав Игоревич', template: 'pages/rulers/svyatoslav.html', parent: 'history' },
  yaropolk:  { title: 'Ярополк Святославич', template: 'pages/rulers/yaropolk.html', parent: 'history' },
  vladimir:  { title: 'Владимир Святославич', template: 'pages/rulers/vladimir.html', parent: 'history' },
};

async function loadSection(name) {
  const section = sections[name];
  if (!section) return;

  document.title = section.title + ' — Киевская Русь';
  document.getElementById('page-title').textContent = section.title;

  document.querySelectorAll('.nav-list a').forEach(a => {
    a.classList.toggle('active', a.dataset.section === (section.parent || name));
  });

  const response = await fetch(section.template);
  const html = await response.text();
  document.getElementById('content').innerHTML = html;

  initGallery?.();
  initLightbox?.();
  initTimeline?.();

  // Добавьте сюда
  if (name === 'home') {
    initCarousel();
  }

  history.pushState({ section: name }, '', `#${name}`);
}

// Делегирование кликов на документ
document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-section]');
  if (!link) return;
  e.preventDefault();
  const sectionName = link.dataset.section;
  if (sections[sectionName]) {
    loadSection(sectionName);
  }
});

// Обработка изменения hash (например, при ручном вводе #rurik)
window.addEventListener('hashchange', () => {
  const name = location.hash.slice(1);
  if (sections[name]) loadSection(name);
});

// Загрузка начальной секции
const initial = location.hash.slice(1) || 'history'; // если хотите стартовать с history, иначе 'home'
if (sections[initial]) {
  loadSection(initial);
} else {
  // fallback на history или home
  loadSection('history');
}

// Кнопка "Назад": подъём по иерархии разделов
document.getElementById('back-button')?.addEventListener('click', () => {
  const currentHash = location.hash.slice(1) || 'home';
  const currentSection = sections[currentHash];
  const parentHash = currentSection?.parent || 'home';
  loadSection(parentHash);
});
