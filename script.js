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

function color1(name) {
  var color = name.style.backgroundColor;
  document.body.style.backgroundColor = color;
}

function color2() {
  document.body.style.backgroundColor = "tomato";
}

function color3() {
  document.body.style.backgroundColor = "royalblue";
}

function color4() {
  document.body.style.backgroundColor = "gold";
}
