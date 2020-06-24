// ITERATION 1


function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = parseInt(price) * parseInt(quantity);
}

function calculateAll() {
  // ITERATION 2
  let cartProducts = document.getElementsByClassName('product');
  let cartProductsArray =[...cartProducts];

  cartProductsArray.forEach(element => {
    updateSubtotal(element);
  });
  
  // ITERATION 3
  let tot = 0
  cartProductsArray.forEach(element =>{
    tot += parseInt(element.querySelector('.subtotal span').innerHTML);
  });
  let total = document.querySelector('#total-value span');
  total.innerHTML = tot;  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
