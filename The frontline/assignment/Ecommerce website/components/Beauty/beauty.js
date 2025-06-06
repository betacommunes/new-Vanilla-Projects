document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".beauty-section");

  // Show after a short delay (simulate scroll or load animation)
  setTimeout(() => {
    section.classList.add("visible");
  }, 300);
});
