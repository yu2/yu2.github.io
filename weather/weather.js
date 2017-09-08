var url = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;

$(function() {
  if (navigator.geolocation) {
    alert("Geolocation available");
  } else {
    alert("Geolocation unavailable. Please refresh page and allow location sharing.")
  }
  
  navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
  });
  
 /* 
  $.ajax({
    url: url + ,
    
  })
  */
});