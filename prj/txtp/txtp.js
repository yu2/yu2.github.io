var input;
var output = [];
var she = {};
var he = {};
var sheTotal = 0;
var heTotal = 0;
var totalVerbCount = 0;

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
  
  for (let i = 0; i < output.length; i++) {
    printResults("#output", output[i]);
  }
  
  displayCounts();
}

// Populate a pronoun object with the actions and their count
function populatePronouns(gender, actions) {
  if (gender === "she") {
    she = indexActions(she, actions);
  } else if (gender === "he") {
    he = indexActions(he, actions);
  }
  
  // Count the number of times an action occurs with a pronoun
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

// Displays the number of times each action occurs
function displayCounts() {
  var finalCount = Object.assign({}, she);
  // Find verbs that occur in both she and he more than five times
  for (let prop in finalCount) {
    if (finalCount[prop] >= 5) {
      if (he[prop] >= 5) {
        continue;
      }
    }
    delete finalCount[prop];
  }
  
  // Count totals
  for (let prop in she) {
    sheTotal += she[prop];
  }
  for (let prop in he) {
    heTotal += he[prop];
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
    printResults("#counts", sortable[i][0] + " " + sortable[i][1] + "\n");
  }
  
  compareObj(sortable, she, he);
  countVerbTotal();
}

function compareObj(arr, obj1, obj2) {
  for (let i = 0; i < arr.length; i++) {
    let currentVerb = arr[i][0];
    let sheCount = obj1[currentVerb];
    let heCount = obj2[currentVerb];
    printResults("#statistics", currentVerb + ": " + tpz(sheCount, sheTotal, heCount, heTotal) + "\n");
  }
}

function printResults(target, content) {
  $(target).append(content);
}

// Two Proportion Z-Test
function tpz(s1, n1, s2, n2) {
  let p1 = s1 / n1;
  let p2 = s2 / n2;
  let p = (s1 + s2)/(n1 + n2); // pooled sample proportion
  let se = Math.sqrt(p * (1 - p) * (1/n1 + 1/n2)); // standard error
  let z = (p1 - p2) / se; // z test statistic
  return z;
}

function countVerbTotal() {
  var heCopy = Object.assign({}, he);
  for (let prop in she) {
    totalVerbCount++;
    if (heCopy.hasOwnProperty(prop)) {
      delete heCopy[prop];
    }
  }

  for (let prop in heCopy) {
    totalVerbCount++;
  }
  console.log(totalVerbCount);
}