function myFunction() {
  var resp = prompt("Rename");
  document.getElementById("body").innerHTML = resp;
  document.getElementById("title").innerHTML = resp;
}
      
var x = 0;
      
function counter() {
  x++;
  document.getElementById("body").innerHTML = x;
}

function counterReset() {
  x = 0;
  document.getElementById("body").innerHTML = x;
}

function colorChange(name) {
  var elem = document.getElementById(name);
  var color = getComputedStyle(elem).getPropertyValue("background-color");
  document.body.style.backgroundColor = color;
}

document.getElementById('date').innerHTML = Date();

function update() {
  document.getElementById('date').innerHTML = Date();
}

$(document).ready(function() {
  
  $('#left').click(function() {
    $('#finn').animate({
      left:'-=150px'
    }, 'slow');
  });
  
  $('#right').click(function() {
    $('#finn').animate({
      left:'+=150px'
    }, 'slow');
  });
  
  $('button').mousedown(function() {
    $(this).toggleClass('onclick');
  });
  
  $('button').mouseup(function() {
    $(this).toggleClass('release');
  });
  
  $('#save').click(function() {
    document.getElementById('body').innerHTML = document.getElementById('name').value;
  });
  
  $('#poem').click(function() {
    $('.solitude').hide()
  });
  
});
