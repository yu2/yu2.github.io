var img = new Image();
img.src = "ball_noloop.gif";

var currentPlaylist = 0;
var lastPlaylist = currentPlaylist;
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

var currentlyPlaying;
var lastPlayed = playlist[0][0];
function onClick() {
  img.src = "";
  img.src = "ball_noloop.gif";
  //var sounds = document.getElementsByTagName('audio');
  //for(i=0; i < playlist.length; i++) playlist[i].pause();
  if (!lastPlayed.paused) {
    lastPlayed.pause();
    lastPlayed.currentTime = 0;
  }

  currentTrack = randomNum(playlist[currentPlaylist].length);
  currentlyPlaying = playlist[currentPlaylist][currentTrack];
  currentlyPlaying.play();
  lastPlayed = currentlyPlaying;

  tooltip.classList.add("disappear");
}

function randomNum(i) {
  let result = Math.floor(Math.random() * i);
  console.log("playing track " + (result + 1));
  return result;
}

function switchAudio() {
  if (currentPlaylist < playlist.length - 1) {
    currentPlaylist++;
    console.log("currentPlaylist is now " + currentPlaylist);
  } else {
    currentPlaylist = 0;
  }
}
