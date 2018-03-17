var mode;
var mem = 0;

$(function() {
  var displayHeight = $(".calc-display").height();
  $("#num-display").css("font-size", displayHeight / 1.5);
  $(".btn").click(function(e) {
    let currentBtn = e.target.id;
    let btnText = $("#" + currentBtn).text();
    
    switch (btnText) {
      case "C":
        $("#num-display").text("");
        break;
      case "+":
      case "\u2212":
      case "\u00D7":
      case "\u00F7":
        $("#op-display").text(btnText);
        mem += $("#num-display").text();
        console.log(mem);
        break;
      default:
        $("#num-display").append(btnText);
    }
    /*
    if ($("#" + currentBtn).text() == "C") {
      $("#num-display").text("");
    }
    else {
      $("#num-display").append($("#" + currentBtn).text());
    }
    */
  });
});