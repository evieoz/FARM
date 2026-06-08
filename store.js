const products = [
  { 
    name: "Produce Basket",
    image: "produce.png",
    price: 18
  },
  { 
    name:"Sourdough Bread",
    image: "bread.png",
    price: 6
  },
  { 
    name: "Fresh Eggs", 
    image: "eggs.png", 
    price: 5 
  },
  { 
    name: "Strawberry Preserves", 
    image: "strawberry.png", 
    price: 7 
  },
  { 
    name: "Blueberry Preserves", 
    image: "blueberry.png", 
    price: 7 
  },
  { 
    name: "Apple Pie", 
    image: "applepie.png",
    price: 12 
    },
  { 
    name: "Raw Honey", 
    image: "honey.png", 
    price: 10 
  },
  { 
    name: "Apple Cider",
    image: "applecider.png", 
    price: 8 
    },
];

let cart = [];

const container = document.getElementById("storeContainer");
const searchBar = document.getElementById("searchBar");

function render(items) {
  container.innerHTML = "";

  items.forEach((p) => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="store-card text-center h-100">

          <img src="${p.image}" class="product-img">

          <h3>${p.name}</h3>
          <p>$${p.price}.00</p>

          <button class="farm-btn" onclick="addToCartByName('${p.name}')">
            Add to Cart
          </button>

        </div>
      </div>
    `;
  });
}



function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function checkout() {

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let receipt = "HOLLOW CREEK FARM \n\n";
  let total = 0;

  cart.forEach(item => {
    receipt += item.name + " - $" + item.price + "\n";
    total += item.price;
  });

  receipt += "\n-----------------\nTOTAL: $" + total;

  alert(receipt);

  cart = [];
  updateCart();

  alert("Thank you for shopping at Hollow Creek Farm!");
}


searchBar.addEventListener("input", () => {
  const value = searchBar.value.toLowerCase();

  const filtered = products.filter((p) => p.name.toLowerCase().includes(value));

  render(filtered);
});


function updateCart() {

  document.getElementById("cartCount").innerText = cart.length;

  let total = 0;
  let itemList = "";

  cart.forEach((item, i) => {

    total += item.price;

    itemList += `
      <p>
        ${item.name} - $${item.price}

        <button
          onclick="removeItem(${i})"
          class="btn btn-sm btn-danger ms-2">
          X
        </button>
      </p>
    `;
  });

  document.getElementById("cartTotal").innerText = total;
  document.getElementById("cartItems").innerHTML = itemList;
}

function addToCartByName(name) {

  const product = products.find(p => p.name === name);

  cart.push(product);

  updateCart();

  alert(product.name + " added to cart");
}

render(products);

