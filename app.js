
function addProduct (e) {
e.preventDefault()

// Välja det olika värderna
const productName = document.querySelector("#product_name").value;
const productDescription = document.querySelector("#product_description").value;
const productPrice = document.querySelector("#product_price").value;

var div = document.createElement ("div");

var productDiv = document.querySelector(".product_container");

productDiv.appendChild(div);

div.innerText = productName + " : " + productDescription + " : " + productPrice;

}


var btn_add_product = document.querySelector(".add_product");

btn_add_product.addEventListener("click", addProduct);





let carts = document.querySelectorAll(".add-cart");

for (let i = 0; i < carts.length; i++) { // loop thats run from 0 to carts length
carts[i].addEventListener("click", () => {
    console.log("adding");

})

}

