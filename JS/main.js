
// add to cart button
let carts = document.querySelectorAll(".single_product_btn");

// Produktobjekt
const products = [

  {
    name: "Chanel fragance",
    description: "chanel",
    price: 1200,
    inCart: 0

  },
  {
    name: "D&G Fragance",
    description: "d&g",
    price: 1100,
    inCart: 0
  },

  {
    name: "Parfymset",
    description: "parfymset",
    price: 900,
    inCart: 0
  },

  {
    name: "D&G Fragance",
    description: "dolce",
    price: 800,
    inCart: 0
  },

  {
    name: "D&G Fragance",
    description: "dolce",
    price: 800,
    inCart: 0
  },

  {
    name: "D&G Fragance",
    description: "dolce",
    price: 800,
    inCart: 0
  },
  
  {
    name: "D&G Fragance",
    description: "dolce",
    price: 800,
    inCart: 0
  },

  {
    name: "D&G Fragance",
    description: "dolce",
    price: 800,
    inCart: 0
  }


];




// For loop som loopar igenom hur många produkter som är i varukorgen och vad den totala kostnaden blir
for (let i = 0; i < carts.length; i++) {  
  carts[i].addEventListener("click", () => { // Man väljer knappen lägg i varukorg och den tittar på hur många gånger man klickar
                                              
    cartNumbers(products[i]); // Hur många gånger man klickar på knapp "lägg i varukorg" 
    totalCost(products[i]); // totala kostnaden
  });

}


function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers"); // hämta Cartnumbers från local storage
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers; // välj klassnamn span och manipulera dom

  }
}


// funktion för att maipulera cart i header
function cartNumbers(product) {

  let productNumbers = localStorage.getItem("cartNumbers"); // hämta cartnumbers från localstorage


  productNumbers = parseInt(productNumbers); // gör om productnumbers till siffror

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1); // Om man klickar på knappen "add to cart" så skickar man info till local storage att den ska öka med 1
    document.querySelector(".cart span").textContent = productNumbers + 1; // Då ska också span ökas med 1

  } else {
    localStorage.setItem("cartNumbers", 1); // om man klickar första gången ska det stå endast 1
    document.querySelector(".cart span").textContent = 1; // samma som ovan
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





onLoadCartNumbers()






