// assets/js/core.js

document.addEventListener('DOMContentLoaded', () => {
  // Мобильное меню
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('open');
    });
  }

  // Переключение темы
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const body = document.body;
    const icon = themeToggle.querySelector('span');
    // Восстановление темы
    if (localStorage.getItem('theme') === 'light') {
      body.classList.add('light-theme');
      if (icon) icon.textContent = '🌙';
    }
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('light-theme');
      const isLight = body.classList.contains('light-theme');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      if (icon) icon.textContent = isLight ? '🌙' : '☀️';
    });
  }

  // Закрытие мобильного меню при клике на ссылку
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      navList?.classList.remove('open');
    });
  });
});

// Простая карусель
function initCarousel() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;
  const track = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');
  let index = 0;

  const update = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    update();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
  });

  // Автопрокрутка (опционально)
  setInterval(() => {
    index = (index + 1) % slides.length;
    update();
  }, 5000);
}

// Вызвать после загрузки контента
document.addEventListener('DOMContentLoaded', initCarousel);