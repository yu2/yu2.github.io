$(function() {
  $('#console-input').focus();
  
  //***Testing Area***//
  //console.log("input text between the brackets");

function binaryAgent(str) {
  str = str.split(" ");
  var sums = [];
  for (var a in str) {
    var sum = 0;
    var length = str[a].length;
    var exp = length - 1;
    for (var i = 0; i < length; i++) {
      sum += parseInt(str[a].charAt(i)) * Math.pow(2, exp);
      exp--;
    }
    sums.push(sum);
    
  
  }
  return str;
}

tt(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
 
//tt(parseInt("1"));
 
//tt(String.fromCharCode(64));
 
 
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