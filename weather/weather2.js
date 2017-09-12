var url = "https://fcc-weather-api.glitch.me/api/current?";
var res;
var temp;
var celsius;

$(document).ready(function() {
  
  //if geolocation is available, do ajax call
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {
    alert("Geolocation unavailable. Please refresh page and allow location sharing.");
  }
  
});

$(document).ajaxStop(function(){
  $("#cel").click(function(){
    alert("hi");
    $("#temperature").text(celsius);
    $("#fah").css("border", "");
    $("#cel").css("border", "0.05em solid white");
    $("#cel").css("background-color", "");
    $("#fah").css("background-color", "rgb(100, 190, 160)");
  });
  
  //programmatically triggering works
  //$("#cel").trigger("click");
  
  document.getElementById("cel").addEventListener("click", function() {
    alert("#cel has been clicked");
  });
  
  $("#fah").click(function() {
    alert("clicked");
  });
  
  $(document).on("click", "#fah", function(){
    alert("clicked");
    $("#temperature").text(cel * 9 / 5 + 32);
    $("#cel").css("border", "");
    $("#fah").css("border", "0.05em solid white");
    $("#fah").css("background-color", "");
    $("#cel").css("background-color", "rgb(100, 190, 160)");
  });
});


function getWeather() {
  $.ajax({
    url: url + "lat=" + lat + "&lon=" + lon,
    success: function(result) {
      res = result;
      temp = result.weather[0].main;
      $("#condition").text(temp);
      $("#location").text(result.name);
      $("#icon").html(getIcon(temp));
      celsius = result.main.temp;
      $("#temperature").text(celsius);
      $("img").css("height", "5em");
      $(".title").animate({
        opacity: 0
      }, 0);
      $(".inner-container").animate({
        opacity: 1
      }, 1000);
    }
  });
}

function getIcon(weather) {
  switch(weather) {
    case "Sunny":
      icon = "<i class=\"wi wi-day-sunny\"></i>";
      return icon;
    case "Clouds":
      icon = "<i class=\"wi wi-day-cloudy\"></i>";
      return icon;
    case "Windy":
      icon = "<i class=\"wi wi-day-windy\"></i>";
      return icon;
    case "Rain":
      icon = "<i class=\"wi wi-day-rain\"></i>";
      return icon;
    case "Clear":
      icon = "<i class=\"wi wi-night-clear\"></i>";
      return icon;
  }
}
