var img = new Image();
img.src = "ball_noloop.gif";
var clip1 = new Audio("audio/bite_legs_off.mp3");
var clip2 = new Audio("audio/hate_player_game.mp3");
var clip3 = new Audio("audio/i_am_the_smartest.mp3");
var clip4 = new Audio("audio/rick_and_morty_sun.mp3");
var clip5 = new Audio("audio/white_people_problems.mp3");

var empty_img = new Image();
function goodMorning() {
  var imageHolder = document.getElementsByClassName("image")[0];
  imageHolder.appendChild(img);
}

function buttonClick() {
  img.src = "";
  img.src = "ball_noloop.gif";
  clip1.play;
}
