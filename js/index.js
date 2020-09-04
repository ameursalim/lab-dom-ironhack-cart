// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;

  const quantity = product.querySelector('.quantity input').value;
 
  const subtotal = Number(price)*Number(quantity);

  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  let total= 0;
  const allProducts =document.querySelectorAll('.product').forEach(function(element){
    updateSubtotal(element);
    total += updateSubtotal(element)
  }) 
  console.log(total)
  document.querySelector(`#total-value span`).innerHTML = total

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
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