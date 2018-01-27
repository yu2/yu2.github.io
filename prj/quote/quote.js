$(document).ready(function() {
  $(".new-quote").mouseover(function() {
    $(".new-quote").animate( {
      backgroundColor: "rgb(220, 120, 125)",
    });
  });
  $(".new-quote").mouseleave(function() {
    $(".new-quote").animate( {
      backgroundColor: "rgb(194, 90, 97)"
    });
  });
  $(".new-quote").on("click", function() {
    $({deg: 0}).animate({deg: 360}, {duration: 2000, step: function(now) {
      $(".ball").css({
        transform: "rotate(" + now + "deg)"
      });
/*
      $("p").css({
        transform: "rotate(" + now + "deg)"
      });
*/    
    }});
  });
});
