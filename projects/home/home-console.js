$(function() {
  $('#console-input').focus();
  
  //***Testing Area***//
  //console.log("input text between the brackets");

function sym(args) {
  var arg = [...arguments];
  var red = [];
  
  for (var i = 0; i < arg.length - 1; i++) {
    var result = symDiff(arg[i], arg[i+1]);
    tt(result);
    red.concat(symDiff(arg[i], arg[i+1]));
  }
  
  return red;
}

function symDiff(arr1, arr2) {
  var combined = arr1.concat(arr2);
  tt("combined: " + combined.filter(e => !(arr1.includes(e) && arr2.includes(e))));
  return combined.filter(e => !(arr1.includes(e) && arr2.includes(e)));
}

tt(sym([1, 2, 3], [5, 2, 1, 4]));
//tt(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
  /*
  function goDeeper(arr1, arr2) {
    return red.concat(goDeeper(arr1.filter(function(val, index, array) {
        return index != array.length - 1;
      }), arr1[arr1.length - 1]));
  }
  return red;
}

    if (arr1.length !== 1) {
      symDiff(arr1.filter(function(val, index, array) {
        return index != array.length - 1;
      }), arr1[arr1.length - 1]);
    } else {
      for (var i = 0; i < arg.length; i++) {
        if(arr2.includes(arr1[i]) === false) {
          red.push(arr1[i]);
        }
      }
      
      symDiff(arr1, last);
    }
    
  }

  function goDeeper(array) {
    if (array.length == 1) {
      return array;
    }
    return red.concat(symDiff(array.pop(), goDeeper(array)));
  }

  return red;
  
  function takeOut(val, index, arr) {
    return index !== i;
  }
  
  for (var i = 0; i < arg.length; i++) {
    var current_arg = arg[i];
    tt("current_arg = " + current_arg);
    var leftover = arg.filter(takeOut);
    tt("leftover = " + leftover);
    check_current: for (var j = 0; j < current_arg.length; j++) {
      check_leftover: for (var k = 0; k < leftover.length; k++) {
        if (leftover[k].includes(current_arg[j])) {
          tt(current_arg[j]);
          continue check_current;
        }
      }
      red.push(current_arg[j]);
    }
  }
  */



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