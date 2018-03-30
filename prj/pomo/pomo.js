var currentCount;
var timer;

$(function() {
  $("#start").click(function() {
    startTimer();
  });
  
  function startTimer() {
    currentCount = parseInt($("#second").text(), 10);
    let currentMin = parseInt($("#minute").text(), 10);
    timer = setInterval(function() {
      if (currentCount === 0) {
        if (currentMin === 0) {
          clearInterval(timer);
        } else {
          decMin(currentMin);
          currentCount = 59;
          setSec(59);
        }
      } else {
        currentCount--;
        setSec(currentCount);
      }
      console.log("tick");
    }, 1000);
  }
  
  $("#stop").click(function() {
    clearInterval(timer);
  });
  
});

function decMin(min) {
  min--;
  $("#minute").text(min);
}

function setSec(val) {
  $("#second").text((val < 10) ? "0" + val : val);
}

function getSec(val) {
  return $("#second").text();
}