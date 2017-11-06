$(function() {
  console.log("hi");
  console.log("bye");
  console.log("see you");
});

var realConsoleLog = console.log;
    console.log = function () {
        var message = [].join.call(arguments, " ");
        // Display the message somewhere... (jQuery example)
        $(".console-area").animate({opacity: "0"}, 100, function() {
          $(".console-area").append("<p>" + message + "</p>").delay(100);
          $(".console-area").animate({opacity: "1"}, 100);
        });
        
        realConsoleLog.apply(console, arguments);
    };