$(function() {
  var currentCount;
  var timer;
  
  $("#start").click(function() {
    startTimer();
  });
  
  function startTimer() {
    timer = setInterval(function() {
      currentCount = parseInt($(".timer p").text(), 10);
      currentCount++;
      $(".timer p").text(currentCount);
      console.log("tick");
    }, 1000);
  }
  
  $("#stop").click(function() {
    clearInterval(timer);
  });
  
});