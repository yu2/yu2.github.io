$(function() {
  $('#console-input').focus();
  
  //***Testing Area***//
  //console.log("input text between the brackets");
  
function steamrollArray(arr) {
  var res = [];
  
  while (arr.length > 0) {
    if (Array.isArray(arr)) {
      if (arr[0].length == 1) {
        res.push(goDeeper(arr[0]));
      }
    }
  }
  
  
  
  arr.forEach(goDeeper);
}

function goDeeper(arr) {
  if (Array.isArray(arr)) {
    return goDeeper(arr[0]); // Return from point of entering recursion.
  } else {
    var target = arr;
    return arr;
  }
}


//tt(steamrollArray([[[[4]]]]));
tt(steamrollArray([[[1, [2], [3, [[4]]]]]]));
//tt(steamrollArray([[2], [3, [[4]]]]));
//tt(steamrollArray([[3, [[4]]]]));
  
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