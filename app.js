
function addProduct (e) {
e.preventDefault()

// Välja det olika värderna
const productImg = document.querySelector("#product_img").value;
const productName = document.querySelector("#product_name").value;
const productDescription = document.querySelector("#product_description").value;
const productPrice = document.querySelector("#product_price").value;







//create Div
const createdDiv = document.createElement ("div");
const productDiv = document.querySelector(".product_container");
productDiv.appendChild(createdDiv);
createdDiv.className += "single_product";

// Create img
const createdImg = document.createElement ("img");
createdDiv.appendChild(createdImg);
createdImg.innerHTML= productImg;
createdImg.className += "product_img";



//create H3 for title
const createdTitle = document.createElement ("h3");
createdDiv.appendChild(createdTitle);
createdTitle.innerText= productName;
createdTitle.className += "product_heading";

//create p for description
const createdDescription = document.createElement ("p");
createdDiv.appendChild(createdDescription);
createdDescription.innerText= productDescription;
createdDescription.className += "product_description";

// Create p for price
const createdPrice = document.createElement ("p");
createdDiv.appendChild(createdPrice);
createdPrice.innerText= productPrice + ":-";
createdPrice.className += "product_price";


// Create button for add to cart
const createAddToCartBtn = document.createElement("button");
createdDiv.appendChild(createAddToCartBtn);
createAddToCartBtn.innerText= "Add to cart";




}

// Added event listner
var btn_add_product = document.querySelector(".add_product");
btn_add_product.addEventListener("click", addProduct);




// Function for export form from index.html to addproduct.html


const loadImg = document.createElement("img"); 
 
img.src = "image.png"; 
const src = document.getElementById(".product_img"); 
 
src.appendChild(img);



 //const loadImg = function(event) {
	//const image = document.querySelector(".product_img");
	//image.src = URL.createObjectURL(event.target.files[0]);
//};














// Varukorg
let carts = document.querySelectorAll(".add-cart");

for (let i = 0; i < carts.length; i++) { // loop thats run from 0 to carts length
carts[i].addEventListener("click", () => {
    console.log("adding");

})

}

