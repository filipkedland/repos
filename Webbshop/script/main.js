let itemGrid = document.getElementById("items");
let items = [];
let cart = [];

class ShopItem {
  constructor(name, description, imgPath, price, id) {
    this.name = name;
    this.description = description;
    this.imgPath = imgPath;
    this.price = price;
    this.id = id;
    items.push(this);
  }
}

function listItems() {
  items.forEach(i => {
    let item = document.createElement("DIV");
    item.className = "item";

    let name = document.createElement("P");
    name.className = "item-name";
    name.innerText = i.name;

    let description = document.createElement("P");
    description.className = "item-desc";
    description.innerText = i.description;

    let image = document.createElement("IMG");
    image.src = i.imgPath;

    let price = document.createElement("P");
    price.className = "item-price";
    price.innerText = i.price + ":-";

    let button = document.createElement("BUTTON");
    button.className = "item-button";
    button.innerHTML = "Add to cart";
    button.addEventListener("click", () => { addToCart(i); });

    item.append(name, image, description, price, button);
    itemGrid.append(item);
  });
}

function addToCart(item) {
  cart.push(item);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  console.log("Added cart to localstorage");
}

let testitem = new ShopItem("Gaffel", "Jete fin gaffel. Funkar att äta med.", "../img/fork.jpg", 19.99, "38423984");


listItems();