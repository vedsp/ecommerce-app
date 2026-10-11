const test = require("node:test");
const assert = require("node:assert/strict");
const { products, calculateTotal, addToCart } = require("../app.js");

test("product catalogue contains three products", () => {
  assert.equal(products.length, 3);
});

test("cart total is calculated correctly", () => {
  assert.equal(calculateTotal([{ price: 100, quantity: 2 }, { price: 50, quantity: 1 }]), 250);
});

test("adding the same product increases quantity", () => {
  const cart = [];
  addToCart(cart, { id: 1, name: "Test", price: 100 });
  addToCart(cart, { id: 1, name: "Test", price: 100 });
  assert.equal(cart.length, 1);
  assert.equal(cart[0].quantity, 2);
});
