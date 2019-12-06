var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  var price = Math.floor(Math.random() * 100)

 item  =  {
   "itemName": item,
   "itemPrice" : price,
 }

cart.push(item);


return `${item.itemName} has been added to your cart.`;
}

function viewCart() {

  if (cart.length === 0 ){
    return 'Your shopping cart is empty.'

  } else {

      if (cart.length === 1){

  return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`

} else if (cart.length === 2){

    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}. `

  } else {

    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}. `
}
    }

  }



  function total() {
    // write your code here
  var total =0;
  for (var j= 0; j<cart.length; j++){
  var price = Object.values(cart[j]);



  for (var i=0; i<price.length; i++){
        total= total + price[i];
  }
  }
  return total ;
  }

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
