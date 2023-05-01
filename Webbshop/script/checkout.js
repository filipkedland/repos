let cart = JSON.parse(localStorage.getItem("cart"));
let cartList = document.getElementById("cart-list");
let total = document.getElementById("total-text");
let counter = document.getElementById("cart-size");

function clearCart() {
  localStorage.removeItem("cart");
  window.location.href= "index.html";
}

document.getElementById("clear").addEventListener("click", function() {
  clearCart();
});

document.getElementById("pay").addEventListener("click", function() {
  alert("BETALNING LYCKAD!!");
  clearCart();
});

document.getElementById("apply").addEventListener("click", function() {
  if (document.getElementById("code").value.toLowerCase() != "rabatt") return alert("FELAKTIG KOD!");
  setTotal(0.5);
  return alert("50% RABATT APPLICERAD!!")
})

function listItems() {
  cart.forEach(i => {
    let item = document.createElement("LI");
    item.className = "checkout-item";

    item.innerHTML = `${i[0].name} - ${i[0].price}kr ${i[1]}st`;
    cartList.append(item);
  });
}

function cartSize() {
  let amount = 0;
  cart.forEach(i => {
    amount += i[1];
  });
  return amount;
}

function setTotal(discount) {
  // Get total
  let sum = 0;
  cart.forEach(i => {
    sum += i[0].price * i[1];
  });

  sum = Math.round(sum);
  if (discount) {
    sum = sum * discount;
  }

  // Set total
  total.innerHTML = `Total: ${sum}kr`;
}

if (cart) {
  counter.innerHTML = cartSize();
  listItems();
  setTotal();
}