class photoGallery {
    constructor() {
     this.API_KEY = "563492ad6f917000010000013f814e23972e4212a409926251033267";
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