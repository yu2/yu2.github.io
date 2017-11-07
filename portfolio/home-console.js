$(function() {
  console.log("hi");
  console.log("bye");
  console.log("see you");
  console.log("later");
});

var realConsoleLog = console.log;
    console.log = function () {
    var message = [].join.call(arguments, " ");
    $(".console-area").append("<p>" + message + "</p>");
    realConsoleLog.apply(console, arguments);
    };
