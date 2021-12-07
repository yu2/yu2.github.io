var img = new Image();
img.src = "ball_noloop.gif";

var currentPlaylist = 0;
var lastPlaylist = currentPlaylist;
var currentTrack = 0;

var tooltip = document.createElement("div");

function goodMorning() {
  playlist[currentPlaylist] = shuffle(playlist[currentPlaylist]);

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

  currentlyPlaying = playlist[currentPlaylist][currentTrack];
  currentlyPlaying.play();
  console.log("now playing playlist " + currentPlaylist +
  " track " + currentTrack);
  lastPlayed = currentlyPlaying;

  currentTrack++;
  if (currentTrack == playlist[currentPlaylist].length) {
    currentTrack = 0;
    playlist[currentPlaylist] = shuffle(playlist[currentPlaylist]);
  }

  tooltip.classList.add("disappear");
}

function switchAudio() {
  if (currentPlaylist < playlist.length - 1) {
    currentPlaylist++;
    playlist[currentPlaylist] = shuffle(playlist[currentPlaylist]);
    console.log("currentPlaylist is now " + currentPlaylist);
  } else {
    currentPlaylist = 0;
    playlist[currentPlaylist] = shuffle(playlist[currentPlaylist]);
  }
}

function shuffle(playlist) {
  let t, i, l = playlist.length;

  while (l) {
    i = Math.floor(Math.random() * l--);

    t = playlist[l];
    playlist[l] = playlist[i];
    playlist[i] = t;
  }

  currentTrack = 0;
  return playlist;
}

var trackContainer = document.getElementsByClassName("tracks_container")[0];
var re = /[a-zA-Z_]+(?:\.mp4|\.m4a|\.mp3)$/;
var trackName = [];
function listTracks(p) {

  let linkText;
  for (let i = 0; i < p.length; i++) {
    let a = document.createElement("a");
    trackName.push(p[i].src.match(re)[0]);
    console.log(trackName[i]);
    linkText = document.createTextNode(trackName[i]);
    a.append(linkText);
    a.setAttribute("id", i);
    a.addEventListener("click", retrieveAudio);
    trackContainer.appendChild(a);
    //trackBox.innerText += p[i].src + "\n";
  }
}

function retrieveAudio() {
  let id = event.target.id;
  let num = String(id);
  console.log(id);
  for (let i = 0; i < playlist[currentPlaylist].length; i++) {
    if (playlist[currentPlaylist][i].src.includes(trackName[num])) {
      playlist[currentPlaylist][i].play();
      break;
    }
  }
}
