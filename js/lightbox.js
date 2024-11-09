// Select all thumbnails
const thumbnails = document.querySelectorAll('.thumbnail');
// Select the lightbox and its components
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Convert NodeList to an array to enable indexing
const imagesArray = Array.from(thumbnails);
let currentIndex = 0;

// Open the lightbox
function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = imagesArray[index].src;
    lightbox.classList.add('active');
}

// Close the lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
}

// Show next image
function showNext() {
    currentIndex = (currentIndex + 1) % imagesArray.length;
    lightboxImg.src = imagesArray[currentIndex].src;
}

// Show previous image
function showPrev() {
    currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
    lightboxImg.src = imagesArray[currentIndex].src;
}

// Event Listeners
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => openLightbox(index));
});
closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

// Close lightbox on outside click
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
});
