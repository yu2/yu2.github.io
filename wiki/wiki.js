$(function(){
  $(".display").text("hi");
  $.getJSON({
    
    url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&callback=JSON_CALLBACK",
    //method: 'GET',
    success: function(result) {
      console.log(result);
      $(".display").text(result);
    }
  });
});