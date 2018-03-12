$(function() {
  var displayHeight = $(".calc-display").height();
  console.log(displayHeight);
  $("#num-display").css("font-size", displayHeight);
  $(".btn").click(function(e) {
    let currentBtn = e.target.id;
    if ($("#" + currentBtn).text() == "C") {
      $("#num-display").text("");
    }
    else {
      $("#num-display").append($("#" + currentBtn).text());
    }
  });
});