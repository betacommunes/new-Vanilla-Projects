const deals = [
  {
    tag: "Deal of the Day!",
    heading: "Define yourself<br>be different.",
    desc: "Here is your chance to upgrade your wardrobe with a variation of styles and fits that are both.",
    images: ["../../assets/banner-5.webp", "../../assets/banner-6.webp"],
    button: "Shop Now"
  }
];


const dealContainer = document.getElementById("dealContainer");

deals.forEach((deal) => {
  const section = document.createElement("section");
  section.className = "deal-section";

  section.innerHTML = `
    <div class="deal-images">
      <img src="${deal.images[0]}" alt="Deal Image 1">
      <img src="${deal.images[1]}" alt="Deal Image 2">
    </div>
    <div class="deal-text">
      <small>${deal.tag}</small>
      <h2>${deal.heading}</h2>
      <p>${deal.desc}</p>
      <button>${deal.button}</button>
    </div>
  `;

  dealContainer.appendChild(section);
});
