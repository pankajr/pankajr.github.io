// Coffee section enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Create floating coffee beans animation
  function createCoffeeBeans() {
    const coffeeSection = document.querySelector('.category:nth-of-type(2)');
    
    if (coffeeSection) {
      // Add a relative position to the coffee category for positioning beans
      coffeeSection.style.position = 'relative';
      coffeeSection.style.overflow = 'hidden';
      
      // Create 10 coffee beans
      for (let i = 0; i < 10; i++) {
        const bean = document.createElement('div');
        bean.classList.add('coffee-bean');
        
        // Randomize bean positions and animations
        const size = Math.random() * 10 + 10; // Size between 10-20px
        const left = Math.random() * 100; // Position
        const delay = Math.random() * 5; // Animation delay
        const duration = Math.random() * 10 + 10; // Animation duration
        const rotation = Math.random() * 360; // Initial rotation
        
        bean.style.width = `${size}px`;
        bean.style.height = `${size * 0.6}px`;
        bean.style.left = `${left}%`;
        bean.style.animationDelay = `${delay}s`;
        bean.style.animationDuration = `${duration}s`;
        bean.style.transform = `rotate(${rotation}deg)`;
        
        coffeeSection.appendChild(bean);
      }
    }
  }
  
  // Add image previews on hover for coffee products
  function addCoffeeImagePreviews() {
    // Define product images
    const coffeeImages = {
      'Gracenote Coffee': 'https://images.squarespace-cdn.com/content/v1/5b2ea420cef3727def7671bd/1638976559058-0JN5F3GVMCXAJUMEE0VU/20211117_GN_ProductReviews_FINAL_1125x1125-02.jpg',
      'Breville - the Dual Boiler™': 'https://assets.breville.com/cdn-cgi/image/width=1440,format=auto/BES920/BES920BSS1BUS1/BES920_BSS_HOV_01.jpg',
      'Fellow Opus Grinder': 'https://m.media-amazon.com/images/I/71j+wW1TcLL._AC_SL1500_.jpg',
      'Cometeer Coffee': 'https://cdn.shopify.com/s/files/1/0557/4650/8995/files/cometeer-pods-new-website-min_1600x.jpg'
    };
    
    // Get all coffee links
    const coffeeLinks = document.querySelectorAll('.category:nth-of-type(2) .link-card');
    
    coffeeLinks.forEach(link => {
      const titleEl = link.querySelector('.link-title');
      if (!titleEl) return;
      
      // Extract the product name (without the star if present)
      let productName = titleEl.textContent.split('★')[0].trim();
      
      // Find matching image
      const imageUrl = coffeeImages[productName];
      
      if (imageUrl) {
        // Create image preview container
        const preview = document.createElement('div');
        preview.classList.add('coffee-preview');
        preview.innerHTML = `<img src="${imageUrl}" alt="${productName}" loading="lazy">`;
        
        // Add hover event listeners
        link.addEventListener('mouseenter', () => {
          preview.classList.add('show');
        });
        
        link.addEventListener('mouseleave', () => {
          preview.classList.remove('show');
        });
        
        link.appendChild(preview);
      }
    });
  }

  // Initialize coffee enhancements
  createCoffeeBeans();
  setTimeout(addCoffeeImagePreviews, 500); // Slight delay to ensure DOM is ready
  
  // Fix broken nesting in Coffee section
  const coffeeSection = document.querySelector('.category:nth-of-type(2)');
  if (coffeeSection) {
    const links = coffeeSection.querySelectorAll('.link-card');
    // Check for nested links and fix them if found
    links.forEach(link => {
      const nestedLinks = link.querySelectorAll('.link-card');
      if (nestedLinks.length > 0) {
        // Move nested links outside
        nestedLinks.forEach(nestedLink => {
          coffeeSection.appendChild(nestedLink);
        });
      }
    });
  }
});
