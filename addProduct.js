

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
    const createdTitle = document.createElement ("h3");
    createdDiv.appendChild(createdTitle);
    createdTitle.innerText= productName;
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