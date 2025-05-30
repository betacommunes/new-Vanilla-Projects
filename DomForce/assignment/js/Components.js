// Load and render components
document.addEventListener('DOMContentLoaded', function() {
  // Load button component
  fetch('components/button.html')
    .then(response => response.text())
    .then(html => {
      // Replace all <button>READ MORE</button> with our component
      const buttons = document.querySelectorAll('button:not(.accordian button)');
      buttons.forEach(button => {
        const newButton = document.createElement('div');
        newButton.innerHTML = html;
        newButton.querySelector('slot').textContent = button.textContent;
        button.replaceWith(newButton.firstElementChild);
      });
    });
});