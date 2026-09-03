// assets/js/router.js

const sections = {

  // Основное:
  home:                        { title: 'Киевская Русь',                                                               template: 'pages/home.html'                                           },
  history:                     { title: 'История',                                                                     template: 'pages/history.html'                                        },
  culture:                     { title: 'Культура',                                                                    template: 'pages/culture.html'                                        },
  persons:                     { title: 'Личности',                                                                    template: 'pages/persons.html'                                        },
  maps:                        { title: 'Карты',                                                                       template: 'pages/maps.html'                                           },
  weapons:                     { title: 'Вооружение',                                                                  template: 'pages/weapons.html'                                        },

  // История:
  rurik:                       { title: 'Рюрик',                                                                       template: 'pages/rulers/rurik.html',                parent: 'history' },
  oleg:                        { title: 'Олег Вещий',                                                                  template: 'pages/rulers/oleg.html',                 parent: 'history' },
  igor:                        { title: 'Игорь Рюрикович',                                                             template: 'pages/rulers/igor.html',                 parent: 'history' },
  olga:                        { title: 'Княгиня Ольга',                                                               template: 'pages/rulers/olga.html',                 parent: 'history' },
  svyatoslav:                  { title: 'Святослав Игоревич',                                                          template: 'pages/rulers/svyatoslav.html',           parent: 'history' },
  yaropolk:                    { title: 'Ярополк Святославич',                                                         template: 'pages/rulers/yaropolk.html',             parent: 'history' },
  vladimir:                    { title: 'Владимир Святославич',                                                        template: 'pages/rulers/vladimir.html',             parent: 'history' },

  // Культура:
  religiya:                    { title: 'Религия',                                                                     template: 'pages/culture/religiya.html',            parent: 'culture' },
  architecture:                { title: 'Архитектура',                                                                 template: 'pages/culture/architecture.html',        parent: 'culture' },
  crafts:                      { title: 'Ремёсла',                                                                     template: 'pages/culture/crafts.html',              parent: 'culture' },

  // Карты
  map1:                        { title: 'Расселение восточных славян и их соседей (VIII–IX вв.)',                      template: 'pages/maps/map1.html',                   parent: 'maps'    },
  map2:                        { title: 'Образование Древнерусского государства (конец IX – X вв.)',                   template: 'pages/maps/map2.html',                   parent: 'maps'    },
  map3:                        { title: 'Торговые пути Восточной Европы: «из варяг в греки» и Волжский путь',          template: 'pages/maps/map3.html',                   parent: 'maps'    },
  map4:                        { title: 'Походы князей Олега, Игоря и Святослава (IX–X вв.)',                          template: 'pages/maps/map4.html',                   parent: 'maps'    },
  map5:                        { title: 'Разгром Хазарского каганата (965–969)',                                       template: 'pages/maps/map5.html',                   parent: 'maps'    },
  map6:                        { title: 'Дунайские походы Святослава (967–971) и война с Византией',                   template: 'pages/maps/map6.html',                   parent: 'maps'    },
  map7:                        { title: 'Древнерусское государство при Владимире Святославиче (980–1015)',             template: 'pages/maps/map7.html',                   parent: 'maps'    },
  map8:                        { title: 'Крещение Руси и распространение христианства (988–1015)',                     template: 'pages/maps/map8.html',                   parent: 'maps'    },
  map9:                        { title: 'Соседи Древней Руси: Византия, Волжская Булгария, Польша, Венгрия, печенеги', template: 'pages/maps/map9.html',                   parent: 'maps'    },
  map10:                       { title: 'Административно-территориальное деление в конце правления Владимира',         template: 'pages/maps/map10.html',                  parent: 'maps'    },

  // Личности (для карточек в разделе «Личности»)
  'person-rurik':              { title: 'Рюрик',                                                                       template: 'pages/persons/rurik.html',               parent: 'persons' },
  'person-sineus-truvor':      { title: 'Синеус и Трувор',                                                             template: 'pages/persons/sineus-truvor.html',       parent: 'persons' },
  'person-askold':             { title: 'Аскольд',                                                                     template: 'pages/persons/askold.html',              parent: 'persons' },
  'person-dir':                { title: 'Дир',                                                                         template: 'pages/persons/dir.html',                 parent: 'persons' },
  'person-oleg-veshij':        { title: 'Олег Вещий',                                                                  template: 'pages/persons/oleg-veshij.html',         parent: 'persons' },
  'person-igor':               { title: 'Игорь Рюрикович',                                                             template: 'pages/persons/igor.html',                parent: 'persons' },
  'person-olga':               { title: 'Ольга',                                                                       template: 'pages/persons/olga.html',                parent: 'persons' },
  'person-svyatoslav':         { title: 'Святослав Игоревич',                                                          template: 'pages/persons/svyatoslav.html',          parent: 'persons' },
  'person-yaropolk':           { title: 'Ярополк Святославич',                                                         template: 'pages/persons/yaropolk.html',            parent: 'persons' },
  'person-oleg-svyatoslavich': { title: 'Олег Святославич',                                                            template: 'pages/persons/oleg-svyatoslavich.html',  parent: 'persons' },
  'person-vladimir':           { title: 'Владимир Святославич',                                                        template: 'pages/persons/vladimir.html',            parent: 'persons' },
  'person-rogvolod':           { title: 'Рогволод',                                                                    template: 'pages/persons/rogvolod.html',            parent: 'persons' },
  'person-rogneda':            { title: 'Рогнеда',                                                                     template: 'pages/persons/rogneda.html',             parent: 'persons' },
  'person-sveneld':            { title: 'Свенельд',                                                                    template: 'pages/persons/sveneld.html',             parent: 'persons' },
  'person-dobrynya':           { title: 'Добрыня',                                                                     template: 'pages/persons/dobrynya.html',            parent: 'persons' },
  'person-anastas-korsunyanin':{ title: 'Анастас Корсунянин',                                                          template: 'pages/persons/anastas-korsunyanin.html', parent: 'persons' },
  'person-ioann-tzimiskes':    { title: 'Иоанн Цимисхий',                                                              template: 'pages/persons/ioann-tzimiskes.html',     parent: 'persons' },
  'person-vasily2':            { title: 'Василий II',                                                                  template: 'pages/persons/vasily2.html',             parent: 'persons' },
  'person-anna-byzantine':     { title: 'Анна Византийская',                                                           template: 'pages/persons/anna-byzantine.html',      parent: 'persons' },

  'weapon-sword':              { title: 'Меч',                                                                         template: 'pages/weapons/sword.html',               parent: 'weapons' },
  'weapon-saber':              { title: 'Сабля',                                                                       template: 'pages/weapons/saber.html',               parent: 'weapons' },
  'weapon-axe':                { title: 'Топор',                                                                       template: 'pages/weapons/axe.html',                 parent: 'weapons' },
  'weapon-spear':              { title: 'Копьё',                                                                       template: 'pages/weapons/spear.html',               parent: 'weapons' },
  'weapon-mace':               { title: 'Булава и кистень',                                                            template: 'pages/weapons/mace.html',                parent: 'weapons' },
  'weapon-chainmail':          { title: 'Кольчуга',                                                                    template: 'pages/weapons/chainmail.html',           parent: 'weapons' },
  'weapon-helmet':             { title: 'Шлем',                                                                        template: 'pages/weapons/helmet.html',              parent: 'weapons' },
  'weapon-shield':             { title: 'Щит',                                                                         template: 'pages/weapons/shield.html',              parent: 'weapons' },
  'weapon-bow':                { title: 'Лук',                                                                         template: 'pages/weapons/bow.html',                 parent: 'weapons' },
  'weapon-sulitsa':            { title: 'Сулица',                                                                      template: 'pages/weapons/sulitsa.html',             parent: 'weapons' },
  'weapon-fortresses':         { title: 'Крепости',                                                                    template: 'pages/weapons/fortresses.html',          parent: 'weapons' },
  'weapon-siege-engines':      { title: 'Осадные машины',                                                              template: 'pages/weapons/siege-engines.html',       parent: 'weapons' },
  'weapon-druzhina':           { title: 'Дружина',                                                                     template: 'pages/weapons/druzhina.html',            parent: 'weapons' },
  'weapon-cavalry':            { title: 'Конница',                                                                     template: 'pages/weapons/cavalry.html',             parent: 'weapons' },
  'weapon-militia':            { title: 'Ополчение',                                                                   template: 'pages/weapons/militia.html',             parent: 'weapons' },

    'perun-sanctuary': { title: 'Святилище Перуна', template: 'pages/culture/architecture/perun-sanctuary.html', parent: 'culture' },
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
