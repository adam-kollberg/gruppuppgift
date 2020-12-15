const addProductBtn = document.querySelector(".add_product")

addProductBtn.addEventListener("click", passProducts);


let products = []

function passProducts(e) { 
e.preventDefault()
let productObject = {}  
  
const productName = document.querySelector("#product_name").value;
const productDescription = document.querySelector("#product_description").value;
const productPrice = document.querySelector("#product_price").value;
const productId = document.querySelector("#product_id").value;


productObject.name = productName;
productObject.description = productDescription;
productObject.price = parseInt (productPrice);
productObject.id =  parseInt(productId);
productObject.inCart = 0;


products.push(productObject);
const localData = localStorage.getItem("produkt");

const existingData = JSON.parse(localData);

const cleanedData = existingData ?  existingData.concat(products) : products;

localStorage.setItem("produkt", JSON.stringify(cleanedData))


console.log(productObject.price);

};


const dataFromLocal = localStorage.getItem("produkt")

const parsedData = JSON.parse(dataFromLocal)

