$(document).ready(function() {
  var e = document.getElementById("one-more");
  
  e.addEventListener("click", onClick, false);
  
  var out_cont1 = document.getElementById("out-cont1");
  var cont1 = document.getElementById("cont1");
  var out_cont2 = document.getElementById("out-cont2");
  var cont2 = document.getElementById("cont2");
  
  function onClick() {
    console.log($("#cont2").css("transform"));
    
    if($("#cont2").css("transform") == "matrix(-1, -1.22465e-16, 1.22465e-16, -1, 0, 0))") {
      out_cont1.style.transform += "translateX(-65vw)";
      cont1.style.transform += "rotate(-720deg)";
      
      console.log("72");
      
      out_cont2.style.transform += "translateX(-65vw)";
      cont2.style.transform += "rotate(-720deg)";
    } else {
      out_cont1.style.transform += "translateX(-65vw)";
      cont1.style.transform += "rotate(-360deg)";
      
      console.log("36");
      console.log($("#cont2").css('transform'));
      
      out_cont2.style.transform += "translateX(-65vw)";
      cont2.style.transform += "rotate(-360deg)";
    }
    
  }
  /*
  cont2.addEventListener("transitionend", function(event) {
    $("#cont2").css("transform", "rotate(0)");
  });
  */
  
  
});
