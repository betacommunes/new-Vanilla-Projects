const testimonials = [
  {
    name: "John",
    feedback: "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.",
    image: "../../assets/testimonial-3.webp"
  },
  {
    name: "Jenifer",
    feedback: "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.",
    image: "../../assets/testimonial-2.webp"
  },
  {
    name: "Chawdhuri",
    feedback: "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.!",
    image: "../../assets/testimonial-4.webp"
  }
];

const feedbackEl = document.getElementById("feedback");
const nameEl = document.getElementById("name");
const imageEl = document.getElementById("testimonial-img");
const dotsEl = document.getElementById("dots");

let dots = [];

testimonials.forEach((_, index) => {
  const dot = document.createElement("span");

  // 👇 Only change testimonial on press/hold
  dot.addEventListener("mousedown", () => showTestimonial(index));

  dotsEl.appendChild(dot);
  dots.push(dot);
});

function showTestimonial(index) {
  const { name, feedback, image } = testimonials[index];

  // Remove animation class to re-trigger it
  feedbackEl.classList.remove("slide-in");
  imageEl.classList.remove("slide-in");

  // Force reflow
  void feedbackEl.offsetWidth;
  void imageEl.offsetWidth;

  // Update content
  feedbackEl.textContent = feedback;
  nameEl.textContent = name;
  imageEl.src = image;

  // Add animation
  feedbackEl.classList.add("slide-in");
  imageEl.classList.add("slide-in");

  // Update active dot
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Show first testimonial on load
showTestimonial(0);
