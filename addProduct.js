const addProductBtn = document.querySelector(".add_product")

addProductBtn.addEventListener("click", passProducts);

let products = []



function passProducts(e) { 
let productObject = {}  


 
const productName = document.querySelector("#product_name").value;
const productDescription = document.querySelector("#product_description").value;
const productPrice = document.querySelector("#product_price").value;



productObject.image = "https://source.unsplash.com/random/";
productObject.name = productName;
productObject.description = productDescription;
productObject.price = productPrice;


products.push(productObject);
const localData = localStorage.getItem("produkt");

const existingData = JSON.parse(localData);

const cleanedData = existingData ?  existingData.concat(products) : products;

localStorage.setItem("produkt", JSON.stringify(cleanedData))};
