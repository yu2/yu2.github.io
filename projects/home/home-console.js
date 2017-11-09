$(function() {
  $('#console-input').focus();
  
  //***Testing Area***//
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

// display in JSON format
function tt(arg) {
  $(".console-area").append('<p class="console-msg">> ' + JSON.stringify(arg) + '</p>');
}

function displayMessages() {
  var msgs = document.getElementsByClassName('console-msg');
  $(msgs[0]).show(100, function() {
    $('.console-bg').scrollTop($('.console-bg')[0].scrollHeight);
    $(this).next().show(100, arguments.callee); //show is in the events cue
    
  });
}