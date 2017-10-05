var url = "https://api.twitch.tv/kraken/channels/trumpsc";

$(function() {
  $("#go").click(function() {
    channelInfo($("#searchbox").val());
  });
  $("#searchbox").click(function() {
    $("#searchbox").val("");
  });
  $("#searchbox").keydown(function(e) {
    if (e.keyCode == 13) {
      channelInfo($("#searchbox").val());
    }
  });
});

function channelInfo(channelName) {
  $.ajax({
    url: 'https://api.twitch.tv/kraken/streams/' + channelName,
    headers: {"Client-ID": "fcc-yu2"},
    success: function(response){
      console.log(response);
      if (response.stream !== null) {
        $("#channel1").css("background-color", "#7c7");
        $("#channel1").html("<p><span id=\"channel1-name\">" + response.stream.channel.display_name + "</span> is playing <span id=\"channel1-game\">" + response.stream.channel.game +"</span></p>");
        $("#channel1").animate({"opacity": "1"}, 250);
        //$("#channel1-name").html(response.stream.channel.display_name);
        //$("#channel1-game").html(response.stream.channel.game);
      } else {
        $("#channel1").animate({"opacity": "0"}, 250);
      }
    }
  });
}