const events = [
  { 
    name: "Sunflower U-Pick",
    season: "Spring",
    description: "Walk through sunflower fields and create a bouquet",
    image: ,
    dates: 
  },
  { 
    name: "Strawberry Picking",
    season: "Spring",
    description: "Fresh strawberry picking every spring weekend.",
    image: ,
    dates: 
  },
  { 
    name: "Baby Animal Visits",
    season: "Spring",
    description: "Meet baby goats, ducklings, and chicks in the barn.",
    image: ,
    dates: 
  },
  { 
    name: "Garden Seedlings",
    season: "Spring",
    description: "Look at plants and seedlings for your home garden.",
    image: ,
    dates: 
  },
{ 
    name: "Fresh Summer Vegetables",
    season: "Summer",
    description: "Tomatoes, zucchini, cucumbers, peppers, corn, and green beans.",
    image: ,
    dates: 
  },
  { 
    name: "Blueberry Harvest",
    season: "Summer",
    description: "Blueberry picking from July through early August each summer.",
    image: ,
    dates: 
  },
  { 
    name: "Late Summer Sunflowers",
    season: "Summer",
    description: "Second sunflower bloom appears across the farm during late July.",
    image: ,
    dates: 
  },
  { 
    name: "Farm Dinner Nights",
    season: "Summer",
    description: "Farm-to-table dinner events on select Saturday evenings with reservations.",
    image: ,
    dates: 
  },
  { 
    name: "Holiday Market",
    season: "Winter",
    description: "Local artisans and farm-made gifts featured during the first December weekends.",
    image: ,
    dates: 
  },
  { 
    name: "Christmas Trees",
    season: "Winter",
    description: "Pre-cut and choose-and-cut Christmas trees available throughout the holiday season.",
    image: ,
    dates: 
  },
  { 
    name: "Fresh Winter Wreaths",
    season: "Winter",
    description: "Handmade wreaths and greenery decorations sold daily during the winter months.",
    image: ,
    dates: 
  },
  { 
    name: "Year-Round Farm Store",
    season: "Winter",
    description: "Farm store remains open year-round with reduced hours through early spring.",
    image: ,
    dates: 
  },
  { 
    name: "Pumpkin Patch",
    season: "Fall",
    description: "More than twenty pumpkin varieties available for U-Pick and pre-picked purchases.",
    image: ,
    dates: 
  },
  { 
    name: "Weekend Hayrides",
    season: "Fall",
    description: "Hayrides run every weekend through October with scenic rides around the farm.",
    image: ,
    dates: 
  },
  { 
    name: "Fresh Apple Cider",
    season: "Fall",
    description: "Fresh apple cider pressed on-site daily and sold by the jug throughout fall.",
    image: ,
    dates: 
  },
  { 
    name: "Harvest Festival",
    season: "Fall",
    description: "Food vendors, live music, and craft fairs during the final October weekends.",
    image: ,
    dates: 
  },
];


let cart = [];

const container = document.getElementById("Seasons");
const searchBar = document.getElementById("searchBar");

function render(items) {
  container.innerHTML = "";

  items.forEach((p, index) => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="season-card text-center h-100">

          <img src="${e.image}" class="event-img">

          <h3>${e.name}</h3>
          <p>$${e.season}.00</p>
          <p>$${e.dates}.00</p>
          <p>$${e.description}.00</p>

        

        </div>
      </div>
    `;
  });
}


searchBar.addEventListener("input", () => {
  const value = searchBar.value.toLowerCase();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  render(filtered);
});

render(products);