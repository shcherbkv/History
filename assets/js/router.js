// assets/js/router.js

const sections = {
  home:        { title: 'Киевская Русь',     template: 'pages/home.html' },
  history:     { title: 'История',           template: 'pages/history.html' },
  culture:     { title: 'Культура',           template: 'pages/culture.html' },
  persons:     { title: 'Личности',           template: 'pages/persons.html' },
  maps:        { title: 'Карты',              template: 'pages/maps.html' },
  weapons:     { title: 'Вооружение',         template: 'pages/weapons.html' },
  rurik:       { title: 'Рюрик',              template: 'pages/rulers/rurik.html', parent: 'history' },
  oleg:        { title: 'Олег Вещий',         template: 'pages/rulers/oleg.html', parent: 'history' },
  igor:        { title: 'Игорь Рюрикович',    template: 'pages/rulers/igor.html', parent: 'history' },
  olga:        { title: 'Княгиня Ольга',      template: 'pages/rulers/olga.html', parent: 'history' },
  svyatoslav:  { title: 'Святослав Игоревич', template: 'pages/rulers/svyatoslav.html', parent: 'history' },
  yaropolk:    { title: 'Ярополк Святославич', template: 'pages/rulers/yaropolk.html', parent: 'history' },
  vladimir:    { title: 'Владимир Святославич', template: 'pages/rulers/vladimir.html', parent: 'history' },
  religiya:    { title: 'Религия',     template: 'pages/culture/religiya.html', parent: 'culture' },
  architecture:{ title: 'Архитектура', template: 'pages/culture/architecture.html', parent: 'culture' },
  crafts:      { title: 'Ремёсла',     template: 'pages/culture/crafts.html', parent: 'culture' },
  map1:        { title: 'Расселение восточных славян и их соседей (VIII–IX вв.)', template: 'pages/maps/map1.html', parent: 'maps' },
  map2:        { title: 'Образование Древнерусского государства (конец IX – X вв.)', template: 'pages/maps/map2.html', parent: 'maps' },
  map3:        { title: 'Торговые пути Восточной Европы: «из варяг в греки» и Волжский путь', template: 'pages/maps/map3.html', parent: 'maps' },
  map4:        { title: 'Походы князей Олега, Игоря и Святослава (IX–X вв.)', template: 'pages/maps/map4.html', parent: 'maps' },
  map5:        { title: 'Разгром Хазарского каганата (965–969)', template: 'pages/maps/map5.html', parent: 'maps' },
  map6:        { title: 'Дунайские походы Святослава (967–971) и война с Византией', template: 'pages/maps/map6.html', parent: 'maps' },
  map7:        { title: 'Древнерусское государство при Владимире Святославиче (980–1015)', template: 'pages/maps/map7.html', parent: 'maps' },
  map8:        { title: 'Крещение Руси и распространение христианства (988–1015)', template: 'pages/maps/map8.html', parent: 'maps' },
  map9:        { title: 'Соседи Древней Руси: Византия, Волжская Булгария, Польша, Венгрия, печенеги', template: 'pages/maps/map9.html', parent: 'maps' },
  map10:       { title: 'Административно-территориальное деление в конце правления Владимира', template: 'pages/maps/map10.html', parent: 'maps' },
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
const initial = location.hash.slice(1) || 'home'; 
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
