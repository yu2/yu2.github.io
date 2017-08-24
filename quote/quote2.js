$(document).ready(function() {
  var e = document.getElementById("one-more");
  
  e.addEventListener("click", onClick(), false);
  
  console.log("yes");
  
  function onClick() {
    $(".container").animate( {
      width: "+=20%"
    });
  }
});