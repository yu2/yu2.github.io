$(function() {
  $(".next").mousedown(function(e) {
    $(this).toggleClass("mouse-down");
    console.log("down");
  });

  $(".next").mouseup(function(e) {
    $(this).toggleClass("mouse-down");
    console.log("up");
  });
});
