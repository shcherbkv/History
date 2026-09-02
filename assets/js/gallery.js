// assets/js/gallery.js

function initGallery() {
  document.querySelectorAll('.gallery[data-images]').forEach(container => {
    const images = JSON.parse(container.dataset.images);
    
    container.innerHTML = images.map((img, i) => `
      <figure class="gallery-item" data-full="assets/images/content/history/rulers/${img}.webp">
        <img src="assets/images/thumbs/${img}.webp" 
             alt="" loading="lazy">
      </figure>
    `).join('');
  });
}
