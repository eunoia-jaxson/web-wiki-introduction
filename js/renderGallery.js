const galleryImages = [
  { src: './images/my-gallery-0.webp', alt: 'Image 1' },
  { src: './images/my-gallery-1.webp', alt: 'Image 2' },
  { src: './images/my-gallery-2.webp', alt: 'Image 3' },
  { src: './images/my-gallery-3.webp', alt: 'Image 4' },
  { src: './images/my-gallery-4.webp', alt: 'Image 5' },
  { src: './images/my-gallery-5.webp', alt: 'Image 6' },
  { src: './images/my-gallery-6.webp', alt: 'Image 7' },
  { src: './images/my-gallery-7.webp', alt: 'Image 8' },
  { src: './images/my-gallery-8.webp', alt: 'Image 9' },
];

document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.querySelector('.gallery');

  galleryImages.forEach((img) => {
    const div = document.createElement('div');
    div.classList.add('gallery-item');

    const imageEl = document.createElement('img');
    imageEl.src = img.src;
    imageEl.alt = img.alt;

    // 구조 조립
    div.appendChild(imageEl);
    galleryContainer.appendChild(div);
  });
});
