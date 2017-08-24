function testFunction() {
    document.getElementById("text").innerHTML = "testFunction() is being ran";
  }

 function newQuote() {
    document.getElementById("text").innerHTML = "newQuote() is being called";
    $.ajax({
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous",
      type: "POST",
      data: {},
      dataType: "json",
      success: function(data) {
        $(".joke").text("\"" + data.quote + "\"" + " - " + data.author);
      },
      error: function(err) {
        alert(err);
      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "46tAVHfUQJmshiOEq6KtTFGdpra7p1ZHVsajsnjmXvmEha9Nbz");
      }
    });
  }

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

  var output = document.getElementById("text");

  function modifyText() {
    if (output.firstChild.nodeValue == "The element has been clicked.") {
      output.firstChild.nodeValue = "This is some output.";
    } else {
      output.firstChild.nodeValue = "The element has been clicked.";
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


