'use strict';

var itemTable = document.getElementById('items');
var catalogForm = document.getElementById('catalog');
function populateForm() {
  //DONE: Add an <option> tag inside the form's select for each product
  for (var i in Product.allProducts) {
    var tdElement = document.createElement('option');
    tdElement.textContent = Product.allProducts[i].name;
    itemTable.appendChild(tdElement);
  }
}

function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();

}

function addSelectedItemToCart() {
  // TODO: Add the selected item and quantity to the cart
  var newItem = event.target.items.value;
  var newQuantity = event.target.quantity.value;
  new Cart(newItem, newQuantity);
}

function saveCartToLocalStorage() {
  // TODO: Save the cart to Local Storage
  var saveItem = JSON.stringify(Cart.allItems);
  localStorage.setItem('cart', saveItem);
}

function updateCounter() {
  // TODO: Update the cart count in the header
  //var itemQuantity = document.getElementById('itemCount');
  //itemQuantity.appendChild(event.target.quantity.value);
}

function updateCartPreview() {
  // TODO: Show the selected item & quantity in the cart div
}

// TODO: Put an event listener on the #catalog so that you can run the "handleSubmit" method when user submits the form (adding an item to their cart)
catalogForm.addEventListener('submit', handleSubmit);


// Start it up ...
populateForm();
