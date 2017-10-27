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

function convertToRoman(num) {
  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
  var result = '';

  for (var i = 0; i < roman.length; i++) {
    while (dec[i] <= num) {
      result += roman[i];
      num -= dec[i];
    }
  }
  return result;
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
  
  // Roman Numeral Converter listeners
  $('.input input').click(function() {
    $('.input input').val("");
  });
  $('.input input').keydown(function(key) {
    if (key.keyCode === 13) {
      $('.input button').trigger("click");
    }
  });
  $(".input button").click(function() {
    $(".display-roman").html(convertToRoman($(".input input").val()));
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
  $(".container3").height($(".box").height() + 10);
  $(".container4").height($(".box").height());
  
  
  
  
 
  
  
  
});


