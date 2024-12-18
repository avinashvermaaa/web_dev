function showCategory(category) {
  // Remove active class from all tabs
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Add active class to the clicked tab
  document
    .querySelector(`.tab[onclick="showCategory('${category}')"]`)
    .classList.add("active");

  // Hide all categories
  document.querySelectorAll(".category").forEach((cat) => {
    cat.classList.remove("active");
  });

  // Show the selected category
  document.getElementById(category).classList.add("active");
}


// Toggle dark mode and store preference in localStorage
function toggleDarkMode() {
  // Toggle the dark mode class on the body element
  document.body.classList.toggle('dark-mode');

  // Update the dark mode state in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
    document.querySelector('.dark-mode-toggle').textContent = '🌞'; // Sun icon for light mode
  } else {
    localStorage.setItem('darkMode', 'disabled');
    document.querySelector('.dark-mode-toggle').textContent = '🌙'; // Moon icon for dark mode
  }
}


// Check if dark mode is already saved in localStorage on page load
window.onload = function() {
  // If dark mode is enabled previously, apply dark mode
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelector('.dark-mode-toggle').textContent = '🌞'; // Set the toggle to sun icon
  }
};
