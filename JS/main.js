// All products stored here
const products = [
  {
    id: 0,
    name: "Chanel fragance",
    description: "chanel",
    image: "/bilder/chanel.jpeg",
    price: 1200,
    inCart: 0
  },
  {
    id: 1,
    name: "Luxury perfume Gift set",
    description: "Parfymset",
    image: "/bilder/Parfymset.jpeg",
    price: 900,
    inCart: 0
  },

  {
    id: 2,
    name: "D&G fragance",
    description: "D&G",
    image: "/bilder/D&G.jpeg",
    price: 1100,
    inCart: 0
  },

  {
    id: 3,
    name: "D&G Fragance",
    description: "dolce",
    image: "/bilder/dolce.jpeg",
    price: 800,
    inCart: 0
  },

  {
    id: 4,
    name: "D&G Fragance",
    description: "dolce",
    image: "/bilder/dolce.jpeg",
    price: 800,
    inCart: 0
  },

  {
    id: 5,
    name: "D&G Fragance",
    description: "dolce",
    image: "/bilder/dolce.jpeg",
    price: 800,
    inCart: 0
  },
  
  {
    id: 6,
    name: "D&G Fragance",
    description: "dolce",
    image: "/bilder/dolce.jpeg",
    price: 800,
    inCart: 0
  },

  {
    id: 7,
    name: "D&G Fragance",
    description: "dolce",
    image: "/bilder/dolce.jpeg",
    price: 800,
    inCart: 0
  }
];

// Get the product wrapper from index.html
const productWrapper = document.querySelector('.page');

// Render all the product elements in product wrapper.
if (productWrapper) {
  products.forEach((product) => {
    productWrapper.innerHTML += `
      <div class="list-group">
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
}

// add to cart button
let carts = document.querySelectorAll(".single_product_btn");


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

  let productNumbers = localStorage.getItem("cartNumbers"); // Hämtar data från localstorage hur många produkter som finns

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1); 
    document.querySelector(".cart span").textContent = productNumbers + 1;

  } else {
    localStorage.setItem("cartNumbers", 1); //
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(product)

}


function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {

    if (cartItems[product.id] == undefined) {
      cartItems = {
        ...cartItems, [product.id]: product
      }

    }


    cartItems[product.id].inCart += 1;
  } else {
    product.inCart = 1;

    cartItems = {
      [product.id]: product
    }

  }




  localStorage.setItem("productsInCart", JSON.stringify(cartItems));



}

// Function that adds to total cost
function totalCost(product) {
  // Get current total cost from local storage
  let cartCost = localStorage.getItem("totalCost");

  // Get the rendered total cost
  const totalCostElement = document.querySelector('.basket-total');

  // If cart cost is set in local storage
  if (cartCost) {
    // Convert it to a number
    cartCost = parseInt(cartCost);
    // Add product price to the cost set in local storage
    localStorage.setItem("totalCost", cartCost + product.price);
    // Render the new total cost
    totalCostElement.innerHTML = cartCost + product.price + ',00kr';

  } else {
    // Set the product price to be the total cost
    localStorage.setItem("totalCost", product.price);
    // Render the new total cost
    totalCostElement.innerHTML = product.price + ',00kr';
  }

}

// Function that subtracts from total cost
function subtractTotalCost(product) {
  // Get current total cost from local storage
  let cartCost = localStorage.getItem("totalCost");
  // Get the rendered total cost
  const totalCostElement = document.querySelector('.basket-total');

  // If cart cost is set in local storage
  if (cartCost) {
    // Convert it to a number
    cartCost = parseInt(cartCost);
    // Subtract product price to the cost set in local storage
    localStorage.setItem("totalCost", cartCost - product.price);
    // Render the new total cost
    totalCostElement.innerHTML = cartCost - product.price + ',00kr';
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
          <h5>Productname:</h5>
          <span>${item.name}</span>
          <span><h5>Price:</h5>${item.price},00kr</span>
          <div class="quantity">
            <span><h5>Quantity:</h5></span>
            <ion-icon class="decrease" name="chevron-back-outline" data-id="${item.id}"></ion-icon> 
            <span id="qty${i}">${item.inCart}</span>
            <ion-icon class="increase" name="chevron-forward-outline" data-id="${item.id}"></ion-icon>
          </div>
        </div>
      </div>`
    });
    productContainer.innerHTML += ` 
    <div class = "basket-total-container">
      <h4 class = "basket-total-title">Total:</h4>
      <h4 class = "basket-total"> ${cartCost},00kr </h4>
      <button class = "checkout-btn">Complete Purchase</button>
    <div>
    `
  }
  
//--------------- increase and decrease items---------

   let add = document.querySelectorAll(".increase")   // choose all increase buttons
   let remove = document.querySelectorAll (".decrease") // choose all decrease buttons         // 
   for (let i = 0; i < add.length; i++) {   // loop buttons and add addeventlistener to click
    add[i].addEventListener("click", (event) => { 
      // Get the rendered quantity
      let qtyElement = document.getElementById(`qty${i}`);
      // Get the rendered product id
      const productId = event.target.getAttribute('data-id');
      // Get the products stored in cart
      const productsInCart = JSON.parse(localStorage.getItem('productsInCart'));
      // Increase in cart based on the product id matching one of the items in products stored above
      const numberOfProducts = productsInCart[productId].inCart += 1;
      // Update local storage 
      localStorage.setItem('productsInCart', JSON.stringify(productsInCart));

      // Update redered text
      qtyElement.innerText = numberOfProducts;
      // Get cart numbers
      let productNumbers = localStorage.getItem("cartNumbers");
      // Update cart numbers
      localStorage.setItem("cartNumbers", parseInt(productNumbers) + 1);

      // Update rendered cart numbers
      onLoadCartNumbers();
      // Update total cost in local storage and rendered text
      totalCost(products[productId]);
    })
 
  }
 
  for (let i = 0; i < remove.length; i++) { 
    // for loop - through all buttons and add addeventlistener and it does something
    remove[i].addEventListener("click", (event) =>    {
      // Get the rendered quantity
      let qtyElement = document.getElementById(`qty${i}`)
      // Get the rendered product id
      const productId = event.target.getAttribute('data-id');
       // Get the products stored in cart
      const productsInCart = JSON.parse(localStorage.getItem('productsInCart'));

      // Only decrease if the nubmer of items in cart is greater than 1
      if (productsInCart[productId].inCart > 1) {
        // Decrease in cart based on the product id matching one of the items in products stored above
        const numberOfProducts = productsInCart[productId].inCart -= 1;
        // Update local storage 
        localStorage.setItem('productsInCart', JSON.stringify(productsInCart));

        // Update rendered text
        qtyElement.innerText = numberOfProducts;
        // Get cart numbers
        let productNumbers = localStorage.getItem("cartNumbers");
        // Update cart numbers
        localStorage.setItem("cartNumbers", parseInt(productNumbers) - 1);

        // Update rendered cart numbers
        onLoadCartNumbers();
        // Update total cost in local storage and rendered text
        subtractTotalCost(products[productId]);
      }
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
if (checkOutBtn) {
  checkOutBtn.addEventListener("click", checkoutNow);
}


  function checkoutNow() {


    checkoutMessageContainer.innerHTML += `
  <div class = "checkoutMessage"> <h3 class "thank_you_title>Thankyou for shopping, your order is now confirmed</h3> 
  <button class = "pdf_btn"> <i class="fas fa-file-pdf"></i> Download Order Details as pdf</button>
  </div>
`
const pdf = new jsPDF();

  let pdfBtn = document.querySelector(".pdf_btn");
  
  
  
  
  function savePDF() {
  
    pdf.text(10, 10, `Total Amount: ${cartCost}   ` );
    pdf.save("Kvitto.pdf");
  }
  
  pdfBtn.addEventListener("click", savePDF);

  }


  
 

} 
onLoadCartNumbers()
displayCart()