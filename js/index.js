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
  let product = target.parentNode.parentNode
  let cart = document.querySelector("#cart tbody");
  cart.removeChild(product)
}

// ITERATION 5

function createProduct() {
  let productName = document.querySelectorAll('.create-product input')[0];
  let unitPrice = document.querySelectorAll('.create-product input')[1];
  let cart = document.querySelector("#cart tbody");
  //product name
  let trTag = document.createElement('tr');
  trTag.setAttribute('class', 'product');
  cart.appendChild(trTag);
  let tdTag = document.createElement('td');
  tdTag.setAttribute('class','name');
  let span = document.createElement('span');
  span.innerHTML = productName.value;
  tdTag.appendChild(span);
  trTag.appendChild(tdTag);
  //unit Price
  let tdTag2 = document.createElement('td');
  tdTag2.setAttribute('class', 'price')
  tdTag2.innerHTML = '$'
  let span2 = document.createElement('span');
  span2.innerHTML = unitPrice.value;
  tdTag2.appendChild(span2);
  trTag.appendChild(tdTag2);
  // quantity
  let tdTag3 = document.createElement('td');
  tdTag3.setAttribute('class','quantity');
  let qtybutton = document.createElement('input');
  qtybutton.setAttribute('type','number');
  qtybutton.setAttribute('value','0');
  qtybutton.setAttribute('min','0');
  qtybutton.setAttribute('placeholder','Quantity');
  tdTag3.appendChild(qtybutton);
  trTag.appendChild(tdTag3);
  // subtotal
  let tdTag4 = document.createElement('td');
  tdTag4.setAttribute('class','subtotal');
  tdTag4.innerHTML = '$';
  let span3 = document.createElement('span');
  span3.innerHTML = '0';
  tdTag4.appendChild(span3);
  trTag.appendChild(tdTag4);
  //remove button
  let tdTag5 = document.createElement('td');
  tdTag5.setAttribute('class', 'action');
  let remove = document.createElement('button');
  remove.setAttribute('class', 'btn btn-remove');
  remove.innerHTML = 'Remove';
  tdTag5.appendChild(remove);
  trTag.appendChild(tdTag5);
  
  const removeBtn = document.getElementsByClassName('btn-remove');
  let removeBtnArray = [...removeBtn];
  removeBtnArray.forEach(element => {
    element.addEventListener('click', removeProduct);
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('btn-remove');
  let removeBtnArray = [...removeBtn];
  removeBtnArray.forEach(element => {
    element.addEventListener('click', removeProduct);
  })
  
  console.log(removeBtnArray)
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});

