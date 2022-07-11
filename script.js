"use strict";

const appetizers = [
  {
    itemImg: "assets/hummus-pita.jpg",
    itemName: "Hummus & Pita",
    itemPrice: 6.5,
    count: 1,
  },
  {
    itemImg: "assets/charcuterie.jpg",
    itemName: "Charcuterie Board",
    itemPrice: 11.5,
    count: 1,
  },
];
const entrees = [
  {
    itemImg: "assets/lamb-chops.jpg",
    itemName: "Lamb Chops",
    itemPrice: 22.5,
    count: 1,
  },
  {
    itemImg: "assets/new-york-strip.jpg",
    itemName: "New York Strip",
    itemPrice: 30.5,
    count: 1,
  },
  {
    itemImg: "assets/salmon.jpg",
    itemName: "Salmon",
    itemPrice: 19.5,
    count: 1,
  },
];
const desserts = [
  {
    itemImg: "assets/baklava.jpg",
    itemName: "Baklava",
    itemPrice: 5,
    count: 1,
  },
  {
    itemImg: "assets/hot-fudge-brownie.jpg",
    itemName: "Hot Fudge Brownie",
    itemPrice: 6.5,
    count: 1,
  },
  {
    itemImg: "assets/cheesecake.jpg",
    itemName: "Cheesecake",
    itemPrice: 8,
    count: 1,
  },
];

const beverages = [
  {
    itemImg: "assets/water-bottle.jpg",
    itemName: "Bottled Water",
    itemPrice: 1.5,
    count: 1,
  },
  {
    itemImg: "assets/bottled-beer.jpg",
    itemName: "Bottled Beer",
    itemPrice: 4,
    count: 1,
  },
];

const appetizersContainer = document.querySelector(".appetizers");
appetizersContainer.classList.add("menu-container");
const entreesContainer = document.querySelector(".entrees");
entreesContainer.classList.add("menu-container");
const dessertsContainer = document.querySelector(".desserts");
dessertsContainer.classList.add("menu-container");
const beveragesContainer = document.querySelector(".beverages");
beveragesContainer.classList.add("menu-container");
const mainContainer = document.querySelector("main");

const modal = document.getElementById("cartModal");
const openModalBtn = document.getElementById("modal");
const closeBtn = document.querySelector(".closeCart");
const updatedCart = document.querySelector(".cart");

const cart = [];

const createItems = (container, array, category) => {
  array.forEach((item, i) => {
    const newItem = document.createElement("li");
    newItem.classList.add(category);

    const itemNameParagraph = document.createElement("p");
    const itemPriceParagraph = document.createElement("p");
    const itemImgParagraph = document.createElement("img");
    itemNameParagraph.textContent = item.itemName;
    itemPriceParagraph.textContent = item.itemPrice;
    itemImgParagraph.setAttribute("src", item.itemImg);
    itemImgParagraph.classList.add("image");
    const cartPlus = document.createElement("i");
    cartPlus.classList.add("fa-solid", "fa-circle-plus");
    cartPlus.setAttribute("data-index", i);
    cartPlus.setAttribute("data-category", category);

    newItem.append(
      itemImgParagraph,
      itemNameParagraph,
      itemPriceParagraph,
      cartPlus
    );
    newItem.setAttribute("data-index", i);
    container.append(newItem);
  });
};
createItems(appetizersContainer, appetizers, "appetizer");
createItems(entreesContainer, entrees, "entree");
createItems(dessertsContainer, desserts, "dessert");
createItems(beveragesContainer, beverages, "beverage");

mainContainer.addEventListener("click", (e) => {
  if (e.target.getAttribute("data-category") === "appetizer") {
    const index = e.target.getAttribute("data-index");
    cart.push(appetizers[index]);
  } else if (e.target.getAttribute("data-category") === "entree") {
    const index = e.target.getAttribute("data-index");
    cart.push(entrees[index]);
  } else if (e.target.getAttribute("data-category") === "dessert") {
    const index = e.target.getAttribute("data-index");
    cart.push(desserts[index]);
  } else if (e.target.getAttribute("data-category") === "beverage") {
    const index = e.target.getAttribute("data-index");
    cart.push(beverages[index]);
  }
  console.log(cart);
});
// openModalBtn.onclick = function (event) {
//   modal.style.display = "block";
// };
// closeBtn.onclick = function () {
//   modal.style.display = "none";
// };

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  createItems(updatedCart, cart);
});
