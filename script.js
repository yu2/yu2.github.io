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
