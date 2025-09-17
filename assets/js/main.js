// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Highlight active nav link based on current page
(function setActiveNav(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar .nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active', 'fw-semibold');
  });
})();

// Bootstrap validation (non-empty / basic email)
(function () {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        // For demo: prevent actual submission, show success
        event.preventDefault();
        const alert = document.getElementById('formAlert');
        if (alert) alert.classList.remove('d-none');
        form.reset();
        form.classList.remove('was-validated');
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

// Reveal-on-scroll animations using IntersectionObserver + Animate.css
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
