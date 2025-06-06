const gridViewBtn = document.getElementById("gridView");
const listViewBtn = document.getElementById("listView");
const featuredSection = document.getElementById("featuredProducts");

// Products data array (8 products)
const products = [
  {
    name: "Soothing Body Lotion",
    img: "../../assets/pic1.jpg",
    originalPrice: "Rs 53,000.00",
    discountedPrice: "Rs 51,600.00 PKR",
    discountText: "-3% Sale",
    colors: ["blue", "green", "black"]
  },
  {
    name: "Gentle Face Wash",
    img: "../../assets/pic2.jpg",
    originalPrice: "Rs 4,000.00",
    discountedPrice: "Rs 3,800.00 PKR",
    discountText: "-5% Sale",
    colors: ["blue", "green"]
  },
  {
    name: "Refreshing Toner",
    img: "../../assets/pic3.jpg",
    originalPrice: "Rs 6,500.00",
    discountedPrice: "Rs 6,200.00 PKR",
    discountText: "-4% Sale",
    colors: ["black"]
  },
  {
    name: "Herbal Shampoo",
    img: "../../assets/pic4.jpg",
    originalPrice: "Rs 1,500.00",
    discountedPrice: "Rs 1,400.00 PKR",
    discountText: "-7% Sale",
    colors: ["green"]
  },
  {
    name: "Day Cream SPF",
    img: "../../assets/img5.jpg",
    originalPrice: "Rs 3,500.00",
    discountedPrice: "Rs 3,000.00 PKR",
    discountText: "-14% Sale",
    colors: ["blue", "black"]
  },
  {
    name: "Vitamin C Serum",
    img: "../../assets/img6.jpg",
    originalPrice: "Rs 5,000.00",
    discountedPrice: "Rs 4,750.00 PKR",
    discountText: "-5% Sale",
    colors: ["green"]
  },
  {
    name: "Hydrating Cleanser",
    img: "../../assets/pic4.jpg",
    originalPrice: "Rs 2,200.00",
    discountedPrice: "Rs 2,000.00 PKR",
    discountText: "-9% Sale",
    colors: ["black"]
  },
  {
    name: "Night Repair Cream",
    img: "../../assets/pic1.jpg",
    originalPrice: "Rs 7,000.00",
    discountedPrice: "Rs 6,300.00 PKR",
    discountText: "-10% Sale",
    colors: ["blue"]
  }
];

// Render products inside featuredSection
function renderProducts(productsArray) {
  featuredSection.innerHTML = "";
  productsArray.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image">
        <img src="${product.img}" alt="${product.name}">
        <span class="sale-tag">${product.discountText}</span>
        <div class="top-icons">
          <span class="icon wishlist" title="Add to Wishlist">♡</span>
          <span class="icon cart" title="Add to Cart">🛒</span>
        </div>
        <div class="quick-add">Quick Add</div>
      </div>
      <div class="product-details">
        <h3>${product.name}</h3>
        <div class="price">
          <del>${product.originalPrice}</del>
          <span class="discounted">${product.discountedPrice}</span>
        </div>
        <div class="colors">
          ${product.colors.map(color => `<span class="color ${color}" title="${color}"></span>`).join("")}
        </div>
      </div>
    `;

    featuredSection.appendChild(card);
  });
}

// Initial render of all products
renderProducts(products);

// Grid/List view toggle
gridViewBtn.addEventListener("click", () => {
  featuredSection.classList.remove("list-view");
  gridViewBtn.classList.add("active");
  listViewBtn.classList.remove("active");
});

listViewBtn.addEventListener("click", () => {
  featuredSection.classList.add("list-view");
  listViewBtn.classList.add("active");
  gridViewBtn.classList.remove("active");
});

// Pagination logic
const pageLinks = document.querySelectorAll(".page-link");

pageLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Remove active from all links
    pageLinks.forEach(l => l.classList.remove("active"));
    // Add active to clicked link
    link.classList.add("active");

    // Optional: you can implement product pagination here (if desired)
    // For now, just toggling active underline on page links
  });
});
