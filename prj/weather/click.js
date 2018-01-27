var r, g, b, rgb;

$(function(){
  $("#clickme").click(function(){
    //randomly generate values for red, green, and blue
    r = getRand();
    g = getRand();
    b = getRand();
    rgb = "rgb(" + r +", " + g + ", " + b +")";
    $("#clickme").css("backgroundColor", rgb);
  });
});

//generates a number between 1 and 255
function getRand() {
  return Math.floor(Math.random() * 255 + 1);
}
