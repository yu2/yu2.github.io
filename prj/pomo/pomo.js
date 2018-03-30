var currentSec, currentMin;
var timer;

$(function() {
  $("#start").click(function() {
    startTimer();
  });
  
  function startTimer() {
    currentSec = parseInt($("#second").text(), 10);
    currentMin = parseInt($("#minute").text(), 10);
    timer = setInterval(function() {
      if (currentSec === 0) {
        if (currentMin === 0) {
          clearInterval(timer);
        } else {
          currentMin--;
          setMin(currentMin);
          currentSec = 59;
          setSec(59);
        }
      } else {
        currentSec--;
        setSec(currentSec);
      }
      console.log("tick");
    }, 1000);
  }
  
  $("#stop").click(function() {
    clearInterval(timer);
  });
  
});

function setMin(val) {
  $("#minute").text(val);
}

function setSec(val) {
  $("#second").text((val < 10) ? "0" + val : val);
}

function getSec(val) {
  return $("#second").text();
}