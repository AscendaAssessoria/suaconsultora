document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Optional: stop observing once it's visible
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('.section-reveal');
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Make the hero section visible immediately
  setTimeout(() => {
    const hero = document.querySelector('.hero.section-reveal');
    if (hero) {
      hero.classList.add('visible');
    }
  }, 100);
});
