$(function() {
  console.log("hi");
  console.log("bye");
  console.log("see you");
});

var realConsoleLog = console.log;
    console.log = function () {
        var message = [].join.call(arguments, " ");
        // Display message
        $(".console-area").append("<p>" + message + "</p>");
        //$(".console-area p:last-child").animate({opacity: "1"}, 500);
        $.when(test()).done(function() {
          realConsoleLog.apply(console, arguments);
        });
        //realConsoleLog.apply(console, arguments);
    };
    
    
function test() {
  setTimeout (function() {
    $(".console-area p:last-child").animate({opacity: "1"}, 500);
  }, 500);
  
  
}