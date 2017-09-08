var url = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;

$(function() {
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      
      $.ajax({
        url: url + "lat=" + lat + "&lon=" + lon,
        success: function(result) {
          $("#temperature").html(result.weather[0].description);
          $("#location").html(result.name);
          $("#icon").html("<img src=\"" + result.weather[0].icon + "\" />");
        }
      });
    });
  } else {
    alert("Geolocation unavailable. Please refresh page and allow location sharing.");
  }

 
 
});