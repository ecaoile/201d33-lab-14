'use strict';

var Cart = [];

function loadCart() {
  // TODO: Pull the cart (if it exists) from Local Storage and make available to this app
  var cartAsString = localStorage.getItem('cart');
  var usableCart = JSON.parse(cartAsString);
  if (usableCart && cartAsString.length) {
    Cart.allItems = usableCart;
    console.log('Loaded from local storage');
    return;
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table
  var cartTable = document.getElementById('cart');
  // TODO: Iterate over the items in the cart
  for (var i in Cart) {
    console.log(Cart[i]);

    // TODO: Create a TR    
    var trElement = document.createElement('tr');

    // TODO: Create a TD for the quantity and the item
    var tdItem = document.createElement('td');
    tdItem.textContent = Cart.item;

    var tdQuantity = document.createElement('td');
    tdQuantity.textContent = Cart.quantity;

    // TODO: Add the TR to the TBODY and both TD's to the TR
    trElement.appendChild(tdItem);
    trElement.appendChild(tdQuantity);
    cartTable.appendChild(trElement);
  }
}

function removeItemFromCart() {
  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
}

// TODO: Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.

loadCart();

showCart();