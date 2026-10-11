const products = [
  { id: 1, name: "Wireless Mouse", price: 599 },
  { id: 2, name: "USB-C Cable", price: 249 },
  { id: 3, name: "Laptop Stand", price: 899 }
];

function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function addToCart(cart, product) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) existing.quantity += 1;
  else cart.push({ ...product, quantity: 1 });
  return cart;
}

if (typeof module !== "undefined") {
  module.exports = { products, calculateTotal, addToCart };
}

if (typeof document !== "undefined") {
  const cart = [];
  const productContainer = document.querySelector("#products");
  const cartItems = document.querySelector("#cart-items");
  const cartCount = document.querySelector("#cart-count");
  const cartTotal = document.querySelector("#cart-total");
  const message = document.querySelector("#message");

  function renderProducts() {
    productContainer.innerHTML = "";
    products.forEach((product) => {
      const card = document.createElement("article");
      card.className = "product";
      const title = document.createElement("h3");
      title.textContent = product.name;
      const price = document.createElement("p");
      price.textContent = `₹${product.price.toFixed(2)}`;
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = "Add to cart";
      button.addEventListener("click", () => {
        addToCart(cart, product);
        renderCart();
        message.textContent = `${product.name} added to cart.`;
      });
      card.append(title, price, button);
      productContainer.append(card);
    });
  }

  function renderCart() {
    cartItems.innerHTML = "";
    cart.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} × ${item.quantity} — ₹${(item.price * item.quantity).toFixed(2)}`;
      cartItems.append(li);
    });
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotal.textContent = calculateTotal(cart).toFixed(2);
  }

  document.querySelector("#checkout-button").addEventListener("click", () => {
    message.textContent = cart.length ? "Demo order placed successfully!" : "Your cart is empty.";
  });

  renderProducts();
}
