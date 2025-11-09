document.addEventListener('DOMContentLoaded', () => {
  // --- Step 1: Add your image file names here ---
  const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
    'images/image7.jpg',
    'images/image8.jpg',
    'images/image9.jpg',
    'images/image10.jpg',
    'images/image11.jpg',
    'images/image12.jpg',
    'images/image13.jpg',
    'images/image14.jpg',
    'images/image15.jpg',
    'images/image16.jpg',
    'images/image17.jpg',
    'images/image18.jpg',
    'images/image19.jpg',
    'images/image20.jpg',
    'images/image21.jpg',
    'images/image22.jpg',
    'images/image23.jpg',
    'images/image24.jpg',
    'images/image25.jpg',
  ];

  // --- Step 2: The code below builds the gallery and lightbox ---
  const galleryContainer = document.querySelector('.gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');

  // Create gallery items from the images array
  images.forEach(src => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = "Gallery image"; // You can add more descriptive alts if needed

    galleryItem.appendChild(img);
    galleryContainer.appendChild(galleryItem);
  });

  // Lightbox functionality
  galleryContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      lightbox.style.display = 'flex';
      lightboxImg.src = e.target.src;
    }
  });

  // Close the lightbox
  const closeLightbox = () => {
    lightbox.style.display = 'none';
  }

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) { // Close if clicking on the background
      closeLightbox();
    }
  });
});