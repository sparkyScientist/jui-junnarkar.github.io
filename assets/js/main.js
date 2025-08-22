// Mobile menu toggle
const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
if (btn && menu) btn.addEventListener('click', () => menu.classList.toggle('hidden'));

// Optional: simple fade-in on scroll like your current IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.page-section').forEach(el => observer.observe(el));
});

