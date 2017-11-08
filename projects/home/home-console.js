$(function() {
  //***Testing area***//
  console.log("input text between the brackets");
  
  //***//
  $('#console-input').keydown(function(key) {
    if (key.keyCode == 13) {
      key.preventDefault();
      console.log($('#console-input').text());
      displayMessages();
    }
  });
  displayMessages();
});

var realConsoleLog = console.log;
    console.log = function () {
    var message = [].join.call(arguments, " ");
    $(".console-area").append('<p class="console-msg">> ' + message + '</p>');
    realConsoleLog.apply(console, arguments);
    };

function displayMessages() {
  var msgs = document.getElementsByClassName('console-msg');
  $(msgs[0]).show(100, function() {
    $(this).next().show(100, arguments.callee); //show is in the events cue
  });

}