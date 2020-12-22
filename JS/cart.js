function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");
  
  
  
  
    if (cartItems && productContainer) {
      productContainer.innerHTML = "";
      Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
    <div class="product">
    <ion-icon class="delete_btn" name="close-circle-outline"></ion-icon>
    <img src="./bilder/${item.description}.jpeg">
    <div class = cart-product-wrapper>
    <h5>Produktnamn:</h5>
    <span>${item.name}</span>
    
    <span><h5>Pris:</h5>${item.price},00kr</span>
    
    <div class = "quantity">
    
    
    <span><h5>Antal:</h5> <ion-icon name="chevron-back-outline"></ion-icon>${item.inCart}</span>
    <ion-icon name="chevron-forward-outline"></ion-icon>
    </div>
    </div>
    </div>
    
    
  </div>
    `
      });
      productContainer.innerHTML += ` 
  <div class = "basket-total-container">
  <h4 class = "basket-total-title">Totalt i varukorgen:</h4>
  <h4 class = "basket-total"> ${cartCost},00kr </h4>
  <button class = "checkout-btn">Genomför Köp</button>
  <div>
  `
  
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


  displayCart()