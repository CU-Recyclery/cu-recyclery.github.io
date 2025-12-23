const gallerySlides = document.querySelectorAll('.inline-gallery .gallery-slide');
let galleryIndex = 0;

function rotateGallery() {
  gallerySlides[galleryIndex].classList.remove('active');
  galleryIndex = (galleryIndex + 1) % gallerySlides.length;
  gallerySlides[galleryIndex].classList.add('active');
}

setInterval(rotateGallery, 4000);