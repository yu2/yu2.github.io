function myFunction() {
  var resp = prompt("Rename");
  document.getElementById("description").innerHTML = resp;
  document.getElementById("title").innerHTML = resp;
}
      
var x = 0;
      
function counter() {
  x++;
  document.getElementById("description").innerHTML = x;
}

function counterReset() {
  x = 0;
}
