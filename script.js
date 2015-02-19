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
  
  $('.nav a').click(function(e) {
    var tab = $(this);
    if(tab.parent('li').hasClass('active')) {
      window.setTimeout(function () {
        $('.tab-pane').removeClass('active');
        $(tab.parent('li')).removeClass('active');
      }, 1);
    }
  });
  
  $('#pill_c button').click(function() {
    var response = prompt('Do YOU own a counter?');
    if (response === 'yes') {
      alert('Welcome to the club!');
    } else {
      alert("How unfortunate.");
    }
  });
  
  $('#bird').click(function() {
    var mySrc = this.getAttribute('src');
    if (mySrc === 'http://i.imgur.com/JZ3qfxb.gif') {
      this.setAttribute('src', 'http://i.imgur.com/BePpGDW.gif');
    } else {
      this.setAttribute('src', 'http://i.imgur.com/JZ3qfxb.gif');
    }
  });
});
