const thumbnails = document.querySelectorAll('.gallery-thumbnails .thumbnail');
const fullscreenImage = document.getElementById('fullscreen-image');


fullscreenImage.src = '';


thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', (event) => {
    
    event.preventDefault();

    
    const fullImageSrc = thumbnail.getAttribute('data-fullsrc');

   
    fullscreenImage.src = fullImageSrc;

    
    toggleFullscreenGallery(true);
  });
});

const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

prevButton.disabled = true;

let currentImageIndex = 0;
const thumbnailImages = Array.from(thumbnails).map((thumbnail) => thumbnail.getAttribute('data-fullsrc'));
prevButton.addEventListener('click', () => {
 
  currentImageIndex--;

  
  if (currentImageIndex < 0) {
    currentImageIndex = thumbnailImages.length - 1;
  }

  
  fullscreenImage.src = thumbnailImages[currentImageIndex];

  updateButtonStates();
});
nextButton.addEventListener('click', () => {
  
  currentImageIndex++;
  if (currentImageIndex >= thumbnailImages.length) {
    currentImageIndex = 0;
  }

  
  fullscreenImage.src = thumbnailImages[currentImageIndex];

  updateButtonStates();
});

function toggleFullscreenGallery(visible) {
  const gallery = document.querySelector('.gallery-fullscreen');
  if (visible) {
    gallery.style.display = 'block';
  } else {
    gallery.style.display = 'none';
  }
}

function updateButtonStates() {

  prevButton.disabled = currentImageIndex === 0;
  nextButton.disabled = currentImageIndex === thumbnailImages.length - 1;
}