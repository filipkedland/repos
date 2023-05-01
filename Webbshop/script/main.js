let itemGrid = document.getElementById("items");
let counter = document.getElementById("cart-size");
let items = [];
let cart = [];
if (JSON.parse(localStorage.getItem("cart"))) cart = JSON.parse(localStorage.getItem("cart"));

class ShopItem {
  constructor(name, description, imgPath, price) {
    this.name = name;
    this.description = description;
    this.imgPath = imgPath;
    this.price = price;
    items.push(this);
  }
}

function listItems() {
  items.forEach(i => {
    let item = document.createElement("DIV");
    item.className = "item";

    let info = document.createElement("DIV");
    info.className = "info-div";

    let name = document.createElement("P");
    name.className = "item-name";
    name.innerText = i.name;

    let description = document.createElement("P");
    description.className = "item-desc";
    description.innerText = i.description;

    let image = document.createElement("IMG");
    image.src = i.imgPath;
    image.alt = "Bild på " + i.name;

    let price = document.createElement("P");
    price.className = "item-price";
    price.innerText = i.price + ":-";

    let button = document.createElement("BUTTON");
    button.className = "item-button";
    button.innerHTML = "Lägg till i varukorg";
    button.addEventListener("click", () => { addToCart(i); });
    
    info.append(name, description, price, button);
    item.append(image, info);
    itemGrid.append(item);
    console.log(name);
  });
}

function addToCart(item) {
  if (cart.length < 1) {
    cart.push([item, 1]);
  }
  else {
    let found = false;
    cart.forEach(i => {
      if (i[0] == item) {
        i[1]++;
        console.log("Added to cart");
        found = true;
        return;
      }
    });
    if (found == false) {
      console.log("TESTT");
      cart.push([item, 1]);
    }
  }
  counter.innerHTML = cartSize();
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log("Added cart to localstorage");
}

function cartSize() {
  let amount = 0;
  cart.forEach(i => {
    amount += i[1];
  });
  return amount;
}

const gaffel = new ShopItem("Gaffel", "Jete fin gaffel. Funkar att äta med.", "../img/fork.jpg", 19.99);
const kalsong = new ShopItem("Kalsong", "Jättefina kalsonger. Endast gått 2000 mil. Fint mönster! Brunt streck på insidan.", "../img/kalsong.jpg", 49.89);
const deodorant = new ShopItem("Deodorant", "Knappt använd premium deodorant. Nyskick! Luktar super gott!", "../img/deodorant.jfif", 38.01);
const ketchup = new ShopItem("Ketchup", "Mycket god röd sås! Söt med smak av tomat. Kan inte verifiera innehåll.", "../img/ketchup.webp", 38.99);
const bord = new ShopItem("Bord", "Fint bord med bänkar till! Brun färg (den var vit från början) men mycket bra skick annars!", "../img/bord.jfif", 1199.02);
const mario = new ShopItem("Mario", "Gullig Mario leksak! Bitmärken på vänster ben men annars fint skick.", "../img/mario.jfif", 58.73);
const glasses = new ShopItem("Glasögon", "Fina glasögon med inbyggd mustasch! Rekommenderas ej för personer med grovt synfel.", "../img/glasses.jpg", 20.01);
const kebnekaise = new ShopItem("Kebnekaise", "Gulligt berg med fina kurvor!! Köparen ansvarar för frakt.", "../img/kebnekaise.jfif", 23702.99);

counter.innerHTML = cartSize();
listItems();