


let carts = document.querySelectorAll(".single_product_btn");

const products = [

  {
    name: "Chanel fragance",
    description: "chanel",
    price: 1200,
    inCart: 0

  },
  {
    name: "D&G Fragance",
    description: "d&g",
    price: 1100,
    inCart: 0
  },

  {
    name: "Parfymset",
    description: "parfymset",
    price: 900,
    inCart: 0
  },

  {
    name: "D&G Fragance",
    description: "dolce",
    price: 800,
    inCart: 0
  }


];


// For loop for the cart length plus eventlistner to button
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });

}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;

  }
}


// Function for get the timed clicked and set item in local storage
function cartNumbers(product) {

  let productNumbers = localStorage.getItem("cartNumbers");


  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;

  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(product)

}


function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {

    if (cartItems[product.description] == undefined) {
      cartItems = {
        ...cartItems, [product.description]: product
      }

    }


    cartItems[product.description].inCart += 1;
  } else {
    product.inCart = 1;

    cartItems = {
      [product.description]: product
    }

  }




  localStorage.setItem("productsInCart", JSON.stringify(cartItems));



}


function totalCost (product) {
let cartCost = localStorage.getItem("totalCost");



if (cartCost != null) {
cartCost = parseInt(cartCost);
localStorage.setItem("totalCost", cartCost + product.price);
} else {
  localStorage.setItem("totalCost", product.price);
}

}

function displayCart () {
let cartItems = localStorage.getItem("productsInCart");
cartItems = JSON.parse(cartItems);
let productContainer = document.querySelector(".products");
let cartCost = localStorage.getItem("totalCost");



if (cartItems && productContainer ) {
productContainer.innerHTML = "";
Object.values(cartItems).map(item => {
  productContainer.innerHTML += `
  <div class="product">
  <ion-icon name="close-circle-outline"></ion-icon>
  <img src="./bilder/${item.description}.jpeg">
  <div class = cart-product-wrapper>
  <h5>Produktnamn:</h5>
  
  <span>${item.name}</span>
  <span><h5>Pris:</h5>${item.price},00kr</span>
  
  <div class = "quantity">
  
  
  <span><h5>Antal:</h5> <ion-icon name="chevron-back-outline"></ion-icon>${item.inCart}</span>

  <ion-icon name="chevron-forward-outline"></ion-icon>
  </div>
  </div>
  </div>

  
  
</div>



  `
     });
productContainer.innerHTML += ` 

<div class = "basket-total-container">
<h4 class = "basket-total-title">Totalt i varukorgen:</h4>
<h4 class = "basket-total"> ${cartCost},00kr </h4>


<div>




`

  }

}


onLoadCartNumbers()
displayCart()





