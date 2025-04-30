let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-container img");
const indicators = document.querySelectorAll(".carousel-indicator");
const themeToggle = document.getElementById("theme-toggle");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index);
  });
}

function goToSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

themeToggle.addEventListener("click", toggleTheme);

showSlide(currentIndex);