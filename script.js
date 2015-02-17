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

});
