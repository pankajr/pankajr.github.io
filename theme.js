// Set initial theme based on user preference
document.documentElement.classList.add('auto-theme');

// Theme toggle functionality
const lightBtn = document.getElementById('lightBtn');
const autoBtn = document.getElementById('autoBtn');
const darkBtn = document.getElementById('darkBtn');

// Check for saved theme preference or create it if not available
const savedTheme = localStorage.getItem('theme') || 'auto';

// Apply saved theme
setTheme(savedTheme);

// Theme button event listeners
lightBtn.addEventListener('click', () => setTheme('light'));
autoBtn.addEventListener('click', () => setTheme('auto'));
darkBtn.addEventListener('click', () => setTheme('dark'));

function setTheme(mode) {
  // Remove all theme classes
  document.documentElement.classList.remove('auto-theme', 'dark-theme');

  // Deactivate all buttons
  lightBtn.classList.remove('active');
  autoBtn.classList.remove('active');
  darkBtn.classList.remove('active');

  // Apply selected theme
  if (mode === 'dark') {
    document.documentElement.classList.add('dark-theme');
    darkBtn.classList.add('active');
  } else if (mode === 'auto') {
    document.documentElement.classList.add('auto-theme');
    autoBtn.classList.add('active');
  } else {
    // Light mode is default, no class needed
    lightBtn.classList.add('active');
  }

  // Save preference
  localStorage.setItem('theme', mode);
}
