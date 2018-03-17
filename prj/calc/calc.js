$(function() {
  var displayHeight = $(".calc-display").height();
  $("#num-display").css("font-size", displayHeight / 1.5);
  $(".btn").click(function(e) {
    let currentBtn = e.target.id;
    switch ($("#" + currentBtn).text()) {
      case "C":
        $("#num-display").text("");
        break;
      case "+":
        $("#op-display").text("+");
        break;
      default:
        $("#num-display").append($("#" + currentBtn).text());
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