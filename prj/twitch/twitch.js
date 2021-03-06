var url = "https://api.twitch.tv/kraken/channels/trumpsc";
var target, index;

$(function() {
  $(".go").click(function() {
    target = event.target.id;
    index = target.substr(target.length - 1);
    console.log(index);
    channelInfo($("#searchbox" + index).val(), index);
  });
  $(".searchbox").click(function(event) {
    $("#" + event.target.id).val("");
  });
  $(".searchbox").keydown(function(e) {
    if (e.keyCode == 13) {
      target = event.target.id;
      index = target.substr(target.length -1);
      channelInfo($("#" + target).val(), index);
    }
  });
  channelInfo("freeCodeCamp", 1);
});

function channelInfo(channelName, boxNumber) {
  $.ajax({
    //url: 'https://wind-bow.gomix.me/twitch-api/users/freecodecamp',
    url: 'https://api.twitch.tv/kraken/streams/' + channelName,
    /*
    xhrFields: {
      withCredentials: "include"
    },
    */
    headers: {
      "Client-ID": "jrkdkjsfjthn2oc2flhfw3c3zlwzyt",
      //"Accept": "application/vnd.twitchtv.v5+json",
    },
    success: function(response){
      console.log(response);
      var currentDesc = "#channel-desc" + boxNumber;
      var currentArt = "#channel-art" + boxNumber;
      if (response.stream !== null) {
        $("#channel-preview" + boxNumber).css({
          "background-image": "url(\"" + response.stream.preview.large + "\")",
          "background-size": "cover",
          "filter": "opacity(80%)"
          //"background-color": "#7c7"
        });
        $(currentDesc).css("background-color", "#000");
        $(currentArt).css({
          "background-image": "url(\"" + response.stream.channel.logo + "\")",
          "background-size": "contain",
          "background-repeat": "no-repeat"
        });
        $("#channel-name" + boxNumber).html(response.stream.channel.display_name);
        $(currentDesc + " .streamer-name").attr("href", response.stream.channel.url);
        $(currentDesc + " .game-name").attr("href", "https://www.twitch.tv/directory/game/" + response.stream.game.replace(" ", "%20"));
        $("#channel-game" + boxNumber).html(response.stream.game);
        //$(currentDesc).html("<p><span id=\"channel1-name\">" + response.stream.channel.display_name + "</span> is playing <span id=\"channel1-game\">" + response.stream.channel.game +"</span></p>");
        $("#channel" + boxNumber).animate({"opacity": "1"}, 250);
      } else {
        $("#offline" + boxNumber).html(channelName + " is offline.");
        $("#channel" + boxNumber).animate({"opacity": "0"}, 250);
      }
    }
  });
}
