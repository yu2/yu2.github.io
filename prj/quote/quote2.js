$(document).ready(function() {
  newQuote("#quote2", "#author2");
  
  var e = document.getElementById("one-more");
  
  e.addEventListener("click", onClick, false);
  
  var out_cont1 = document.getElementById("out-cont1");
  var cont1 = document.getElementById("cont1");
  var out_cont2 = document.getElementById("out-cont2");
  var cont2 = document.getElementById("cont2");
  var disk1 = "mid";
  var disk2 = "right";
  var clickDisabled = false;
  
  
  function onClick() {
    
    if(clickDisabled)
      return;
    var hue = Math.floor(Math.random() * 360 + 1);
    if ((disk1 === "mid")&&(disk2 === "right")) {
      $("#out-cont2").css("filter", "hue-rotate("+hue+"deg)");
      out_cont1.style.transform += "translateX(-65vw)";
      cont1.style.transform = "rotate(-360deg)";
      
      out_cont2.style.transform += "translateX(-65vw)";
      cont2.style.transform = "rotate(-360deg)";
      
      disk1 = "left";
      disk2 = "mid";
      
    } else if ((disk1 === "right")&&(disk2 === "mid")) {
      $("#out-cont1").css("filter", "hue-rotate("+hue+"deg)");
      out_cont1.style.transform += "translateX(-65vw)";
      cont1.style.transform = "rotate(0deg)";
      
      out_cont2.style.transform += "translateX(-65vw)";
      cont2.style.transform = "rotate(-720deg)";
      
      disk1 = "mid";
      disk2 = "left";
    }
    clickDisabled = true;
    setTimeout(function(){clickDisabled = false;}, 1500);
  }
  
  var loc = -95;
  var loc2 = -160;
  
  out_cont1.addEventListener("transitionend", function(event) {
    if(disk1 === "left") {
      newQuote("#quote1", "#author1");
      out_cont1.style.right = loc + "vw";
      loc = loc - 130;
      $(".container").css("transition", "transform 0s");
      cont1.style.transform = "rotate(360deg)";
      $(".container").css("transition", "transform 1s");
      
      disk1 = "right";
    } else if (disk2 === "left") {
      newQuote("#quote2", "#author2");
      out_cont2.style.right = loc2 + "vw";
      loc2 = loc2 - 130;
      cont2.style.transform = "rotate(0)";
      disk2 = "right";
    }
  });
  
  function newQuote(quote, author) {
    $.ajax({
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous",
      type: "POST",
      data: {},
      dataType: "json",
      success: function(data) {
        $(quote).text("\"" + data.quote + "\"");
        $(author).text("- " + data.author);
      },
      error: function(err) {
        //alert(err);
      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "46tAVHfUQJmshiOEq6KtTFGdpra7p1ZHVsajsnjmXvmEha9Nbz");
      }
    });
  }
});
