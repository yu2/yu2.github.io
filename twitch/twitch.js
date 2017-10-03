var url = "https://api.twitch.tv/kraken/channels/trumpsc";

$(function() {
  channelInfo("trumpsc");
});

function channelInfo(channelName) {
  $.ajax({
    url: 'https://api.twitch.tv/kraken/streams/' + channelName,
    headers: {"Client-ID": "fcc-yu2"},
    success: function(response){
      console.log(response);
      if (response.stream.stream_type === "live") {
        $("#channel1-name").html(response.stream.channel.display_name);
        $("#channel1-game").html(response.stream.channel.game);
      }
      
    }
  });
}