const products = [
  { name: "Produce Basket", image: "produce.png", price: 18 },
  { name: "Sourdough Bread", image: "bread.png", price: 6 },
  { name: "Fresh Eggs", image: "eggs.png", price: 5 },
  { name: "Strawberry Preserves", image: "strawberry.png", price: 7 },
  { name: "Blueberry Preserves", image: "blueberry.png", price: 7 },
  { name: "Apple Pie", image: "applepie.png", price: 12 },
  { name: "Raw Honey", image: "honey.png", price: 10 },
  { name: "Apple Cider", image: "applecider.png", price: 8 }
];

let cart = [];

const container = document.getElementById("storeContainer");
const searchBar = document.getElementById("searchBar");

function render(items) {
  container.innerHTML = "";

  items.forEach((p, index) => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="season-card text-center h-100">

          <img src="${p.image}" class="product-img">

          <h3>${p.name}</h3>
          <p>$${p.price}.00</p>

          <button class="farm-btn" onclick="addToCart(${index})">
            Add to Cart
          </button>

        </div>
      </div>
    `;
  });
}

function addToCart(index) {
  cart.push(products[index]);
  alert(products[index].name + " added to cart 🧺");
  console.log(cart);
}

searchBar.addEventListener("input", () => {
  const value = searchBar.value.toLowerCase();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  render(filtered);
});

render(products);