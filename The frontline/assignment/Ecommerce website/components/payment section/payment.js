const features = [
  {
    icon: "🧴",
    title: "Cruelty free & Vegan",
    description: "High shine, long-lasting vegan nail polishes in a range of fashion colors and finishes."
  },
  {
    icon: "🌿",
    title: "Natural Ingredients",
    description: "Our products use plant-based, skin-friendly formulas without harmful chemicals."
  },
  {
    icon: "✨",
    title: "Glowing Finish",
    description: "Leaves your nails with a professional salon-like glow that lasts for days."
  }
];

const section = document.getElementById("features-section");

features.forEach(item => {
  const box = document.createElement("div");
  box.className = "feature-box";

  box.innerHTML = `
    <div class="feature-icon">${item.icon}</div>
    <div class="feature-title">${item.title}</div>
    <div class="feature-description">${item.description}</div>
  `;

  section.appendChild(box);
});
