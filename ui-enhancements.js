// Scroll and UI enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling for a better user experience
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Create and add back-to-top button
  function addBackToTopButton() {
    const backToTop = document.createElement('button');
    backToTop.classList.add('back-to-top');
    backToTop.innerHTML = '↑';
    backToTop.title = 'Back to top';
    document.body.appendChild(backToTop);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    
    // Scroll to top when clicked
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Add subtle hover effects to each category
  function enhanceCategoryCards() {
    const categories = document.querySelectorAll('.category');
    
    categories.forEach(category => {
      // Add a subtle entry animation with delay
      category.style.opacity = '0';
      category.style.transform = 'translateY(20px)';
      category.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      
      // Set timeout for each card to create a staggered effect
      setTimeout(() => {
        category.style.opacity = '1';
        category.style.transform = 'translateY(0)';
      }, 100 + Math.random() * 300);
      
      // Add a category icon shadow effect on hover
      const emoji = category.querySelector('.emoji');
      if (emoji) {
        category.addEventListener('mouseenter', () => {
          emoji.classList.add('emoji-glow');
        });
        
        category.addEventListener('mouseleave', () => {
          emoji.classList.remove('emoji-glow');
        });
      }
    });
  }
  
  // Enhance category descriptions with a fade-in effect
  function enhanceCategoryDescriptions() {
    const descriptions = document.querySelectorAll('.category-desc');
    
    descriptions.forEach(desc => {
      // Add animation class
      desc.classList.add('fade-in-description');
    });
  }
  
  // Initialize UI enhancements
  addBackToTopButton();
  enhanceCategoryCards();
  enhanceCategoryDescriptions();
});
