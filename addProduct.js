

function addProduct (e) {
    e.preventDefault()
    
    
    
    
    
    
    // Välja det olika värderna
   
    const productName = document.querySelector("#product_name").value;
    const productDescription = document.querySelector("#product_description").value;
    const productPrice = document.querySelector("#product_price").value;
    
    
    //create Div
    const createdDiv = document.createElement ("div");
    const productDiv = document.querySelector(".product_container");
    productDiv.appendChild(createdDiv);
    createdDiv.className += "single_product";
    
    // Create img
    
   
const createdImg = document.createElement ("img");
createdDiv.appendChild(createdImg);
createdImg.src= "bilder/chanel.jpeg";
createdImg.className += "product_img";
    
    //create H3 for title
    const createdTitle = document.createElement ("input");
    createdDiv.appendChild(createdTitle);
    createdTitle.value= productName;
    createdTitle.className += "product_name";
    
    //create p for description
    const createdDescription = document.createElement ("p");
    createdDiv.appendChild(createdDescription);
    createdDescription.innerText= productDescription;
    createdDescription.className += "product_description";
    
    // Create p for price
    const createdPrice = document.createElement ("p");
    createdDiv.appendChild(createdPrice);
    createdPrice.innerText= productPrice + ":-";
    createdPrice.className += "product_price";
    
    
    // Create button for add to cart
    const createAddToCartBtn = document.createElement("button");
    createdDiv.appendChild(createAddToCartBtn);
    createAddToCartBtn.innerText= "Add to cart";
    //set att m prod ID

    //createAddToCartBtn.setAttribute ("id", "product_price")
    

    //Create remove-button
    const createRemoveCartBtn = document.createElement("button");
    createdDiv.appendChild(createRemoveCartBtn);
    createRemoveCartBtn.innerText = "Remove product";
    createRemoveCartBtn.className += "remove_product";

 

    /*
    for (var i = 0; i < createRemoveCartBtn.length; i++) {
        var button = createRemoveCartBtn[i]
        button.addEventListener("click", function(event) {
            var buttonClicked = event.target
            buttonClicked.parentElement.remove()
        })
    }

 */
    
 //FÖr varje produkt skapar local storage
 // Lägg till fält som heter ID


// Remove product (but this erases all the created divs)

    let removeBtn = document.querySelector(".remove_product");
     
    removeBtn.addEventListener("click", removeProduct);

    function removeProduct() {

        createdDiv.remove(); //how to erase only that particular product card?
    }
   


//Create edit button
    let createEditProdBtn = document.createElement("button");
    createdDiv.appendChild(createEditProdBtn);
    createEditProdBtn.innerText = "Edit product";
    createEditProdBtn.className += "edit_product";
    
    let editBtn = document.querySelector(".edit_product");

    editBtn.addEventListener("click", editProduct);


    //Create Edit Inputs-  How to only do this once? Now this shows up everytime there is a click

    function editProduct() {
        
        //Edit Title

        const createdInputTitle = document.createElement("input");
        createdDiv.appendChild(createdInputTitle);
        createdInputTitle.innerText = "Edit Title";
        createdInputTitle.className = "edit_title";

        let editTitleBtn = document.createElement("button");
        createdDiv.appendChild(editTitleBtn);
        editTitleBtn.innerText = "Edit Title Button";
        editTitleBtn.className = "edit_title_btn";

       /*  var element = document.getElementsByClassName(edit_title);
        var event = new Event ('change');
        element.dispatchEvent(event); */
 
        
        
        //editTitleBtn.addEventListener("click", function replaceTitle (){
          //  const event = document.querySelectorbyClassName(".product_name"); });

     

        //Next is slice????

        //__________________________________________


        //Edit Description

        const createdInputDesc = document.createElement("input");
        createdDiv.appendChild(createdInputDesc);
        createdInputDesc.innerText = "Edit Desc";
        createdInputDesc.className = "edit_desc";

        let editDescBtn = document.createElement("button");
        createdDiv.appendChild(editDescBtn);
        editDescBtn.innerText = "Edit Desc Button";
        editDescBtn.className = "edit_desc_btn";

        // editDescBtn.addEventListener("click", ".edit_desc");

       // let newDescBtn = document.querySelector(.submit_new_title);
       // newTitleBtn.addEventListener("click", ???)

        //Next is slice????



        //----------------------------------------

        //Edit Price

        const createdInputPrice = document.createElement("input");
        createdDiv.appendChild(createdInputPrice);
        createdInputPrice.innerText = "Edit Price";
        createdInputPrice.className = "edit_price";

        let editPriceBtn = document.createElement("button");
        createdDiv.appendChild(editPriceBtn);
        editPriceBtn.innerText = "Edit Price Button";
        editPriceBtn.className = "edit_price_btn";

        editPriceBtn.addEventListener("click", ".edit_price");

       // let newPriceBtn = document.querySelector(.??);
       // newTitleBtn.addEventListener("click", ???)

        //Next is slice????



        //-------------------------------------

        
        //Below to run above code block only once????????

        //var exec=true;function display() {if(exec){alert("test");exec=false;}}
       


    }

   




    }

  


    
    // Added event listner
    
    const btn_add_product = document.querySelector(".add_product");
    
    btn_add_product.addEventListener("click", addProduct);

   const images = []

   index = 0;
images[0] = "/Users/nicklassegerdahl/REPOS/gruppuppgift/Images/picture1.jpg";
images[1] = "/Users/nicklassegerdahl/REPOS/gruppuppgift/Images/picture2.jpg";
images[2] = "/Users/nicklassegerdahl/REPOS/gruppuppgift/Images/picture3.jpg";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);



//done

    /* function createImageBase(src, alt) {
        var image = document.createElement('img');
        image.src = src;
        image.alt = alt;
        return image;
    }
    
    
    function addPicture( ){
       var location = document.getElementById("#file");
       var image = createImageBase(imageSRC, imageSRC);
       location.appendChild(image);
    }
    
 */


    /* function loadimg() {
        const file = document.getElementById('file').files[0];
        const reader  = new FileReader();
        reader.onload = function(e)  {
            const image = document.createElement("img");
            image.src = e.target.result;
            document.body.appendChild(image);
         }
         reader.readAsDataSrc(file);  
        }  
          */
