var img;
function goodMorning() {
  img = new Image();
  img.src = "ball_noloop.gif";
  var imageHolder = document.getElementsByClassName("image")[0];
  imageHolder.appendChild(img);
}

function buttonClick() {
  img.src = "";
  img.src = "ball_noloop.gif";
}
