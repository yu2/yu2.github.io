var input;
var output = [];

$(function() {
  
});

function readInput() {
  input = $("#input").val().split("\n");
  for (let i = 0; i < input.length; i++) {
    let lineSplit = input[i].split(" ");
    let pron = lineSplit[0];
    lineSplit.shift();
    for (let j = 0; j < lineSplit.length; j++) {
      output.push(pron + " " + lineSplit[j] + "\n");
    }
  }
  
  for (let i = 0; i < output.length; i++) {
    $("#output").append(output[i]);
  }
  
}

/*
Array.forEach(function(val, index, arr) {
  
});

*/