var url = "https://fcc-weather-api.glitch.me/api/current?";
var res, temp, celsius;

$(document).ready(function() {
  
  //if geolocation is available, do ajax call
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {
    alert("Geolocation unavailable. Please refresh page and allow location sharing.");
  }
});

$(document).ajaxStop(function(){
  $("#cel").click(function(){
    $("#temperature").text(celsius);
    $("#fah").css("border", "none");
    $("#cel").css("border", "0.05em solid white");
    $("#cel").css("background-color", "rgb(120, 210, 180)");
    $("#fah").css("background-color", "rgb(100, 190, 160)");
  });
  
  $("#fah").click(function(){
    $("#temperature").text(Math.round(celsius * 9 / 5 + 32));
    $("#cel").css("border", "none");
    $("#fah").css("border", "0.05em solid white");
    $("#fah").css("background-color", "rgb(120, 210, 180)");
    $("#cel").css("background-color", "rgb(100, 190, 160)");
  });
});


function getWeather(lat, lon) {
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
