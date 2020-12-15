

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

let carts = document.querySelectorAll(".productBtn");

// For loop for the cart length plus eventlistner to button
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
    cartNumbers(dataFromLocal[i]);});
    
  

  }
  
  function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
      document.querySelector(".cart span").textContent = productNumbers;
  
    }
  }
  
  
  function cartNumbers() {
  
    let productNumbers = localStorage.getItem("cartNumbers");
  
  
    productNumbers = parseInt(productNumbers);
  
    if (productNumbers) {
      localStorage.setItem("cartNumbers", productNumbers + 1);
      document.querySelector(".cart span").textContent = productNumbers + 1;
  
    } else {
      localStorage.setItem("cartNumbers", 1);
      document.querySelector(".cart span").textContent = 1;
    }
  
    
  
  }








  

 
 
  onLoadCartNumbers()
  
