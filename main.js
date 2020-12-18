const dataFromLocal = localStorage.getItem("produkt")

const parsedData = JSON.parse(dataFromLocal)

parsedData.map( productObject => {
const productContainer = document.querySelector(".added_product_container");


const productWrapper = document.createElement ("div");
productContainer.appendChild(productWrapper);
productWrapper.className += "added_product_wrapper";

const addedProductImg = document.createElement ("img");
productWrapper.appendChild(addedProductImg);
addedProductImg.src = "/bilder/parfymset.jpeg"


const productDiv = document.createElement ("div");
productWrapper.appendChild(productDiv);
productDiv.className += "added_product_div";

const productTitle = document.createElement("h3");
productTitle.innerText = productObject.name;
productDiv.appendChild(productTitle);
productTitle.className += "single_product_heading";


const productDescription  = document.createElement("p");
productDescription.innerText = productObject.description;
productDiv.appendChild(productDescription);



const productPrice  = document.createElement("span");
productPrice.innerText = productObject.price;
productDiv.appendChild(productPrice);

const productBtn = document.createElement ("button");
productDiv.appendChild(productBtn);
productBtn.innerText = "Add to cart";
productBtn.className += "productBtn";

const editBtn = document.createElement ("button");
productDiv.appendChild(editBtn);
editBtn.innerText = "Edit product";
editBtn.className += "editBtn";



});








// add to cart button
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


function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");



  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }

}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");




  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
  <div class="product">
  <ion-icon class="delete_btn" name="close-circle-outline"></ion-icon>
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
<button class = "checkout-btn">Genomför Köp</button>
<div>
`

  }

// --------- Creating a function for remove item in cart

removeBtns();      // invokes the function 

function removeBtns() {                        // creates a function

  let removeBtns = document.querySelectorAll(".delete_btn"); // create variable to get all button
  let productNumbers = localStorage.getItem("cartNumbers");

  console.log(removeBtns)

  let cartProducts = localStorage.getItem("productsInCart");

  console.log(cartProducts)

  let cartTotal = localStorage.getItem("totalCost");
console.log(cartTotal)

   cartProducts = JSON.parse(cartProducts);
  for (let i = 0; i < removeBtns.length; i++) {          // loops through all "removebuttons"
    removeBtns[i].addEventListener("click", () => {       // adding an event to removeBtn when click and pass a function to it

      let productName = Object.keys(cartProducts)[i];
      console.log(productName)
    
      removeBtns[i].parentElement.remove()

     // console.log(cartProducts.chanel.inCart)

      localStorage.setItem("cartNumbers", productNumbers - cartProducts[productName].inCart); 

      console.log(cartNumbers) 

      console.log(cartTotal - (cartProducts[productName].price * cartProducts[productName].inCart))

      localStorage.setItem("totalCost",cartTotal - (cartProducts[productName].price * cartProducts[productName].inCart));

     

      delete cartProducts[productName]

      // delete cartnumbers
      localStorage.setItem("productsInCart", JSON.stringify(cartProducts));

     // localStorage.setItem("totalCost", JSON.stringify(cartTotal));
    
location.reload()
    });
  }
}




  // Checkout button

  
let checkOutBtn = document.querySelector(".checkout-btn");
let checkoutMessageContainer = document.querySelector(".checkout_message")
  checkOutBtn.addEventListener("click", checkoutNow)


  function checkoutNow() {


    checkoutMessageContainer.innerHTML += `
  <div class = "checkoutMessage"> <h3 class "thank_you_title>Tack för ditt köp, din order är nu genomförd</h3> 
  <button class = "pdf_btn"> <i class="fas fa-file-pdf"></i> Ladda ner orderdetaljer som pdf</button>
  </div>
`
const pdf = new jsPDF();

  let pdfBtn = document.querySelector(".pdf_btn");
  
  
  
  
  function savePDF() {
  
    pdf.text(10, 10, `Totalt att betala: ${cartCost}   ` );
    pdf.save("Kvitto.pdf");
  }
  
  pdfBtn.addEventListener("click", savePDF);

  }


  
 

}
onLoadCartNumbers()
displayCart()






