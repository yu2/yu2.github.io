var url = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon, icon;

$(function() {
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      
      $.ajax({
        url: url + "lat=" + lat + "&lon=" + lon,
        success: function(result) {
          var temp = result.weather[0].main;
          $("#temperature").html(temp);
          $("#location").html(result.name);
          $("#icon").html(getIcon(temp));
          $("img").css("height", "5em");
        }
      });
    });
  } else {
    alert("Geolocation unavailable. Please refresh page and allow location sharing.");
  }

  function getIcon(weather) {
    switch(weather) {
      case "Sunny":
        icon = "<i class=\"wi wi-day-sunny\"></i>";
        return icon;
      case "Cloudy":
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
 
});