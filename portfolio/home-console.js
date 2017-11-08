$(function() {
  console.log("hi");
  console.log("bye");
  console.log("see you");
  console.log("later");
  displayMessages();
});

var realConsoleLog = console.log;
    console.log = function () {
    var message = [].join.call(arguments, " ");
    $(".console-area").append('<p class="console-msg">' + message + '</p>');
    realConsoleLog.apply(console, arguments);
    };

function displayMessages() {
  var msgs = document.getElementsByClassName('console-msg');
  $(msgs[0]).show(100, function() {
    $(this).next().show(100, arguments.callee); //show is in the events cue
  });

}