
function addProduct (e) {
e.preventDefault()

// Välja det olika värderna
const productName = document.querySelector("#product_name").value;
const productDescription = document.querySelector("#product_description").value;
const productPrice = document.querySelector("#product_price").value;


//create Div
const createdDiv = document.createElement ("div");
const productDiv = document.querySelector(".product_container");
productDiv.appendChild(createdDiv);

//create H3 for title
const createdTitle = document.createElement ("h3");
createdDiv.appendChild(createdTitle);
createdTitle.innerText= productName;

//create p for description
const createdDescription = document.createElement ("p");
createdDiv.appendChild(createdDescription);
createdDescription.innerText= productDescription;

// Create p for price
const createdPrice = document.createElement ("p");
createdDiv.appendChild(createdPrice);
createdPrice.innerText= productPrice + ":-";


// Create button for add to cart
const createAddToCartBtn = document.createElement("button");
createdDiv.appendChild(createAddToCartBtn);
createAddToCartBtn.innerText= "Add to cart";








}

// Added event listner
var btn_add_product = document.querySelector(".add_product");
btn_add_product.addEventListener("click", addProduct);





let carts = document.querySelectorAll(".add-cart");

for (let i = 0; i < carts.length; i++) { // loop thats run from 0 to carts length
carts[i].addEventListener("click", () => {
    console.log("adding");

})

}

