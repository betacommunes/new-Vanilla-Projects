// Hero Slider
const heroSlides = [
  {
    text: `<p class="slider-offer">Exclusive offer -60% off this week</p>`,
    heading: `<h1>Caronade<br> Pendant Lamp-Black</h1>`,
    span: `<p class="slider-price">Starting at <span class="price-value">$260.99</span></p>`,
    button: `<button class="slider-btn">Shop Now</button>`,
    img: 'https://htmldemo.net/furnilife/furnilife/assets/images/sliders/01.webp'
  },
  {
    text: `<p class="slider-offer">Exclusive offer -30% off this week</p>`,
    heading: `<h1>Decorative <br> Outdoor Chair 2018</h1>`,
    span: `<p class="slider-price">Starting at <span class="price-value">$260.99</span></p>`,
    button: `<button class="slider-btn">Shop Now</button>`,
    img: 'https://htmldemo.net/furnilife/furnilife/assets/images/sliders/03.webp'
  },
  {
    text: `<p class="slider-offer">Exclusive offer -30% off this week</p>`,
    heading: `<h1>Conbox Fan <br> Collection 2018</h1>`,
    span: `<p class="slider-price">Starting at <span class="price-value">$260.99</span></p>`,
    button: `<button class="slider-btn">Shop Now</button>`,
    img: 'https://htmldemo.net/furnilife/furnilife/assets/images/sliders/02.webp'
  }
];

let heroCurrentSlide = 0;

function showHeroSlide(index) {
  const image = document.getElementById('hero-slider-image');
  const content = document.getElementById('hero-slider-content');

  if (index >= heroSlides.length) heroCurrentSlide = 0;
  if (index < 0) heroCurrentSlide = heroSlides.length - 1;

  const slide = heroSlides[heroCurrentSlide];
  image.classList.add('fade');
  content.classList.add('fade');

  image.src = slide.img;
  content.innerHTML = `
    ${slide.text || ''}
    ${slide.heading || ''}
    ${slide.span || ''}
    ${slide.button || ''}
  `;

  setTimeout(() => {
    image.classList.remove('fade');
    content.classList.remove('fade');
  }, 500);
}

function heroNextSlide() {
  heroCurrentSlide++;
  showHeroSlide(heroCurrentSlide);
}

function heroPrevSlide() {
  heroCurrentSlide--;
  showHeroSlide(heroCurrentSlide);
}

// Products Sliders
const productsSliders = {
  'featured': {
    element: document.getElementById("featured-products-slider"),
    currentOffset: 0
  },
  'new-arrivals': {
    element: document.getElementById("new-arrivals-slider"),
    currentOffset: 0
  }
};

function scrollProductsSlider(sliderId, direction) {
  const slider = productsSliders[sliderId];
  const item = slider.element.querySelector(".products-slider-item");
  const itemWidth = item.offsetWidth + parseInt(getComputedStyle(document.documentElement).getPropertyValue('--item-gap'));
  const containerWidth = slider.element.parentElement.offsetWidth;
  const visibleItems = Math.floor(containerWidth / itemWidth);
  const scrollAmount = itemWidth * Math.min(visibleItems, 2);
  
  slider.currentOffset += direction * scrollAmount;
  
  const maxOffset = (slider.element.children.length - visibleItems) * itemWidth;
  if (slider.currentOffset < 0) slider.currentOffset = 0;
  if (slider.currentOffset > maxOffset) slider.currentOffset = maxOffset;
  
  slider.element.style.transform = `translateX(-${slider.currentOffset}px)`;
}

// Initialize sliders
document.addEventListener('DOMContentLoaded', function() {
  showHeroSlide(heroCurrentSlide);
  
  // Auto-scroll hero slider
  setInterval(() => {
    heroNextSlide();
  }, 5000);

  // Tab functionality for featured products
  const tabButtons = document.querySelectorAll(".products-slider-tab");
  tabButtons.forEach(tab => {
    tab.addEventListener("click", () => {
      tabButtons.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      // Reset slider position when switching tabs
      productsSliders['featured'].currentOffset = 0;
      productsSliders['featured'].element.style.transform = `translateX(0px)`;
    });
  });
});


/*<section class="hero-section">
  <button class="slider-arrow slider-arrow--left" onclick="prevSlide()">&#10094;</button>

  <div class="slider-content" id="slider-content">
    <h1>Welcome</h1>
    <p class="slider-offer">This is the first slide with a beautiful hero image.</p>
    <p class="slider-price">Starting at <span class="price-value">$260.99</span></p>
    <button class="slider-btn">Hello</button>
  </div>

  <div class="slider-image-wrapper">
    <img id="slider-image" src="https://htmldemo.net/furnilife/furnilife/assets/images/sliders/01.webp" alt="Slide Image">
  </div>

  <button class="slider-arrow slider-arrow--right" onclick="nextSlide()">&#10095;</button>
</section>
*/