var img = new Image();
img.src = "ball_noloop.gif";
var rick1 = new Audio("audio/rick/be_quiet.mp3");
var rick2 = new Audio("audio/rick/christmas_christmas.mp3");
var rick3 = new Audio("audio/rick/clean_toilets.mp3");
var rick4 = new Audio("audio/rick/damn_girl.mp3");
var rick5 = new Audio("audio/rick/fart_song.mp3");
var rick6 = new Audio("audio/rick/great_pain.mp3");
var rick7 = new Audio("audio/rick/handy_hands.mp3");
var rick8 = new Audio("audio/rick/i_am_summer.mp3");
var rick9 = new Audio("audio/rick/i_love_you.mp3");
var rick10 = new Audio("audio/rick/minecraft.mp3");
var rick11 = new Audio("audio/rick/not_cool.mp3");
var rick12 = new Audio("audio/rick/ooh_yeah.mp3");
var rick13 = new Audio("audio/rick/poopybutthole.mp3");
var rick14 = new Audio("audio/rick/show_me.mp3");
var rick15 = new Audio("audio/rick/student_teacher.mp3");
var anime1 = new Audio("audio/anime/anta_baka.mp3");
var anime2 = new Audio("audio/anime/ara_ara.mp3");
var anime3 = new Audio("audio/anime/congratulations.mp3");
var anime4 = new Audio("audio/anime/nani.mp3");
var anime5 = new Audio("audio/anime/nepu.mp3");
var anime6 = new Audio("audio/anime/oniichan.mp3");
var anime7 = new Audio("audio/anime/oniichan_oniichan.mp3");
var anime8 = new Audio("audio/anime/scatman.mp3");
var anime9 = new Audio("audio/anime/tuturu.mp3");
var anime10 = new Audio("audio/anime/wow.mp3");

var rick = [rick1, rick2, rick3, rick4, rick5, rick6, rick7, rick8, rick9,
rick10, rick11, rick12, rick13, rick14, rick15];
var anime = [anime1, anime2, anime3, anime4, anime5, anime6, anime7, anime8,
anime9, anime10]
var clips = rick;
var currentTrack = 1;
var empty_img = new Image();

var tooltip = document.createElement("div");

function goodMorning() {
  var imageHolder = document.getElementsByClassName("image_holder")[0];
  var tooltipHolder = document.getElementsByClassName("tooltip_holder")[0];
  var contentContainer =
  document.getElementsByClassName("content_container")[0];

  tooltip.className = "tooltip";
  tooltip.innerHTML = "Tap me";
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
  if (!clips[currentTrack].paused) {
    clips[currentTrack].pause();
    clips[currentTrack].currentTime = 0;
  }

  currentTrack = randomNum(clips.length);
  clips[currentTrack].play();

  tooltip.classList.add("disappear");
}

function randomNum(i) {
  let result = Math.floor(Math.random() * i);
  console.log("playing track " + (result + 1));
  return result;
}

function switchAudio() {
  if (clips == rick) {
    clips = anime;
  } else {
    clips = rick;
  }
}
