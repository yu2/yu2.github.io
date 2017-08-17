$(document).ready(function() {
  $(".item").mouseover(function() {
    $(".item").animate( {
      width: "+= 20%",
      height: "+= 20%"
    });
  });
  $(".item").mouseleave(function() {
    $(".item").animate( {
      width: "-= 20%",
      height: "-= 20%"
    });
  });
  $(function(){
     alert("My First Jquery Test");
  });

  function modifyText() {
    var p = document.getElementById("text");
    p.firstChild.nodeValue = "The element has been clicked.";
  }
  
  var e = document.getElementById("text");
  e.addEventListener("click", modifyText, false);
  

  
  
  
  
});


