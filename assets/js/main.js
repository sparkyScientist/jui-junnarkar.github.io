// Mobile menu toggle


const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
function toggleMenu() { if (mobileMenu) mobileMenu.classList.toggle('hidden'); }
if (mobileMenuButton) mobileMenuButton.addEventListener('click', toggleMenu);

// If you later want the fade-in animations on non-home pages,
// you can add the IntersectionObserver here too (optional).
// Optional: simple fade-in on scroll like your current IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
}, { threshold: 0.1 });
// minimal page fade-in (multi-page Jekyll)
document.documentElement.classList.add('is-loading');
window.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.remove('is-loading');
  document.documentElement.classList.add('is-ready');
});
