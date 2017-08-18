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

/*
  $(function(){
     alert("My First Jquery Test");
  });
*/

  function modifyText() {
    var p = document.getElementById("text");
    if (p.firstChild.nodeValue == "The element has been clicked.") {
      p.firstChild.nodeValue = "This is some output.";
    } else {
      p.firstChild.nodeValue = "The element has been clicked.";
    }
  }
  
  var e = document.getElementsByClassName("item");
  for (var i = 0; i < e.length; i++) {
    e[i].addEventListener("click", modifyText, false);
  }
  
  $(".container").height($(".box").height());
  $(".container2").height($(".box").height() + 10);
  $(".container3").height($(".box").height());
  
});


