const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.style.display === "flex";
    mobileMenu.style.display = isOpen ? "none" : "flex";
  });
}

// Hero slideshow (homepage only)
const slides = document.querySelectorAll(".hero-slideshow .slide");
const dots = document.querySelectorAll(".hero-slideshow .dot");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentSlide = index;
}

if (slides.length && dots.length) {
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  setInterval(() => {
    const nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
  }, 5000);
}

// Simple nav active highlighting (fallback if class not set in HTML)
const navLinks = document.querySelectorAll(".desktop-nav a, #mobileMenu a");
const currentPath = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (!href || href === "#") return;
  const hrefFile = href.split("/").pop();
  if (hrefFile === currentPath) {
    link.classList.add("active-nav");
  }
});