// Use DOMContentLoaded to ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
        console.log('Year set to:', new Date().getFullYear());
    } else {
        console.error('Element with id "currentYear" not found!');
    }
});