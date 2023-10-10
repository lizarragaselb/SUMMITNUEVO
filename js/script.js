const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let slideIndex = 0;

// Función para mostrar el slide actual
function showSlide() {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Función para avanzar al siguiente slide
function nextSlide() {
    if (slideIndex < slides.length - 1) {
        slideIndex++;
        showSlide();
    }
}

// Función para retroceder al slide anterior
function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
        showSlide();
    }
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Mostrar el primer slide al cargar la página
showSlide();
