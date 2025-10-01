// Sample array data
const cardsData = [
  {
    title: "Mountains",
    text: "Beautiful view of the mountains during sunrise.",
    image: "https://picsum.photos/id/1018/400/200"
  },
  {
    title: "Forest",
    text: "A serene forest landscape with tall trees.",
    image: "https://picsum.photos/id/1015/400/200"
  },
  {
    title: "Beach",
    text: "Relaxing beach with clear water and golden sand.",
    image: "https://picsum.photos/id/1011/400/200"
  }
];

// Function to render cards dynamically
function renderCards() {
  const container = document.querySelector(".card-container");
  
  cardsData.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    cardElement.innerHTML = `
      <img src="${card.image}" alt="${card.title}">
      <div class="card-content">
        <div class="card-title">${card.title}</div>
        <div class="card-text">${card.text}</div>
      </div>
    `;

    container.appendChild(cardElement);
  });
}

// Call function on load
document.addEventListener("DOMContentLoaded", renderCards);
