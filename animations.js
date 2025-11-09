document.addEventListener("DOMContentLoaded", () => {
  // --- Sticky Header ---
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Scroll Animations ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  // Find all elements you want to animate and "observe" them
  const hiddenElements = document.querySelectorAll('.fade-in');
  hiddenElements.forEach((el) => observer.observe(el));
});