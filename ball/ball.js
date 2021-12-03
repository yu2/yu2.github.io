var img = new Image();
img.src = "ball_noloop.gif";

var currentClip = 0;
var currentTrack = 1;

var tooltip = document.createElement("div");

function goodMorning() {
  var imageHolder = document.getElementsByClassName("image_holder")[0];
  var tooltipHolder = document.getElementsByClassName("tooltip_holder")[0];
  var contentContainer =
  document.getElementsByClassName("content_container")[0];

  tooltip.className = "tooltip";
  tooltip.innerHTML = "Tap for  &nbsp<i class='fas fa-volume-up'></i>";
  tooltipHolder.appendChild(tooltip);
  imageHolder.appendChild(img);

  contentContainer.classList.add("appear");
  tooltip.classList.add("appear");
}

function onClick() {
  img.src = "";
  img.src = "ball_noloop.gif";
  //var sounds = document.getElementsByTagName('audio');
  //for(i=0; i < clips.length; i++) clips[i].pause();
  if (!clips[currentClip][currentTrack].paused) {
    clips[currentClip][currentTrack].pause();
    clips[currentClip][currentTrack].currentTime = 0;
  }

  currentTrack = randomNum(clips[currentClip].length);
  clips[currentClip][currentTrack].play();

  tooltip.classList.add("disappear");
}

function randomNum(i) {
  let result = Math.floor(Math.random() * i);
  console.log("playing track " + (result + 1));
  return result;
}

function switchAudio() {
  if (currentClip < clips.length - 1) {
    currentClip++;
    console.log("currentClip is now " + currentClip);
  } else {
    currentClip = 0;
  }
}
