$(function() {
  $('.content').append("hi</br>");
  $(window).scroll(function() {
    var height = $('.header').height() - $('.navigation').height();
    $('#cons').html("height = " + height + "<br>scrollTop = " + $(window).scrollTop());
    if ($(window).scrollTop() >= height) {
      console.log("hi");
     // $('#filler').height($('.navigation').height());
      $('.navigation').css({
        "position": "fixed",
        "left": 0,
        "top": 0
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
    }
  });
});