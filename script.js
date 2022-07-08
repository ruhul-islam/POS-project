"use strict";

const appetizers = [
  {
    itemImg: "assets/hummus-pita.jpg",
    itemName: "Hummus & Pita",
    itemPrice: 6.5,
  },
  {
    itemImg: "assets/charcuterie.jpg",
    itemName: "Charcuterie Board",
    itemPrice: 11.5,
  },
];
const entrees = [
  {
    itemImg: "assets/lamb-chops.jpg",
    itemName: "Lamb Chops",
    itemPrice: 22.5,
  },
  {
    itemImg: "assets/new-york-strip.jpg",
    itemName: "New York Strip",
    itemPrice: 30.5,
  },
  {
    itemImg: "assets/salmon.jpg",
    itemName: "Salmon",
    itemPrice: 19.5,
  },
];
const desserts = [
  {
    itemImg: "assets/baklava.jpg",
    itemName: "Baklava",
    itemPrice: 5,
  },
  {
    itemImg: "assets/hot-fudge-brownie.jpg",
    itemName: "Hot Fudge Brownie",
    itemPrice: 6.5,
  },
  {
    itemImg: "assets/cheesecake.jpg",
    itemName: "Cheesecake",
    itemPrice: 8,
  },
];

const beverages = [
  {
    itemImg: "assets/water-bottle.jpg",
    itemName: "Bottled Water",
    itemPrice: 1.5,
  },
  {
    itemImg: "assets/bottled-beer.jpg",
    itemName: "Bottled Beer",
    itemPrice: 4,
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
    newAppetizer.append(
      itemImgParagraph,
      itemNameParagraph,
      itemPriceParagraph
    );
    appetizersContainer.append(newAppetizer);
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
    newEntree.append(itemImgParagraph, itemNameParagraph, itemPriceParagraph);
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
    newDessert.append(itemImgParagraph, itemNameParagraph, itemPriceParagraph);
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
    newBeverage.append(itemImgParagraph, itemNameParagraph, itemPriceParagraph);
    beveragesContainer.append(newBeverage);
  });
};
createBeverageItems();
