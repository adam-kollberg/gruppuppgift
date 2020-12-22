
// Construtor
class photoGallery {
    constructor() { // skapa en constructor, använda this i constructor
     this.API_KEY = "563492ad6f917000010000013f814e23972e4212a409926251033267"; // Hämta API key från pexels lägg in i variabel
     this.galleryDiv = document.querySelector(".gallery"); // välj gallery classnamn i HTML
     this.searchForm = document.querySelector(".header form"); // välj .header och form i html
     this.eventHandle(); // Initiera Event handle
  
    }
  // event handle
    eventHandle () {
  document.addEventListener("DOMContentLoaded",() => {  // Detta ska hända när sidan laddas in
  
   this.getImg(); // hämta bild
  
  
  });
  
  
  
  
    }
  // här hämtas bilden
  async getImg(){ // async för att det ska köras i bakrunden och inte störa resten av sidan
  const baseURL = "https://api.pexels.com/v1/search?query=perfume&per_page=12"; // Base url från pexels 12 st bilder max hämtas sökning på "perfume"
  const data = await this.fetchImages(baseURL); // variabel som hämtar bilder från URL när async körs måste detta ha värdet await.
  this.generateHTML(data.photos); // Här anropas en funktion generateHTML
  console.log(data);
  
  
  
  }
  
  async fetchImages(baseURL) { // Hämta bilder från URL
    const response = await fetch(baseURL, {
      method: "GET", // metod get
      headers: {
      Accept: "application/json", //Acceptera json
      Authorization: this.API_KEY // Autensiera API KEY
      }
    });
    
    const data = await response.json(); // vänta op respons från API
    return data;
  }
  // generera HTML på vår sida
  generateHTML(photos) {
   photos.forEach(photo=>{ // For each loop för foton
     const item = document.createElement("div"); // skapa en div
     item.classList.add("item"); // Div har classname item
     // här genereas HTML KODEN
     item.innerHTML = ` 
     
     <img src="${photo.src.medium}">
     
     
     
     
     `
    // Lägg till itemDiv i gallery Div
    this.galleryDiv.appendChild(item);
   })
  
  }
  
  
  }
  
  const gallery = new photoGallery;