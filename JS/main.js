class photoGallery {
  constructor() {
    this.API_KEY = "563492ad6f91700001000001f3bf8f62aaf54488b3f02e6efa474d04";
    this.galleryDiv = document.querySelector(".gallery");
    this.searchForm = document.querySelector(".header form");
    this.loadMore = document.querySelector(".load_more");
    this.eventHandle();
  }

  eventHandle () {
    document.addEventListener("DOMContentLoaded",() => {
    this.getImg(); 
    });
  }

  async getImg(){
    const baseURL = "https://api.pexels.com/v1/search?query=perfume&per_page=12";
    const data = await this.fetchImages(baseURL);
    this.generateHTML(data.photos);
    console.log(data);
  }

  async fetchImages(baseURL) {
    const response = await fetch(baseURL, {
      method: "GET", 
      headers: {
      Accept: "application/json",
      Authorization: this.API_KEY
      }
    });
    
    const data = await response.json();
    return data;
  }

  generateHTML(photos) {
    photos.forEach(photo=>{
      const item = document.createElement("div");
      item.classList.add("item");
      item.innerHTML = `
      
      <img src="${photo.src.medium}">
      
      
      
      
      `

      this.galleryDiv.appendChild(item);
    })
  }
}

const gallery = new photoGallery;

// add to cart button
let carts = document.querySelectorAll(".single_product_btn");

const products = [
  {
    name: "Chanel fragance",
    description: "chanel",
    image: "/bilder/chanel.jpeg",
    price: 1200,
    inCart: 0
  },
  {
    name: "D&G Fragance",
    description: "d&g",
    image: "/bilder/dolce.jpeg",
    price: 1100,
    inCart: 0
  },

  {
    name: "Parfymset",
    description: "parfymset",
    image: "/bilder/parfymset.jpeg",
    price: 900,
    inCart: 0
  },

  {
    name: "D&G Fragance",
    description: "dolce",
    image: "/bilder/dolce.jpeg",
    price: 800,
    inCart: 0
  },

  {
    name: "D&G Fragance",
    description: "dolce",
    image: "/bilder/dolce.jpeg",
    price: 800,
    inCart: 0
  },

  {
    name: "D&G Fragance",
    description: "dolce",
    image: "/bilder/dolce.jpeg",
    price: 800,
    inCart: 0
  },
  
  {
    name: "D&G Fragance",
    description: "dolce",
    image: "/bilder/dolce.jpeg",
    price: 800,
    inCart: 0
  },

  {
    name: "D&G Fragance",
    description: "dolce",
    image: "/bilder/dolce.jpeg",
    price: 800,
    inCart: 0
  }
];

const productWrapper = document.querySelector('.product_wrapper');

products.forEach((product) => {
  productWrapper.innerHTML += `
    <div class="single_product_wrapper">
      <img src="${product.image}" alt="" class="single_product_img">
      <div class="product_info" id=${product.id}>
        <h3 class="single_product_heading">${product.name}</h3>
        <p class="single_product_description">${product.description}</p>
        <p class="single_product_price">${product.price} kr</p>
        <button class="single_product_btn">Lägg i varukorg</button>
      </div>
    </div>
  `;
});


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
    Object.values(cartItems).map((item, i) => {
      productContainer.innerHTML += `
      <div class="product">
        <ion-icon class="delete_btn" name="close-circle-outline"></ion-icon>
        <img src="./bilder/${item.description}.jpeg">
        <div class="cart-product-wrapper">
          <h5>Produktnamn:</h5>
          <span>${item.name}</span>
          <span><h5>Pris:</h5>${item.price},00kr</span>
          <div class="quantity">
            <span><h5>Antal:</h5></span>
            <ion-icon class="decrease" name="chevron-back-outline"></ion-icon> 
            <span id="qty${i}">${item.inCart}</span>
            <ion-icon class="increase" name="chevron-forward-outline"></ion-icon>
          </div>
        </div>
      </div>`
    });
    productContainer.innerHTML += ` 
    <div class = "basket-total-container">
      <h4 class = "basket-total-title">Totalt i varukorgen:</h4>
      <h4 class = "basket-total"> ${cartCost},00kr </h4>
      <button class = "checkout-btn">Genomför Köp</button>
    <div>
    `
  }
//--------------- increase and decrease items---------

   let add = document.querySelectorAll(".increase")   // choose all increase buttons
   let remove = document.querySelectorAll (".decrease") // choose all decrease buttons         // 
   for (let i = 0; i < add.length; i++) {   // loop buttons and add addeventlistener to click
    add[i].addEventListener("click", () => { 
      let int = document.getElementById(`qty${i}`)  
      // let qtyProducts = Object.values(products[1])[1];   // 

      int.innerText = parseInt(int.innerText) + 1;
      let productNumbers = localStorage.getItem("cartNumbers");
      localStorage.setItem("cartNumbers", parseInt(productNumbers) + 1);
      // qtyProducts.innerText += 1;
    })
 
  }
 
  for (let i = 0; i < remove.length; i++) { 
    // for loop - through all buttons and add addeventlistener and it does something
    remove[i].addEventListener("click", () =>    { 
      let int = document.getElementById(`qty${i}`)
      // let qtyProducts = Object.values(products[1])[1];
  
      int.innerText = parseInt(int.innerText) - 1;
      let productNumbers = localStorage.getItem("cartNumbers");
      localStorage.setItem("cartNumbers", parseInt(productNumbers) - 1);
    })
   
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
let checkoutMessageContainer = document.querySelector(".checkout_message");
 checkOutBtn.addEventListener("click", checkoutNow);


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



  
  