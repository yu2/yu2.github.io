var query, resultsJoined;
var results = [];
var colors = ["snow", "honeydew", "lightcyan", "lavender", "lavenderblush", "seashell", "beige", "azure", "ivory", "linen"];
var r, g, b;

$(function(){
  $(".resultsHere").text("Results appear here");
  
  $("#submit").click(function() {
    search($("#searchbox").val());
  });
  
  $("#searchbox").keydown(function(e) {
    if (e.keyCode == 13) {
      search($("#searchbox").val());
    }
  });

  $("#searchbox").click(function() {
    $("#searchbox").val("");
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
        results[i] = "<div class=\"result\"><p class=\"resultTitle\">" + "<a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/" + response.query.search[i].title.replace(" ", "_") + "\">" + response.query.search[i].title + "</a></p><p class=\"resultSnippet\">" + response.query.search[i].snippet + "</p></div>";
      }
      resultsJoined = results.join("");
      $(".resultsHere").html(resultsJoined).hide();
      displayResults();
    }
  });
}

function displayResults() {
  resultBoxes = document.getElementsByClassName("result");
  resultTitles = document.getElementsByClassName("resultTitle");
  resultSnippets = document.getElementsByClassName("resultSnippet");

  //Boxes
  $(resultBoxes).css({
    "display": "flex",
    "flex-direction": "column",
    "align-items": "center",
    "margin-bottom": "0.5em"
  });
  //Titles
  $(resultTitles).css({
    "width": "100%",
    "padding": "0.3em",
    "font-weight": "bold",
    "color": "dimgray"
  });
  $(".resultTitle a:link").css({
    "color": "black",
    "text-decoration": "none"
  });
  //Body(snippets)
  $(resultSnippets).css({
    "padding": "0.3em"
  });
  $(".searchmatch").css("font-weight", "bold");
  
  //set colours of each resultBox
  for (var i = 0; i < resultBoxes.length; i++) {
    randomColor();
    $(resultBoxes[i]).css({
      "background-color": "rgb(" + r + ", " + g + ", " + b + ")",
      "border": "0.05em solid rgb(" + (r-60) + ", " + (g-60) + ", " + (b-60) + ")"
    });
    
    $(resultTitles[i]).css("background-color", "rgb(" + (r-30) + ", " + (g-30) + ", " + (b-30) + ")");
  }
  
  $(resultBoxes).hide();
  $(".resultsHere").css("text-align", "center").show();
  
  //show results one by one
  $(resultBoxes[0]).show(250, function(){
    $(this).next().show(250, arguments.callee); //arguments.callee contains the currently executing function
  });
}

function randomColor() {
  r = Math.floor(Math.random()*26 + 230);
  g = Math.floor(Math.random()*26 + 230);
  b = Math.floor(Math.random()*26 + 230);
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
