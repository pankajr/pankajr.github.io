// Add a coffee fact feature
document.addEventListener('DOMContentLoaded', function() {
  // Coffee facts
  const coffeeFacts = [
    "Coffee beans are actually the seeds of a fruit called a coffee cherry.",
    "It takes about 42 coffee beans to make an espresso.",
    "Coffee is the second most traded commodity in the world, after oil.",
    "The world's most expensive coffee, Kopi Luwak, costs up to $600 per pound.",
    "The word 'espresso' means 'pressed out' in Italian.",
    "Brazil produces about one-third of the world's coffee.",
    "Coffee was first discovered in Ethiopia around the 9th century.",
    "Finland is the largest consumer of coffee per capita in the world.",
    "The first webcam was invented to monitor a coffee pot at Cambridge University.",
    "A cup of black coffee only has one calorie.",
    "Dark roast coffee actually has less caffeine than lighter roasts.",
    "Coffee can help prevent cavities by killing bacteria that causes tooth decay.",
    "The largest cup of coffee ever filled a 9-foot tall cup and contained 22,739 liters.",
    "Coffee beans can be used as fertilizer in gardens.",
    "The word 'coffee' comes from the Arabic word 'qahwah'."
  ];
  
  // Get the coffee section
  const coffeeSection = document.querySelector('.category:nth-of-type(2)');
  
  if (coffeeSection) {
    // Create a coffee fact button
    const factButton = document.createElement('button');
    factButton.classList.add('coffee-fact-button');
    factButton.innerHTML = '☕ Random Coffee Fact';
    
    // Create a coffee fact display
    const factDisplay = document.createElement('div');
    factDisplay.classList.add('coffee-fact-display');
    factDisplay.style.display = 'none';
    
    // Add button click handler
    factButton.addEventListener('click', () => {
      // Get a random fact
      const randomFact = coffeeFacts[Math.floor(Math.random() * coffeeFacts.length)];
      
      // Display the fact
      factDisplay.textContent = randomFact;
      factDisplay.style.display = 'block';
      
      // Hide the fact after a while
      setTimeout(() => {
        factDisplay.classList.add('fade-out');
        
        setTimeout(() => {
          factDisplay.classList.remove('fade-out');
          factDisplay.style.display = 'none';
        }, 1000);
      }, 8000);
    });
    
    // Add elements to the coffee section
    coffeeSection.appendChild(factButton);
    coffeeSection.appendChild(factDisplay);
  }
});
