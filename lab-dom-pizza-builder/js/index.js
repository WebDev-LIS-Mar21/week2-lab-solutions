// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 },
};

let $pepButton = document.querySelector('.btn.btn-pepperoni');
let $mushButton = document.querySelector('.btn.btn-mushrooms');
let $greenPepperButton = document.querySelector('.btn.btn-green-peppers');
let $sauceButton = document.querySelector('.btn.btn-sauce');
let $crustButton = document.querySelector('.btn.btn-crust');
let $priceList = document.querySelector('.price ul');
let $totalPrice = document.querySelector('.price strong');

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((pepper) => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let $sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    $sauce.classList.add('sauce-white');
  } else {
    $sauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let $crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    $crust.classList.add('crust-gluten-free');
  } else {
    $crust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni) $pepButton.classList.add('active');
  else $pepButton.classList.remove('active');
  if (state.mushrooms) $mushButton.classList.add('active');
  else $mushButton.classList.remove('active');
  if (state.greenPeppers) $greenPepperButton.classList.add('active');
  else $greenPepperButton.classList.remove('active');
  if (state.whiteSauce) $sauceButton.classList.add('active');
  else $sauceButton.classList.remove('active');
  if (state.glutenFreeCrust) $crustButton.classList.add('active');
  else $crustButton.classList.remove('active');
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  $priceList.innerHTML = ''; // $pricelist is the ul let $priceList = document.querySelector('.price ul');
  let totalPrice = basePrice;
  for (const key in ingredients) {
    // Se o ingrediente
    if (state[key]) {
      // = state.peperonni
      let name = ingredients[key].name;
      let price = ingredients[key].price;
      $priceList.innerHTML += `<li>$${price} ${name}</li>`;
      totalPrice += price;
    }
  }
  $totalPrice.innerText = '$' + totalPrice;
  renderEverything();
}

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
