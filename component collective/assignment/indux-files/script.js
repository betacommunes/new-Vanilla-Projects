document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const heroSection = document.querySelector('.carousel');
  const topNav = document.querySelector('.top-nav');

  const heroHeight = heroSection.offsetHeight;
  const topNavHeight = topNav.offsetHeight;

  window.addEventListener('scroll', function () {
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


document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".custom-carousel");
    const cards = document.querySelectorAll(".custom-card");
    const dots = document.querySelectorAll(".custom-dot");

    let cardWidth = cards[0].offsetWidth + 20;
    let visibleCards = window.innerWidth >= 768 ? 2 : 1;
    let totalSlides = Math.ceil(cards.length / visibleCards);
    let currentSlide = 0;

    // Initialize carousel
    updateCarousel();

    // Dot navigation
    dots.forEach((dot) => {
        dot.addEventListener("click", function () {
            currentSlide = parseInt(this.getAttribute("data-index"));
            updateCarousel();
        });
    });

    // Handle window resize
    window.addEventListener("resize", function () {
        cardWidth = cards[0].offsetWidth + 20;
        visibleCards = window.innerWidth >= 768 ? 2 : 1;
        totalSlides = Math.ceil(cards.length / visibleCards);
        updateCarousel();
    });

    function updateCarousel() {
        const translateX = -currentSlide * cardWidth * visibleCards;
        carousel.style.transform = `translateX(${translateX}px)`;

        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlide);
        });
    }
});
        // Add scroll event listener
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('meri');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Side window toggle functionality
  document.getElementById('windowToggle').addEventListener('click', function() {
    const sideWindow = document.getElementById('sideWindow');
    sideWindow.classList.toggle('active');
  });

  function toggleWindow() {
    const sideWindow = document.getElementById('sideWindow');
    sideWindow.classList.toggle('active');
  }


  // ====RATING-SECTION(MAAZ)=========
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".testimonial-carousel");
    const cards = document.querySelectorAll(".testimonial-card");
    const dots = document.querySelectorAll(".testimonial-dot");
    
    let currentSlide = 0;
    const totalSlides = cards.length;

    // Initialize carousel
    updateCarousel();

    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener("click", function() {
            currentSlide = parseInt(this.getAttribute("data-index"));
            updateCarousel();
        });
    });

    // Auto-rotate slides (optional)
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }, 5000);

    function updateCarousel() {
        const translateX = -currentSlide * 100;
        carousel.style.transform = `translateX(${translateX}%)`;

        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlide);
        });
    }
});