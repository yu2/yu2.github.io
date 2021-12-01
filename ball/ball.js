var img = new Image();
img.src = "ball_noloop.gif";
var clip1 = new Audio("audio/bite_legs_off.mp3");
var clip2 = new Audio("audio/hate_player_game.mp3");
var clip3 = new Audio("audio/i_am_the_smartest.mp3");
var clip4 = new Audio("audio/rick_and_morty_sun.mp3");
var clip5 = new Audio("audio/white_people_problems.mp3");
var clips = [clip1, clip2, clip3, clip4, clip5];

var empty_img = new Image();
function goodMorning() {
  var imageHolder = document.getElementsByClassName("image")[0];
  imageHolder.appendChild(img);
}

function onClick() {
  img.src = "";
  img.src = "ball_noloop.gif";
  var sounds = document.getElementsByTagName('audio');
  for(i=0; i < clips.length; i++) clips[i].pause();
  let j = randomNum(5);
  clips[j].play();
}

function randomNum(i) {
  let result = Math.floor(Math.random() * i) + 1;
  console.log(result);
  return result;
}
