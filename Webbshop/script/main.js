let itemGrid = document.getElementById("items");

class ShopItem {
  constructor(name, description, imgPath, price, id) {
    this.item = document.createElement("DIV");
    this.item.className = "item";

    this.name = document.createElement("P");
    this.name.className = "item-name";
    this.name.innerText = name;

    this.description = document.createElement("P");
    this.description.className = "item-desc";
    this.description.innerText = description;

    this.image = document.createElement("IMG");
    this.image.src = imgPath;

    this.price = document.createElement("P");
    this.price.className = "item-price";
    this.price.innerText = price + ":-";

    this.id = id;

    this.item.append(this.image, this.name, this.description, this.price);
  }
}

let testitem = new ShopItem("Gaffel", "testing hfbsdi fse is efiusei si f ies", "../img/fork.jpg", 19.99, "38423984");
itemGrid.appendChild(testitem.item);