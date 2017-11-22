$(function() {
  $('#console-input').focus();
  
  //***Testing Area***//
  //console.log("input text between the brackets");
  
  function addBinary(a,b) {
    var sum = a + b;
    var exp = 0;
    var binary = "";
    
    while (exp >= -1) {
      
      if (exp < 0) {
        tt("At E");
        exp++;
      }
      
      // A. If exp is smaller than sum, try a larger exponent.
      if (Math.pow(2, exp) < sum) {
        tt("At A");
        exp++;
      }
      
      // B. If sum is filled, fill rest of digits with 0.
      if (Math.pow(2, exp) == sum) {
        tt("At B");
        binary += "1";
        return zero_rest(binary, exp);
      }
      
      // C. If , add 0 for the place
      if (Math.pow(2, exp) - sum >= Math.pow(2, exp - 1)) {
        tt("At C");
        binary += "0";
        exp--;
      }
      
      // D. If , add 1 for the place
      if (Math.pow(2, exp) >= sum) {
        tt("At D");
        binary += "1";
        exp = exp - 2;
        sum = sum - Math.pow(2, exp + 1);
        tt("sum = " + sum);
        tt("exp = " + exp);
      }
    }
    return binary;
  }
  
  // Takes a the binary so far and the current exponent value and fills the rest of the digits with 0.
  function zero_rest(binary, index) {
    for (var i = index - 1; i >= 0; i--) {
      binary = binary + "0";
    }
    return binary;
  }
  
  //tt(zero_rest("111", 3));
  tt(addBinary(2, 8));
  
  
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