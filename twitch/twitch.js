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
});

function channelInfo(channelName, boxNumber) {
  $.ajax({
    url: 'https://api.twitch.tv/kraken/streams/' + channelName,
    headers: {"Client-ID": "fcc-yu2"},
    success: function(response){
      console.log(response);
      var currentBox = "#channel" + boxNumber;
      console.log(boxNumber);
      if (response.stream !== null) {
        $(currentBox).css("background-color", "#7c7");
        $(currentBox).html("<p><span id=\"channel1-name\">" + response.stream.channel.display_name + "</span> is playing <span id=\"channel1-game\">" + response.stream.channel.game +"</span></p>");
        $(currentBox).animate({"opacity": "1"}, 250);
        //$("#channel1-name").html(response.stream.channel.display_name);
        //$("#channel1-game").html(response.stream.channel.game);
      } else {
        $(currentBox).animate({"opacity": "0"}, 250);
      }
    }
  });
}