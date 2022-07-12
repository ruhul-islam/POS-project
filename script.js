"use strict";

const appetizers = [
  {
    itemImg: "assets/hummus-pita.jpg",
    itemName: "Hummus & Pita",
    itemPrice: (6.5).toFixed(2),
    count: 1,
  },
  {
    itemImg: "assets/charcuterie.jpg",
    itemName: "Charcuterie Board",
    itemPrice: (11.5).toFixed(2),
    count: 1,
  },
];
const entrees = [
  {
    itemImg: "assets/lamb-chops.jpg",
    itemName: "Lamb Chops",
    itemPrice: (22.5).toFixed(2),
    count: 1,
  },
  {
    itemImg: "assets/new-york-strip.jpg",
    itemName: "New York Strip",
    itemPrice: (30.5).toFixed(2),
    count: 1,
  },
  {
    itemImg: "assets/salmon.jpg",
    itemName: "Salmon",
    itemPrice: (19.5).toFixed(2),
    count: 1,
  },
];
const desserts = [
  {
    itemImg: "assets/baklava.jpg",
    itemName: "Baklava",
    itemPrice: (5.0).toFixed(2),
    count: 1,
  },
  {
    itemImg: "assets/hot-fudge-brownie.jpg",
    itemName: "Hot Fudge Brownie",
    itemPrice: (6.5).toFixed(2),
    count: 1,
  },
  {
    itemImg: "assets/cheesecake.jpg",
    itemName: "Cheesecake",
    itemPrice: (8.0).toFixed(2),
    count: 1,
  },
];

const beverages = [
  {
    itemImg: "assets/water-bottle.jpg",
    itemName: "Bottled Water",
    itemPrice: (1.5).toFixed(2),
    count: 1,
  },
  {
    itemImg: "assets/bottled-beer.jpg",
    itemName: "Bottled Beer",
    itemPrice: (4.0).toFixed(2),
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
const subTotal = document.querySelector(".subtotal");
const tax = document.querySelector(".tax");
const total = document.querySelector(".total");

const cart = [];

const createItems = (container, array, category) => {
  container.innerHTML = "";
  array.forEach((item, i) => {
    const newItem = document.createElement("li");
    newItem.classList.add(category);

    const itemNameParagraph = document.createElement("p");
    const itemPriceParagraph = document.createElement("p");
    const itemImgParagraph = document.createElement("img");
    itemNameParagraph.textContent = item.itemName;
    itemPriceParagraph.textContent = `$${item.itemPrice}`;
    itemImgParagraph.setAttribute("src", item.itemImg);
    itemImgParagraph.classList.add("image");
    const icon = document.createElement("i");
    if (category === "cart") {
      icon.classList.add("fa-solid", "fa-circle-xmark");
    } else {
      icon.classList.add("fa-solid", "fa-circle-plus");
    }
    icon.setAttribute("data-index", i);
    icon.setAttribute("data-category", category);

    newItem.append(
      itemImgParagraph,
      itemNameParagraph,
      itemPriceParagraph,
      icon
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

const updatePrice = () => {
  subTotal.innerHTML = "Sub total: $";
  tax.innerHTML = "Sales tax: $";
  total.innerHTML = "Total: $";
  modal.style.display = "block";
  createItems(updatedCart, cart, "cart");
  subTotal.append(priceFunction(cart).subtotal.toFixed(2));
  tax.append(priceFunction(cart).tax.toFixed(2));
  total.append(priceFunction(cart).total.toFixed(2));
};
openModalBtn.addEventListener("click", updatePrice);
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-circle-xmark")) {
    const index = e.target.getAttribute("data-index");
    cart.splice(index, 1);
    updatePrice();
  }
});

const taxRate = 0.06; // 6%

const priceFunction = (array) => {
  const priceCart = array.reduce(
    (acc = {}, item = {}) => {
      const itemTotal = parseFloat(item.itemPrice);
      const itemTotalTax = parseFloat((itemTotal * taxRate).toFixed(2));

      acc.subtotal = parseFloat((acc.subtotal + itemTotal).toFixed(2));
      acc.tax = parseFloat((acc.tax + itemTotalTax).toFixed(2));
      acc.total = parseFloat((acc.total + itemTotal + itemTotalTax).toFixed(2));

      return acc;
    },
    {
      subtotal: 0,
      tax: 0,
      total: 0,
    }
  );
  return priceCart;
};

const showBtn = document.querySelector(".show");
const modalTwo = document.querySelector(".modalTwo");

const toggleHide = () => {
  modalTwo.classList.toggle("hide");
};
showBtn.addEventListener("click", toggleHide);
