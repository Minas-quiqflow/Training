// Product data
const products = [
  { title: "Laptop", description: "High performance laptop", image: "https://picsum.photos/id/1015/400/200" },
  { title: "Headphones", description: "Noise cancelling headphones", image: "https://picsum.photos/id/1011/400/200" },
  { title: "Camera", description: "Professional DSLR camera", image: "https://picsum.photos/id/1012/400/200" },
  { title: "Smartphone", description: "Latest model smartphone", image: "https://picsum.photos/id/1013/400/200" },
  { title: "Watch", description: "Luxury wrist watch", image: "https://picsum.photos/id/1014/400/200" }
];

// Render products
function renderProducts(products) {
  const grid = document.querySelector(".grid");
  grid.innerHTML = ""; // clear previous

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="card-content">
        <div class="card-title">${product.title}</div>
        <div class="card-text">${product.description}</div>
        <button class="btn">Buy Now</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Search form logic
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const input = document.querySelector("#search");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const query = input.value.toLowerCase();
    const filtered = products.filter(p => p.title.toLowerCase().includes(query));
    renderProducts(filtered);
  });

  renderProducts(products); // initial render
});
