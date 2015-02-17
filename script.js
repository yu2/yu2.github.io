$(document).ready(function() {
  
  $('#left').click(function() {
    $('.finn').animate({
      left:'-=150px'
    }, 'slow');
  });
  
  $('#right').click(function() {
    $('.finn').animate({
      left:'+=150px'
    }, 'slow');
  });
  
  $('.button-group button').click(function() {
    var color = $(this).css('background-color');
    $('body').css("background-color", color);
  });

});
