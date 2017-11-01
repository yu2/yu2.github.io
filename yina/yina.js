$(function() {
  $('.content').append("hi</br>");
  
  var navHeight = $('.navigation').height();
  var headHeight = $('.header').height() - navHeight;
  
  $(window).scroll(function() {
    $('#cons').html("head height = " + headHeight + "<br>scrollTop = " + $(window).scrollTop());
    if ($(window).scrollTop() >= headHeight) {
      console.log("hi");
     // $('#filler').height($('.navigation').height());
      $('.navigation').css({
        "position": "fixed",
        "left": 0,
        "top": 0
      });
      $('.content').css({
        "position": "fixed",
        "top": navHeight
      });
      $('#filler').css({
        "height": $('.navigation').height()
      });
      
    }
    if ($(window).scrollTop() < $('.header').height()) {
      $('.navigation').css({
        "position": "relative"
      });
      $('#filler').css({
        "height": 0
      });
      $('.content').css({
        "position": "relative",
        "top": 0
      });
    }
  });
});