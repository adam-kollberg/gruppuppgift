
function addProduct (e) {
e.preventDefault()

// Välja det olika värderna
const productName = document.querySelector("#product_name").value;
const productDescription = document.querySelector("#product_description").value;
const productPrice = document.querySelector("#product_price").value;


}




// välja knappen "add product"
const btn_add_product = document.querySelector(".add_product");

// EventListner till addproduct function
btn_add_product.addEventListener("click", addProduct);


