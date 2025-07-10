// Display the last updated time
document.addEventListener('DOMContentLoaded', function() {
  const footer = document.querySelector('.footer');
  
  if (footer) {
    // Create the last updated element
    const lastUpdated = document.createElement('div');
    lastUpdated.classList.add('last-updated');
    
    // Get current date in a nice format
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    
    // Set the text
    lastUpdated.innerHTML = `Last updated: <span>${formattedDate}</span>`;
    
    // Add to the footer
    footer.appendChild(lastUpdated);
  }
});
