var url = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon, icon;
var res;

$(document).ready(function() {
  $("#clickme").click(function() {
    console.log("hi");
    alert("hi");
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      getWeather();
      
    });
  }
  else {
    alert("Geolocation unavailable. Please refresh page and allow location sharing.");
  }
  
  $("#clickme").click(function() {
    console.log($("#temperature").text());
    console.log("hi");
    alert("hi");
  });
  
  $("#cel").click(function(){
    alert("hi");
    $("#temperature").text(res.main.temp);
    
    $("#fah").css("border", "");
    $("#cel").css("border", "0.05em solid white");
    $("#cel").css("background-color", "");
    $("#fah").css("background-color", "rgb(100, 190, 160)");
  });
  
  $(document).on("click", "#fah", function(){
    alert("clicked");
    $("#temperature").html(res.main.temp * 9 / 5 + 32);
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
          var temp = result.weather[0].main;
          $("#condition").html(temp);
          $("#location").html(result.name);
          $("#icon").html(getIcon(temp));
          bind("#icon");
          $(document).on("click", ".inner-container", function() {
            alert("clicked");
          });
          $("#icon").on("click", function(){
            alert("icon clicked");
          });
          alert("ajax running");
          $("#temperature").html(result.main.temp);
          $("img").css("height", "5em");
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
  
function bind(target) {
  
  $(document).on("click", target, function() {
    alert("clicked");
  });
  
}