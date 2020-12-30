const addProductBtn = document.querySelector(".add_product")

addProductBtn.addEventListener("click", passProducts);

let product_data = []

function passProducts(e) { 

  const localData = localStorage.getItem("product_data");

  const existingData = JSON.parse(localData);
  
  
  
  let id
  if (existingData == null)
{
  id=0 
} else {
id = existingData.length;

}

let productObject = {}  



var productName = document.querySelector("#product_name").value;
var productDescription = document.querySelector("#product_description").value;
var productPrice = document.querySelector("#product_price").value;


//productObject.image = "https://source.unsplash.com/random/";
productObject.id = id;
productObject.name = productName;
productObject.description = productDescription;
productObject.price = productPrice;



product_data.push(productObject);

const cleanedData = existingData ?  existingData.concat(product_data) : product_data;


localStorage.setItem("product_data", JSON.stringify(cleanedData))

//formReset();---where to put)

location.reload();

};



const dataFromLocal = localStorage.getItem("product_data")

const parsedData = JSON.parse(dataFromLocal)

parsedData.map( (productObject, index) => {
const productContainer = document.querySelector(".admin_product_container");





const productWrapper = document.createElement ("div");
productContainer.appendChild(productWrapper);
productWrapper.className += "added_product_wrapper";


const productDiv = document.createElement ("div");
productWrapper.appendChild(productDiv);
productDiv.className += "added_product_div";


var productIdElement = document.createElement ("div");
productDiv.appendChild(productIdElement);
productIdElement.className += "added_product_id";
productIdElement.innerText = productObject.id;

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


const editBtn = document.createElement ("button");
productDiv.appendChild(editBtn);
editBtn.innerText = "Edit product";
editBtn.className += "editBtn";


var removeBtn = document.createElement ("button");
productDiv.appendChild(removeBtn);
removeBtn.setAttribute("id", index);
removeBtn.innerText = "Remove product";
removeBtn.className += "removeBtn";

removeBtn.addEventListener("click", removeProduct);

editBtn.addEventListener("click", editProduct);

console.log(removeBtn)
console.log(editBtn)

});



// //function to remove object from localstorage -> new

function removeProduct(e) {
// //   //get localstorage objects, filter with id and deleting specific id
var ExistingProdInfo = JSON.parse(localStorage.getItem("product_data"));
//console.log(ExistingProdInfo)
//console.log(e.target.id)
// //   //filter specific id and if its not this id we should keep information
var updatedProdInfo = ExistingProdInfo.filter((item,id) => id != e.target.id); //id Uncaught ReferenceError: id is not defined
//console.log(updatedProdInfo)

// //   //storing again in local storage without deleted id
localStorage.setItem("product_data", JSON.stringify(updatedProdInfo));

location.reload ();
}



function editProduct (e) {



  console.log(e.target.parentElement.children)

//const productImg = e.target.parentElement.children[4?? follow order of index].innerText
const productId = e.target.parentElement.children[0].innerText  
const productName = e.target.parentElement.children[1].innerText
const productDesc = e.target.parentElement.children[2].innerText
const productPrice = e.target.parentElement.children[3].innerText


const prodInfo = {
  //image: productImg,
  id: productId,
  name: productName,
  price: productPrice,
  description: productDesc,
  
}

// console.log(prodInfo)




localStorage.setItem("edit_single_product", JSON.stringify(prodInfo));

location.replace("/editProduct.html")
let editId = document.querySelector(".added_product_div");

}
// // console.log(editId);