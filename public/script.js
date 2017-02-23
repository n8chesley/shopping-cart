// an array with all of our cart items
var cart = [];
var total = 0;

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
  var source = $('#added-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template(cart[cart.length - 1]);
  $('.cart-list').append(newHTML);
}

var addItem = function (item) {
  // TODO: Write this function. Remember this function has nothing to do with display.
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
    cart.length = 0;
}

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = {};
  item.name = $(this).closest('.card-item').data().name;
  item.price = $(this).closest('.card-item').data().price;
  total = total + item.price;
  document.getElementById("sumTotal").innerHTML = total;
  cart.push(item);
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  $('.cart-list').find('p').empty();
  total = 0;
  document.getElementById("sumTotal").innerHTML = total;
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
