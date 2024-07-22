let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function moveSlide(step) {
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Initialize the slider
showSlide(currentSlide);

// Optionally, set up auto-slide
setInterval(() => moveSlide(1), 5000); // Change slide every 5 seconds
