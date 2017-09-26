var query, resultsJoined;
var results = [];
var colors = ["snow", "honeydew", "mintcream", "aliceblue", "ghostwhite", "whitesmoke", "seashell", "beige", "azure", "ivory", "mistyrose"];

$(function(){
  console.log(results);
  $(".resultsHere").text("hi");
  
  $("#submit").click(function() {
    query = $("#searchbox").val();
    console.log("here");
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
        results[i] = "<p class=\"results\" style=\"border: 0.05em solid black; padding: 0.2em; background-color: " + colors[Math.floor(Math.random() * 12)] + ";\">" + "<a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/" + response.query.search[i].title.replace(" ", "_") + "\">" + response.query.search[i].title + "</a></p></br>";
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
  $(".resultsHere").css("text-align", "center").show();
  $(resultsCol[0]).show(250, function(){
    $(this).next().show(250, arguments.callee); //arguments.callee contains the currently executing function
  });
  
  
  /*
  for(var i = 0; i<resultsCol.length; i++) {
    $(resultsCol[i]).show(1000);
  }
  */
}