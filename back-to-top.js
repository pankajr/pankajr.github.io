/**
 * Back to Top Button functionality
 * Shows the button when scrolling down and smoothly scrolls to top when clicked
 * With performance optimizations and smooth animations
 */
document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.getElementById('back-to-top');
  let lastScrollTop = 0;
  let ticking = false;

  // Optimize scroll event handling with requestAnimationFrame
  function handleScroll() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        if (window.scrollY > 300) {
          backToTopButton.classList.add('visible');
        } else {
          backToTopButton.classList.remove('visible');
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  // Throttled scroll event listener
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Scroll to top with a smooth animation
  backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();

    // Add a subtle animation effect to the button
    backToTopButton.style.transform = 'scale(0.9)';

    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Reset button style after animation
    setTimeout(() => {
      backToTopButton.style.transform = '';
    }, 300);
  });

  // Check initial scroll position (in case page is refreshed while scrolled down)
  handleScroll();
});
