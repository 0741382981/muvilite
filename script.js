let currentIndex = 0;
const items = document.querySelectorAll('.item');
const totalItems = items.length;

function moveNext() {
  currentIndex++;
  if (currentIndex >= totalItems) {
    currentIndex = 0;
  }
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 320; // Adjust according to item width and margin
  document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
}

// Automatic carousel movement
setInterval(moveNext, 3000); // Adjust timing as needed
// JavaScript for automatic slideshow
let index = 0;
const images = document.querySelectorAll('.banner-img');
const intervalTime = 5000; // Interval time in milliseconds (5 seconds)

function changeImage() {
    // Hide the currently active image
    images[index].classList.remove('active');
    // Move to the next image
    index = (index + 1) % images.length;
    // Display the next image
    images[index].classList.add('active');
}

setInterval(changeImage, intervalTime);

