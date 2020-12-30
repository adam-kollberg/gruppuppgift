'use strict';

var numberOfItems = $('#page .list-group').length;  //Hämta totala antalet produkter som ska läggas in i olika sidor
var limitPerPage = 4; // Sätt en limit på hur många produkter på en sida
$('#page .list-group:gt(' + (limitPerPage - 1) + ')').hide(); 
var totalPages = Math.round(numberOfItems / limitPerPage); // hämta antalet sidor
$(".pagination").append("<li class='current-page active'><a href='javascript:void(0)'>" + 1 + "</a></li>"); // Lägg till en lista till klassnamnet pagination som har värdet 1

// Loop för att att sätta antalet produkter till antalet sidor om vi tex har 20 produkter så blir det 5 sidor, eftersom vi har en pagelimit på 4 produkter
for (var i = 2; i <= totalPages; i++) {
  $(".pagination").append("<li class='current-page'><a href='javascript:void(0)'>" + i + "</a></li>"); // Sätt in sidnumret i nästa lista
}

// Sätt in nästa ikonen 
$(".pagination").append("<li id='next-page'><a href='javascript:void(0)' aria-label=Next><span aria-hidden=true>&raquo;</span></a></li>");

// funktion som visar nya produkter beroende på vilken sidnummer det klickar på
$(".pagination li.current-page").on("click", function() {
    
    
    // Kolla ifall att sidnumret man klickar på är de förra sidan man var på
    if ($(this).hasClass('active')) {
    return false; // returnerr falskt eftersom inget ska hända om man klickar på samma sida som man är på.
  } else {
    var currentPage = $(this).index(); // Det förra sidnumret
    $(".pagination li").removeClass('active'); // Ta bort classnamnet active från den gamla sidan man var på
    $(this).addClass('active'); // Lägg till klassnamnet active på den nya sidan man klickar sig till
    $("#page .list-group").hide(); // Göm alla element i loopen när du klickar på en ny sida
    var grandTotal = limitPerPage * currentPage; // Hämta totala antalet produkter på den nya sidan du klickar på
    
    // Loopa igenom totala antalet produkter, och välj nya produkter baserat på sidnummer
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page .list-group:eq(" + i + ")").show(); // Visa nya produkter från den nya sidan du klickar på
    }
  }

});

// Funkktion för next page button
$("#next-page").on("click", function() {
  var currentPage = $(".pagination li.active").index(); // identifiera den nuvarande active class
  // Kolla så att du inte går förbi antalet sidor
  if (currentPage === totalPages) {
    return false; // returnerar falskt eftersom det inte finns mer produkter att visa och då inte heller fler sidor
  } else {
    currentPage++; //  annars Öka sidnumret med 1
    $(".pagination li").removeClass('active'); // Ta bort classnamnet active från den gamla sidan man var på
    $("#page .list-group").hide(); // Göm alla gamla element i loopen när du klickar på en ny sida
    var grandTotal = limitPerPage * currentPage; // Hämta totala antalet produkter på den nya sidan du klickar på

    // Loopa igenom totala antalet produkter, och välj nya produkter baserat på sidnummer
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page .list-group:eq(" + i + ")").show(); // Show items from the new page that was selected
    }

    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Ge det nya sidnumret klassnamnet active
  }
});

// Funkktion för previous page button
$("#previous-page").on("click", function() {
  var currentPage = $(".pagination li.active").index(); // identifiera den nuvarande active class
  // kolla så att man inte är på sidan 1
  if (currentPage === 1) {
    return false; // returnerar falskt eftersom man inte kan gå längre bak än sidan 1
  } else {
    currentPage--; // Minksa sidnumret med 1
    $(".pagination li").removeClass('active');  // ta bort active classname
    $("#page .list-group").hide();  // Göm gamla element
    var grandTotal = limitPerPage * currentPage; // totala antalet element
     // Loopa igenom atalet produkter och välja nya produkter baserat på sidunummer
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page .list-group:eq(" + i + ")").show(); // 
    }

    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Gör den nya sidan active classname
  }
});