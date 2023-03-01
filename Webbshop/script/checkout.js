let cart = JSON.parse(sessionStorage.getItem("cart"));
let items = document.getElementById("items");

function listItems() {
  cart.forEach(i => {
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

    item.append(name, image, description, price);
    items.append(item);
  });
}

listItems();