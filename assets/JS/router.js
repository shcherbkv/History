// assets/js/router.js

const sections = {
  home:      { title: 'Киевская Русь',     template: 'pages/home.html' },
  history:   { title: 'История',           template: 'pages/history.html' },
  culture:   { title: 'Культура',           template: 'pages/culture.html' },
  persons:   { title: 'Личности',           template: 'pages/persons.html' },
  maps:      { title: 'Карты',              template: 'pages/maps.html' },
  weapons:   { title: 'Вооружение',         template: 'pages/weapons.html' },
  // Подразделы
  rurik:     { title: 'Рюрик',              template: 'pages/rulers/rurik.html', parent: 'history' },
  oleg:      { title: 'Олег Вещий',         template: 'pages/rulers/oleg.html', parent: 'history' },
  // ... и так далее
};

// Загрузка контента
async function loadSection(name) {
  const section = sections[name];
  if (!section) return;
  
  // Обновить заголовок
  document.title = section.title + ' — Киевская Русь';
  document.getElementById('page-title').textContent = section.title;
  
  // Подсветить пункт меню
  document.querySelectorAll('.nav-list a').forEach(a => {
    a.classList.toggle('active', a.dataset.section === (section.parent || name));
  });
  
  // Загрузить контент
  const response = await fetch(section.template);
  const html = await response.text();
  document.getElementById('content').innerHTML = html;
  
  // Инициализировать компоненты на новой странице
  initGallery();
  initLightbox();
  initTimeline?.();
  
  // Обновить URL (без перезагрузки)
  history.pushState({ section: name }, '', `#${name}`);
}

// Обработка кликов по навигации
document.querySelectorAll('[data-section]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    loadSection(link.dataset.section);
  });
});

// Обработка кнопок назад/вперёд
window.addEventListener('popstate', (e) => {
  if (e.state?.section) loadSection(e.state.section);
});

// Загрузка начальной секции
const initial = location.hash.slice(1) || 'home';
loadSection(initial);