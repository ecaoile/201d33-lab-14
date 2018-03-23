'use strict';

var Cart = [];

function loadCart() {
  // TODO: Pull the cart (if it exists) from Local Storage and make available to this app
  var cartAsString = localStorage.getItem('cart');
  var usableCart = JSON.parse(cartAsString);
  if (usableCart && cartAsString.length) {
    Cart = usableCart;
    console.log('Loaded from local storage');
    return;
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table
  var cartTable = document.getElementById('cart').getElementsByTagName('tbody')[0];
  // TODO: Iterate over the items in the cart
  for (var i in Cart) {
    console.log(Cart[i]);

    var aElement = document.createElement('a');
    aElement.textContent = 'X';

    // TODO: Create a TR
    var trElement = document.createElement('tr');

    // TODO: Create a TD for the quantity and the item
    var tdQuantity = document.createElement('td');
    tdQuantity.textContent = Cart[i].quantity;
    console.log(tdQuantity);

    var tdItem = document.createElement('td');
    tdItem.textContent = Cart[i].item;
    console.log(tdItem);

    // TODO: Add the TR to the TBODY and both TD's to the TR
    trElement.appendChild(aElement);
    trElement.appendChild(tdQuantity);
    trElement.appendChild(tdItem);
    cartTable.appendChild(trElement);
  }
}

function removeItemFromCart() {
  // TODO: When a delete link is clicked, rebuild the Cart array without that item

  Cart.splice(this.item);
  Cart.splice(this.quantity);
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
}

// TODO: Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
/*
function handleDelete(event) {
  event.preventDefault();
  removeItemFromCart();
}

Cart.addEventListener('click', handleDelete);
*/
loadCart();

showCart();