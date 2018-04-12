var input;
var output = [];
var she = {};
var he = {};

$(function() {

});

function readInput() {
  input = $("#input").val().split("\n");
  for (let i = 0; i < input.length; i++) {
    let lineSplit = input[i].split(" ");
    let pron = lineSplit[0];
    lineSplit.shift();
    populatePronouns(pron, lineSplit);
    for (let j = 0; j < lineSplit.length; j++) {
      populatePronouns();
      output.push(pron + " " + lineSplit[j] + "\n");
    }
  }
  
  console.log(she);
  console.log(he);
  
  for (let i = 0; i < output.length; i++) {
    $("#output").append(output[i]);
  }
  
}

// Populate a pronoun object with the actions and their count
function populatePronouns(gender, actions) {
  if (gender === "she") {
    she = indexActions(she, actions);
  } else if (gender === "he") {
    he = indexActions(he, actions);
  }
  
  // Count the number of times an action with a pronoun
  function indexActions(obj, actions) {
    for (let i = 0; i < actions.length; i++) {
      let currentAction = actions[i];
      if (obj.hasOwnProperty(currentAction)) {
        obj[currentAction]++;
      } else {
        obj[currentAction] = 1;
      }
    }
    return obj;
  }
}

function displayCounts() {
  var finalCount = she;
  
  for (let prop in finalCount) {
    if (finalCount[prop] >= 5) {
      if (he[prop] >= 5) {
        continue;
      }
    }
    delete finalCount[prop];
  }
  
  // Move to array for sorting
  let sortable = [];
  for (let prop in finalCount) {
    sortable.push([prop, finalCount[prop]]);
  }
  sortable.sort(function(a, b) {
    return b[1] - a[1];
  });
  
  for (let i = 0; i < sortable.length; i++) {
    $("#counts").append(sortable[i][0] + " " + sortable[i][1] + "\n");
  }
}