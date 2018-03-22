var mode;
var mem = 0;
var opPressed = false;
var currentBtnText = function(event) {
  return $("#" + event.target.id).text();
};

function clearNum() {
  $("#num-display").text("");
}

function changeMode(md) {
  mode = md;
  $("#op-display").text(md);
}

$(function() {
  var displayHeight = $(".calc-display").height();
  $("#num-display").css("font-size", displayHeight / 1.5);
  
  // Number buttons
  $(".num-btn").click(function(e) {
    if (opPressed) {
      clearNum();
      opPressed = false;
    }
    $("#num-display").append(currentBtnText(e));
  });
    
  // Clear button
  $("#btn-clear").click(function(e) {
    clearNum();
    changeMode("");
  });
  
  // Operation buttons
  $(".op-btn").click(function(e) {
    mode = currentBtnText(e);
    $("#op-display").text(mode);
    mem += parseFloat($("#num-display").text(), 10);
    opPressed = true;
    
  });
  
  // Equals button
  $("#btn-equal").click(function(e) {
    let currentNum = parseFloat($("#num-display").text(), 10);
    switch (mode) {
      case "+":
        $("#num-display").text(mem + currentNum);
        break;
      case "\u2212":
        $("#num-display").text(mem - currentNum);
        break;
      case "\u00D7":
        $("#num-display").text(mem * currentNum);
        break;
      case "\u00F7":
        $("#num-display").text(mem / currentNum);
    }
    mem = 0;
    opPressed = true;
  });
  
  // Backspace button
  $("#btn-del").click(function(e) {
    let currentText = $("#num-display").text();
    $("#num-display").text(currentText.slice(0, -1));
  });
  
  $(".btn").mousedown(function(e) {
    $(this).toggleClass("mouse-down");
  });
  
  $(".btn").mouseup(function(e) {
    $(this).toggleClass("mouse-down");
  });
  
});