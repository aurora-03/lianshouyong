// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Show/hide floating nav on scroll
var floatingNav = document.getElementById('floatingNav');
var lastScrollY = 0;
var navVisible = true;

window.addEventListener('scroll', function() {
  var currentScrollY = window.scrollY;

  if (currentScrollY < 100) {
    floatingNav.style.opacity = '1';
    floatingNav.style.pointerEvents = 'auto';
    navVisible = true;
  } else if (currentScrollY > lastScrollY && navVisible) {
    floatingNav.style.opacity = '0';
    floatingNav.style.pointerEvents = 'none';
    navVisible = false;
  } else if (currentScrollY < lastScrollY && !navVisible) {
    floatingNav.style.opacity = '1';
    floatingNav.style.pointerEvents = 'auto';
    navVisible = true;
  }

  lastScrollY = currentScrollY;
});

// Simple fade-in animation for sections
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(function(section) {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});