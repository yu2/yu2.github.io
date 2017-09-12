$(document).ready(function() {
  var t1 = document.getElementById("t1");
  var listener = document.getElementById("listener");
  console.log("I'm running");
  t1.addEventListener("animationstart", function() {
    listener.innerHTML = "Animation start.";
  });
  
  t1.addEventListener("animationiteration", function() {
    listener.innerHTML = "New iteration.";
  });
  
  t1.addEventListener("animationend", function() {
    listener.innerHTML = "Animation end.";
    setTimeout(function(){listener.innerHTML = "Here's what's going on."}, 2000);
  });
  
  document.getElementById("listener").addEventListener("click", function() {
    alert("listener has been clicked");
  });
});