var option = document.querySelector ("#reason");
var name = document.querySelector ("#name");
var email = document.querySelector ("#email");
var phone = document.querySelector ("#phone");
var message = document.querySelector ("#message");

var contact_btn = document.querySelector ("#contact_btn");
contact_btn.addEventListener ("click", validation);

function validation () {
        
if (option.value === "callBack") {
    alert ("Tack för att du kontaktar oss. Vi ringer dig på det nummer du angav!");
   
}

else if (option.value === "feedback") {

    alert ("Tack för din värdefulla feedback. Ha en bra dag!");
}

else if (option.value === "returnProduct") {

    alert ("Vi beklagar att du inte var nöjd med vår tjänst. Vänligen kontrollera din e-post för proceduren!");
}

else {
    alert ("Vi har fått ditt svar. Tack. Välkommen åter");
}


}

