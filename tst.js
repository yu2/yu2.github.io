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

function colourone() {
  document.body.style.backgroundColor = mistyrose;
}

function colour2() {
  document.body.style.backgroundColor = tomato;
}

function colour3() {
  document.body.style.backgroundColor = royalblue;
}
