// Add page loading effect
document.addEventListener('DOMContentLoaded', function() {
  // Add fade-in effect to the entire page
  document.body.classList.add('loading');
  
  setTimeout(() => {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
  }, 300);
  
  // Create a custom cursor trail effect
  let cursorTrailEnabled = false;
  
  // Toggle cursor trail with keyboard shortcut (Alt+T)
  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === 't') {
      cursorTrailEnabled = !cursorTrailEnabled;
      
      // Show a brief message to confirm toggle
      const toggleMsg = document.createElement('div');
      toggleMsg.classList.add('toggle-message');
      toggleMsg.textContent = cursorTrailEnabled ? 'Cursor trail enabled' : 'Cursor trail disabled';
      document.body.appendChild(toggleMsg);
      
      setTimeout(() => {
        toggleMsg.classList.add('fade');
        setTimeout(() => toggleMsg.remove(), 500);
      }, 1500);
    }
  });
  
  // Create and manage cursor trail particles
  document.addEventListener('mousemove', (e) => {
    if (!cursorTrailEnabled) return;
    
    const particle = document.createElement('div');
    particle.classList.add('cursor-particle');
    
    // Random color based on the theme
    const colors = [
      getComputedStyle(document.documentElement).getPropertyValue('--link-color'),
      getComputedStyle(document.documentElement).getPropertyValue('--star-color')
    ];
    
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.appendChild(particle);
    
    // Remove particle after animation completes
    setTimeout(() => {
      particle.remove();
    }, 1000);
  });
});
