function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {
  let cart = getCart();
  cart.push({ name, price });
  saveCart(cart);
  alert(name + " added to cart!");
}

function removeFromCart(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  location.reload();
}

function displayCart() {
  let cart = getCart();
  let list = document.getElementById("cart-items");
  let total = 0;

  if (!list) return;

  list.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;

    let li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price}
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    list.appendChild(li);
  });

  document.getElementById("total").innerText = "Total: $" + total;
}

window.onload = displayCart;
