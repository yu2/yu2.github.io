$(function(){
  $(".display").text("hi");
  $.ajax({
    url: "http://en.wikipedia.org/w/api.php?",
    data: {
      action: 'query',
      list: 'search',
      srsearch: 'jacksonville',
      //prop: 'images',
      //imlimit: '20',
      format: 'json' //changed from 'jsonfm'
    },
    dataType: 'jsonp',
    success: function(result) {
      console.log("success");
      console.log(result);
      $(".display").text(result.query.search[0].title);
    }
  });
  
  $("#submit").click(function() {
    $(".display").text($("#searchbox").val());
  });
});