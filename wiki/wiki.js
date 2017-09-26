var query, resultsJoined;
var results = [];
var colors = ["snow", "honeydew", "lightcyan", "lavender", "lavenderblush", "seashell", "beige", "azure", "ivory", "linen"];

$(function(){
  $(".resultsHere").text("hi");
  
  $("#submit").click(function() {
    search($("#searchbox").val());
  });
  
  $("#searchbox").keydown(function(e) {
    if (e.keyCode == 13) {
      search($("#searchbox").val());
    }
  });
/*
  $(document).keydown(function(e) {
    if (e.keyCode == 82) {
      randomPage();
    }
  });
*/
  $("#random").click(function() {
    randomPage();
  });
});

function search(searchTerm) {
  $.ajax({
    url: "http://en.wikipedia.org/w/api.php?",
    data: {
      action: 'query',
      list: 'search',
      srsearch: searchTerm,
      //prop: 'images',
      //imlimit: '20',
      format: 'json' //changed from 'jsonfm'
    },
    dataType: 'jsonp',
    success: function(response) {
      console.log(response);
      
      //set up array of results, display them
      for(var i = 0; i < response.query.search.length; i++) {
        results[i] = "<p class=\"results\" style=\"border: 0.05em solid rgb(" + randomColor(100) + "); padding: 0.2em; background-color: rgb(" + randomColor(200) + ");\">" + "<a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/" + response.query.search[i].title.replace(" ", "_") + "\">" + response.query.search[i].title + "</a></p></br>";
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
}

function randomColor(value) {
  var r = Math.floor(Math.random()*56 + value);
  var g = Math.floor(Math.random()*56 + value);
  var b = Math.floor(Math.random()*56 + value);
  var rgb = r + ", " + g + ", " + b;
  return rgb;
}

function randomPage() {
  $.ajax({
    url: "http://en.wikipedia.org/w/api.php?",
    data: {
      action: 'query',
      list: 'random',
      rnnamespace: '0',
      format: 'json'
    },
    dataType: 'jsonp',
    success: function(response) {
      var searchTerm = response.query.random[0].title;
      $("#searchbox").val(searchTerm);
      search(searchTerm);
    }
  });
}
