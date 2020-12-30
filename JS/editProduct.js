const editInfo = JSON.parse(localStorage.getItem("edit_single_product"))


document.querySelector("#edit_product_name").value = editInfo.name;
document.querySelector("#edit_product_description").value = editInfo.description;
//document.querySelector("#edit_product_price").value = editInfo.price;

editedPrice = document.querySelector("#edit_product_price").value = editInfo.price;


const editProductBtn = document.querySelector(".edit_product")

editProductBtn.addEventListener("click", editProduct);


function editProduct(e) {
e.preventDefault(); //avoid default form in html

var allProdInfo = JSON.parse(localStorage.getItem("product_data"));
console.log(editInfo)
var editedProductData = {
...editInfo,
  //id: productData.id,
  name: document.querySelector("#edit_product_name").value,
  price: document.querySelector("#edit_product_price").value,
  description: document.querySelector("#edit_product_description").value,

  
}
allProdInfo[editInfo.id]= editedProductData

localStorage.setItem("product_data", JSON.stringify(allProdInfo))

localStorage.removeItem("edit_single_product")

location.href="/addproduct.html"


};