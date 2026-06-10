const events = [
  { 
    name: "Sunflower U-Pick",
    season: "Spring",
    description: "Walk through sunflower fields and create a bouquet",
    image: "sunflower.png",
    dates: "April - June"
  },
  { 
    name: "Strawberry Picking",
    season: "Spring",
    description: "Fresh strawberry picking every spring weekend.",
    image: "strawberrypicking.png",
    dates: "April - June"
  },
  { 
    name: "Baby Animal Visits",
    season: "Spring",
    description: "Meet baby goats, ducklings, and chicks in the barn.",
    image: "babyanimal.png",
    dates: "April - June"
  },
  { 
    name: "Garden Seedlings",
    season: "Spring",
    description: "Look at plants and seedlings for your home garden.",
    image: "garden.jpg",
    dates: "April - June"
  },

  { 
    name: "Fresh Summer Vegetables",
    season: "Summer",
    description: "Tomatoes, zucchini, cucumbers, peppers, corn, and green beans.",
    image: "summerveggies.jpg",
    dates: "July - August"
  },
  { 
    name: "Blueberry Harvest",
    season: "Summer",
    description: "Blueberry picking from July through early August each summer.",
    image: "blueberrypicking.png",
    dates: "July - August"
  },
  { 
    name: "Late Summer Sunflowers",
    season: "Summer",
    description: "Second sunflower bloom appears across the farm during late July.",
    image: "sunflowerfarm.jpg",
    dates: "July - August"
  },
  { 
    name: "Farm Dinner Nights",
    season: "Summer",
    description: "Farm-to-table dinner events on select Saturday evenings with reservations.",
    image: "farmdinner.png",
    dates: "July - August"
  },

  { 
    name: "Holiday Market",
    season: "Winter",
    description: "Local artisans and farm-made gifts featured during the first December weekends.",
    image: "holidaymarket.png",
    dates: "December - March"
  },
  { 
    name: "Christmas Trees",
    season: "Winter",
    description: "Pre-cut and choose-and-cut Christmas trees available throughout the holiday season.",
    image: "christmastree.png",
    dates: "December - March"
  },
  { 
    name: "Fresh Winter Wreaths",
    season: "Winter",
    description: "Handmade wreaths and greenery decorations sold daily during the winter months.",
    image: "wreath.jpg",
    dates: "December - March"
  },
  { 
    name: "Year-Round Farm Store",
    season: "Winter",
    description: "Farm store remains open year-round with reduced hours through early spring.",
    image: "yearround.jpg",
    dates: "December - March"
  },

  { 
    name: "Pumpkin Patch",
    season: "Fall",
    description: "More than twenty pumpkin varieties available for U-Pick and pre-picked purchases.",
    image: "pumpkin.png",
    dates: "September - November"
  },
  { 
    name: "Weekend Hayrides",
    season: "Fall",
    description: "Hayrides run every weekend through October with scenic rides around the farm.",
    image: "hayride.png",
    dates: "September - November"
  },
  { 
    name: "Fresh Apple Cider",
    season: "Fall",
    description: "Fresh apple cider pressed on-site daily and sold by the jug throughout fall.",
    image: "makecider.png",
    dates: "September - November"
  },
  { 
    name: "Harvest Festival",
    season: "Fall",
    description: "Food vendors, live music, and craft fairs during the final October weekends.",
    image: "festival.png",
    dates: "September - November"
  },
];

//IMAGES MADE ON CANVA OR FROM THE GIVEN IMAGES

const container = document.getElementById("Seasons");
const searchBar = document.getElementById("searchBar");

let currentSeason = "All";

function render(items) {
  container.innerHTML = "";

  items.forEach((p) => {
    container.innerHTML += `
      <div class="col-md-6 mb-4">
        <div class="events-card text-center h-100">

          <img src="${p.image}" class="event-img">

          <h3>${p.name}</h3>
          <p>${p.season}</p>
          <p>${p.dates}</p>
          <p class="mb-5">${p.description}</p>

        </div>
      </div>
    `;
  });
}


function applyFilters() {

  const value = searchBar.value.toLowerCase();

  let filtered = events;

  // SEASON FILTER //

  if (currentSeason !== "All") {
    filtered = filtered.filter(
      (p) => p.season === currentSeason
    );
  }

  // SEARCH FILTER //

  filtered = filtered.filter((p) =>
    p.name.toLowerCase().includes(value)
  );

  render(filtered);
}

// BUTTON FILTERS //

window.filterSeason = function (season) {

  currentSeason = season;

  applyFilters();
};

// SEARCH BAR //

searchBar.addEventListener("input", applyFilters);

// INITIAL RENDER //

render(events);