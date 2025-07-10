// Visitor Information Script
document.addEventListener('DOMContentLoaded', function() {
  // Set the last updated date
  const lastUpdatedElement = document.getElementById('last-updated');
  // The date is hardcoded in the HTML, but you can update it manually when needed

  // Get visitor's IP and location information
  fetchVisitorInfo();
});

// Function to fetch visitor's IP and location
async function fetchVisitorInfo() {
  try {
    // Use ipinfo.io to get IP and location data
    const response = await fetch('https://ipinfo.io/json');
    const data = await response.json();

    // Extract relevant information
    const ip = data.ip || 'Unknown';
    const city = data.city || '';
    const region = data.region || '';
    const country = data.country || '';

    // Format the location string
    let locationString = '';
    if (city && region) {
      locationString = `${city}, ${region}`;
    } else if (city) {
      locationString = city;
    } else if (region) {
      locationString = region;
    }

    if (country) {
      locationString += locationString ? `, ${country}` : country;
    }

    // Update the visitor location element
    const visitorLocationElement = document.getElementById('visitor-location');
    visitorLocationElement.textContent = `You're visiting from: ${locationString} (${ip})`;
  } catch (error) {
    console.error('Error fetching visitor information:', error);
    const visitorLocationElement = document.getElementById('visitor-location');
    visitorLocationElement.textContent = 'Unable to determine your location';
  }
}
