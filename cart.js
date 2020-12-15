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





  // Checkout button

  
let checkOutBtn = document.querySelector(".checkout-btn");
let checkoutMessageContainer = document.querySelector(".checkout_message")
  checkOutBtn.addEventListener("click", checkoutNow)


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