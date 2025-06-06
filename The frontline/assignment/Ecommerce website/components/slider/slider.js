// Slider Data
const slidesData = [
  {
    image: '../../assets/frame1.jpg',
    titleSmall: 'Super Beauty',
    titleBig: 'Basic Care and Guidelines'
  },
  {
    image: '../../assets/frame2.jpg',
    titleSmall: 'Healthy Skin',
    titleBig: 'Essential Care and Tips'
  }
];

// Generate HTML for slides
const slidesContainer = document.getElementById('slidesContainer');

slidesData.forEach((slide, index) => {
  const slideDiv = document.createElement('div');
  slideDiv.classList.add('slide');
  if (index === 0) slideDiv.classList.add('active');
  slideDiv.style.backgroundImage = `url('${slide.image}')`;

  slideDiv.innerHTML = `
    <div class="text-content">
      <h5>${slide.titleSmall}</h5>
      ${(() => {
        const parts = slide.titleBig.split(' and ');
        if (parts.length === 2) {
          return `
            <h2>
              <span class="line1">${parts[0]}</span>
              <span class="line2">and ${parts[1]}</span>
            </h2>
          `;
        } else {
          return `
            <h2>
              <span class="line1">${slide.titleBig}</span>
            </h2>
          `;
        }
      })()}
      <button>Explore Now</button>
    </div>
  `;

  slidesContainer.appendChild(slideDiv);
});

// Generate dots
const dotsContainer = document.getElementById('dotsContainer');
slidesData.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('mouseenter', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
  dotsContainer.appendChild(dot);
});

// Slider Controls
let currentIndex = 0;
const allSlides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(index) {
  allSlides.forEach(slide => slide.classList.remove('active'));
  allSlides[index].classList.add('active');

  const allDots = document.querySelectorAll('.dot');
  allDots.forEach(dot => dot.classList.remove('active'));
  allDots[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + allSlides.length) % allSlides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % allSlides.length;
  showSlide(currentIndex);
});
