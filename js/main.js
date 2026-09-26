// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu after clicking a link (mobile)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Gallery lightbox
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('galleryLightbox');
const lightboxImage = lightbox ? lightbox.querySelector('img') : null;
const closeButton = document.querySelector('.lightbox-close');
const prevButton = document.querySelector('.lightbox-arrow-left');
const nextButton = document.querySelector('.lightbox-arrow-right');

let galleryIndex = 0;

if (lightbox && lightboxImage && closeButton && prevButton && nextButton) {
  const showImageAtIndex = (index) => {
    const images = Array.from(galleryImages);
    if (!images.length) return;

    galleryIndex = (index + images.length) % images.length;
    const image = images[galleryIndex];
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      showImageAtIndex(index);
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  prevButton.addEventListener('click', () => {
    showImageAtIndex(galleryIndex - 1);
  });

  nextButton.addEventListener('click', () => {
    showImageAtIndex(galleryIndex + 1);
  });

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('open')) return;

    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowLeft') {
      showImageAtIndex(galleryIndex - 1);
    } else if (event.key === 'ArrowRight') {
      showImageAtIndex(galleryIndex + 1);
    }
  });
}
