// ----main---
document.addEventListener('DOMContentLoaded', () => {
    const heroTextElements = document.querySelectorAll('.hero-text, .hero-text .animated-text');

    const options = {
        threshold: 0.1 // Ejecutar la animación cuando al menos el 10% del elemento sea visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    heroTextElements.forEach(element => {
        observer.observe(element);
    });
});


// --section nosotros
document.addEventListener('DOMContentLoaded', function() {
    let observerOptions = {
        root: null,
        rootMargin: '100px',
        threshold: 0.6
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, observerOptions);

    let sections = document.querySelectorAll('.section-nosotros');
    sections.forEach(section => {
        observer.observe(section);
    });
});




// SECTION-SERVICIOS   section-servicios

document.addEventListener('DOMContentLoaded', function() {
  let observerOptions = {
      root: null,
      rootMargin: '100px',
      threshold: 0.6
  };

  let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
          } else {
              entry.target.classList.remove('in-view');
          }
      });
  }, observerOptions);

  let leftTextElements = document.querySelectorAll('.left-text');
  let rightTextElements = document.querySelectorAll('.right-text');
  let elements = [...leftTextElements, ...rightTextElements];

  elements.forEach(element => {
      observer.observe(element);
  });
});










