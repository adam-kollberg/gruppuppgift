// Creating a function for login


const loginForm = document.getElementById("login-form"); 
const loginButton = document.getElementById("submit-field-box");
const loginErrorMsg = document.getElementById("login-error-msg");


// adding  an event
loginButton.addEventListener("click",(e) => {
      e.preventDefault();

      const username = loginForm.username.value;
      const password = loginForm.password.value;
      

      if (username === "grupp3" && password ==="passgrupp3") {
        alert("you have successfully logged in.");
       // location.reload();
        window.location = "addproduct.html";
        return false;

      } else {
        document.getElementById("login-error-msg").innerHTML = "Wrong password"
        return false;
    }



})

// //function Toggle() { 
//     const togglePassword = document.getElementById("password-box"); 
   
//     if (togglePassword.password === "password") { 
//      togglePassword.password = "text"; 
//      window.location = "addproduct.html";
//     } 
//     else { 
//   togglePassword.password = "password"; 
// } 
// } 