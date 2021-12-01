var img = new Image();
img.src = "ball_noloop.gif";
var clip1 = new Audio("audio/be_quiet.mp3");
var clip2 = new Audio("audio/bitch.mp3");
var clip3 = new Audio("audio/clean_toilets.mp3");
var clip4 = new Audio("audio/disqualified.mp3");
var clip5 = new Audio("audio/fart.mp3");
var clip6 = new Audio("audio/fart_song.mp3");
var clip7 = new Audio("audio/glip_glops.mp3");
var clip8 = new Audio("audio/i_am_summer.mp3");
var clip9 = new Audio("audio/not_cool.mp3");
var clip10 = new Audio("audio/ooh_yeah.mp3");
var clip11 = new Audio("audio/pickle_rick.mp3");
var clip12 = new Audio("audio/pluto_planet.mp3");
var clip13 = new Audio("audio/show_me.mp3");
var clip14 = new Audio("audio/sun.mp3");
var clip15 = new Audio("audio/wubba_lubba.mp3");
var clips = [clip1, clip2, clip3, clip4, clip5, clip6, clip7, clip8, clip9,
clip10, clip11, clip12, clip13, clip14, clip15];
var currentTrack = 1;
var empty_img = new Image();

function goodMorning() {
  var imageHolder = document.getElementsByClassName("image")[0];
  imageHolder.appendChild(img);
}

function onClick() {
  img.src = "";
  img.src = "ball_noloop.gif";
  //var sounds = document.getElementsByTagName('audio');
  //for(i=0; i < clips.length; i++) clips[i].pause();
  if (!clips[currentTrack].paused) {
    clips[currentTrack].pause();
    clips[currentTrack].currentTime = 0;
  }

  currentTrack = randomNum(clips.length);
  clips[currentTrack].play();
}

function randomNum(i) {
  let result = Math.floor(Math.random() * i);
  console.log("playing track " + (result + 1));
  return result;
}
