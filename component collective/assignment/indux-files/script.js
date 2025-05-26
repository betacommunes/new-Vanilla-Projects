document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const heroSection = document.querySelector('.carousel');
  const topNav = document.querySelector('.top-nav');
  
  const heroHeight = heroSection.offsetHeight;
  const topNavHeight = topNav.offsetHeight;

  window.addEventListener('scroll', function() {
    if (window.scrollY <= topNavHeight) {
      // At very top - navbar hidden
      navbar.classList.remove('initial', 'visible');
    } 
    else if (window.scrollY > topNavHeight && window.scrollY <= heroHeight) {
      // On hero section - show black navbar
      navbar.classList.add('initial');
      navbar.classList.remove('visible');
    } 
    else {
      // Past hero section - show white navbar
      navbar.classList.add('visible');
      navbar.classList.remove('initial');
    }
  });
});
// ========BLOG-SECTION==========?
 document.addEventListener('DOMContentLoaded', function() {
            const slidesContainer = document.querySelector('.blog-slides');
            const slides = document.querySelectorAll('.blog-slide');
            const buttons = document.querySelectorAll('.carousel-btn');
            let currentSlide = 0;
            const slideCount = slides.length;
            
            // Initialize slider position
            updateSliderPosition();
            
            function updateSliderPosition() {
                slidesContainer.style.transform = `translateX(-${currentSlide * 35}%)`;
                
                // Update active button
                buttons.forEach((btn, index) => {
                    btn.classList.toggle('active', index === currentSlide);
                });
            }
            
            // Button click handlers
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    currentSlide = parseInt(button.dataset.slide);
                    updateSliderPosition();
                });
            });
            
            // Auto-rotate slides (optional)
            let slideInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % slideCount;
                updateSliderPosition();
            }, 5000);
            
            // Pause on hover
            slidesContainer.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });
            
            slidesContainer.addEventListener('mouseleave', () => {
                slideInterval = setInterval(() => {
                    currentSlide = (currentSlide + 1) % slideCount;
                    updateSliderPosition();
                }, 5000);
            });
        });