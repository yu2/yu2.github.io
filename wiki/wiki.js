var query, resultsJoined;
var results = [];

$(function(){
  console.log(results);
  $(".resultsHere").text("hi");
  
  $("#submit").click(function() {
    query = $("#searchbox").val();
    search();
  });
});

function search() {
  $.ajax({
    url: "http://en.wikipedia.org/w/api.php?",
    data: {
      action: 'query',
      list: 'search',
      srsearch: query,
      //prop: 'images',
      //imlimit: '20',
      format: 'json' //changed from 'jsonfm'
    },
    dataType: 'jsonp',
    success: function(response) {
      console.log(response);
      
      //set up array of results, display them
      for(var i = 0; i < response.query.search.length; i++) {
        results[i] = "<p class=\"results\">" + response.query.search[i].title + "</p></br>";
      }
      resultsJoined = results.join("");
      $(".resultsHere").html(resultsJoined).hide();
      displayResults();
    }
  });
}

function displayResults() {
  resultsCol = document.getElementsByClassName("results");
  $(resultsCol).hide();
  $(".resultsHere").show();
  $(resultsCol[0]).show(250, function(){
    $(this).next().show(250, arguments.callee); //arguments.callee contains the currently executing function
  });
  
  
  /*
  for(var i = 0; i<resultsCol.length; i++) {
    $(resultsCol[i]).show(1000);
  }
  */
}