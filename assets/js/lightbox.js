// assets/js/lightbox.js

function initLightbox() {
  // Создаём контейнер лайтбокса, если его нет
  let lightbox = document.querySelector('.lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <span class="lightbox-close">&times;</span>
      <img src="" alt="">
      <div class="lightbox-caption"></div>
    `;
    document.body.appendChild(lightbox);
  }

  const lightboxImg = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const lightboxClose = lightbox.querySelector('.lightbox-close');

  // Открытие при клике на gallery-item
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const fullSrc = item.dataset.full;
      const caption = item.querySelector('img')?.alt || '';
      if (fullSrc) {
        lightboxImg.src = fullSrc;
        lightboxCaption.textContent = caption;
        lightbox.classList.add('active');
      }
    });
  });

  // Закрытие
  function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  }
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}
