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
});