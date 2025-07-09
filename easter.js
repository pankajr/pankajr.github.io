// Easter Egg: Konami Code Implementation
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiCodePosition = 0;

// Listen for keydown events
document.addEventListener('keydown', function(e) {
  // Get the key pressed
  const key = e.key;

  // Check if the key matches the expected key in the sequence
  const requiredKey = konamiCode[konamiCodePosition];

  if (key.toLowerCase() === requiredKey.toLowerCase()) {
    // Move to the next key in the sequence
    konamiCodePosition++;

    // If the entire sequence is entered correctly
    if (konamiCodePosition === konamiCode.length) {
      // Activate Easter egg
      activateEasterEgg();
      // Reset the sequence position
      konamiCodePosition = 0;
    }
  } else {
    // Reset if the wrong key is pressed
    konamiCodePosition = 0;
  }
});

function activateEasterEgg() {
  // Play a fun sound (optional)
  const sound = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');
  sound.volume = 0.5;
  sound.play().catch(e => console.log('Audio not played:', e));

  // Create confetti effect
  createConfetti();

  // Add a fun message
  const message = document.createElement('div');
  message.classList.add('easter-egg-message');
  message.innerHTML = '<span>🎉 You found the Easter egg! 🎉</span><br><span class="small">Thanks for checking out my recommendations!</span>';
  document.body.appendChild(message);

  // Remove the message after a while
  setTimeout(() => {
    message.classList.add('fade-out');
    setTimeout(() => {
      document.body.removeChild(message);
    }, 1000);
  }, 5000);
}

function createConfetti() {
  const confettiCount = 150;
  const colors = ['#5182c8', '#e9a800', '#ff6b6b', '#4ecdc4', '#7b68ee'];

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(confetti);

    // Remove confetti after animation ends
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Add a hidden sparkle icon that can be clicked as an alternative way to trigger the Easter egg
window.addEventListener('DOMContentLoaded', () => {
  const hiddenIcon = document.createElement('div');
  hiddenIcon.classList.add('hidden-icon');
  hiddenIcon.innerHTML = '✨';
  hiddenIcon.title = 'Click me 5 times...';
  document.body.appendChild(hiddenIcon);

  let clickCount = 0;
  hiddenIcon.addEventListener('click', () => {
    clickCount++;
    if (clickCount >= 5) {
      activateEasterEgg();
      clickCount = 0;
    }
  });
});
