$(function() {
  
});

var realConsoleLog = console.log;
    console.log = function () {
        var message = [].join.call(arguments, " ");
        // Display the message somewhere... (jQuery example)
        $(".console-area").append(message + "<br>");
        realConsoleLog.apply(console, arguments);
    };