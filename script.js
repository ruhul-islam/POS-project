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

const plusContainer = document.querySelector("fa-circle-plus");
// const cartContainer = document.querySelector(".nav-list");
// const createCart = () => {
//   const newItem = document.createElement("a");
//   const cart = document.createElement("i");
//   cart.classList.add("fa-solid", "fa-cart-shopping");
//   newItem.append(cart);
//   cartContainer.append(newItem);
// };
// createCart();
// //<i class="fa-light fa-cart-shopping"></i>

const createAppetizerItems = () => {
  appetizers.forEach((item) => {
    const newAppetizer = document.createElement("li");
    newAppetizer.classList.add("appetizer");

    const itemNameParagraph = document.createElement("p");
    const itemPriceParagraph = document.createElement("p");
    const itemImgParagraph = document.createElement("img");
    itemNameParagraph.textContent = item.itemName;
    itemPriceParagraph.textContent = item.itemPrice;
    itemImgParagraph.setAttribute("src", item.itemImg);
    itemImgParagraph.classList.add("image");
    const cartPlus = document.createElement("i");
    cartPlus.classList.add("fa-solid", "fa-circle-plus");
    newAppetizer.append(
      itemImgParagraph,
      itemNameParagraph,
      itemPriceParagraph,
      cartPlus
    );
    appetizersContainer.append(newAppetizer);
    // appetizersContainer.append(cartPlus);
  });
};
createAppetizerItems();

const createEntreeItems = () => {
  entrees.forEach((item) => {
    const newEntree = document.createElement("li");
    newEntree.classList.add("entree");

    const itemNameParagraph = document.createElement("p");
    const itemPriceParagraph = document.createElement("p");
    const itemImgParagraph = document.createElement("img");
    itemNameParagraph.textContent = item.itemName;
    itemPriceParagraph.textContent = item.itemPrice;
    itemImgParagraph.setAttribute("src", item.itemImg);
    itemImgParagraph.classList.add("image");
    const cartPlus = document.createElement("i");
    cartPlus.classList.add("fa-solid", "fa-circle-plus");
    newEntree.append(
      itemImgParagraph,
      itemNameParagraph,
      itemPriceParagraph,
      cartPlus
    );
    entreesContainer.append(newEntree);
  });
};
createEntreeItems();

const createDessertItems = () => {
  desserts.forEach((item) => {
    const newDessert = document.createElement("li");
    newDessert.classList.add("dessert");

    const itemNameParagraph = document.createElement("p");
    const itemPriceParagraph = document.createElement("p");
    const itemImgParagraph = document.createElement("img");
    itemNameParagraph.textContent = item.itemName;
    itemPriceParagraph.textContent = item.itemPrice;
    itemImgParagraph.setAttribute("src", item.itemImg);
    itemImgParagraph.classList.add("image");
    const cartPlus = document.createElement("i");
    cartPlus.classList.add("fa-solid", "fa-circle-plus");
    newDessert.append(
      itemImgParagraph,
      itemNameParagraph,
      itemPriceParagraph,
      cartPlus
    );
    dessertsContainer.append(newDessert);
  });
};
createDessertItems();

const createBeverageItems = () => {
  beverages.forEach((item) => {
    const newBeverage = document.createElement("li");
    newBeverage.classList.add("beverage");

    const itemNameParagraph = document.createElement("p");
    const itemPriceParagraph = document.createElement("p");
    const itemImgParagraph = document.createElement("img");
    itemNameParagraph.textContent = item.itemName;
    itemPriceParagraph.textContent = item.itemPrice;
    itemImgParagraph.setAttribute("src", item.itemImg);
    itemImgParagraph.classList.add("image");
    const cartPlus = document.createElement("i");
    cartPlus.classList.add("fa-solid", "fa-circle-plus");
    newBeverage.append(
      itemImgParagraph,
      itemNameParagraph,
      itemPriceParagraph,
      cartPlus
    );

    beveragesContainer.append(newBeverage);
  });
};
createBeverageItems();

plusContainer.addEventListener("click", (e) => {});
