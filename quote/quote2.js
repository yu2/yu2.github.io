$(document).ready(function() {
  var e = document.getElementById("one-more");
  
  e.addEventListener("click", onClick, false);
  
  var out_cont1 = document.getElementById("out-cont1");
  var cont1 = document.getElementById("cont1");
  var out_cont2 = document.getElementById("out-cont2");
  var cont2 = document.getElementById("cont2");
  var disk1 = "mid";
  var disk2 = "right";
  
  function onClick() {
    if ((disk1 === "mid")&&(disk2 === "right")) {
      console.log("here");
      out_cont1.style.transform += "translateX(-65vw)";
      cont1.style.transform = "rotate(-360deg)";
      
      out_cont2.style.transform += "translateX(-65vw)";
      cont2.style.transform = "rotate(-360deg)";
      
      disk1 = "left";
      disk2 = "mid";
    } else if ((disk1 === "right")&&(disk2 === "mid")) {
      out_cont1.style.transform += "translateX(-65vw)";
      cont1.style.transform = "rotate(0deg)";
      
      out_cont2.style.transform += "translateX(-65vw)";
      cont2.style.transform = "rotate(-720deg)";
      
      disk1 = "mid";
      disk2 = "left";
    }
  }
  
  out_cont1.addEventListener("transitionend", function(event) {
    if(disk1 === "left") {
      console.log("doing it");
      out_cont1.style.transform += "translateX(130vw)";
      cont1.style.transform = "rotate(360deg)";
      disk1 = "right";
    } else if (disk2 === "left") {
      out_cont2.style.transform += "translatex(130vw)";
      cont2.style.transform = "rotate(0)";
      disk2 = "right";
    }
  });
  
});
