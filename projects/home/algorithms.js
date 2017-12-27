//*** CODE REPOSITORY FOR ALGORITHMS ***//

// Sorted Union
// Takes two or more arrays and returns new array with unique values in the order of the original provided arrays.
function uniteUnique(arr) {
  var arr2 = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      if (arr2.indexOf(arguments[i][j]) == -1) {
        arr2.push(arguments[i][j]);
      }
    }
  }
  return arr2;
}

// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {

  var amp = /&/g;
  var lt = /</g;
  var gt = />/g;
  var quot = /"/g;
  var apos = /'/g;

  str = str.replace(amp, "&amp;");
  str = str.replace(lt, "&lt;");
  str = str.replace(gt, "&gt;");
  str = str.replace(quot, "&quot;");
  str = str.replace(apos, "&apos;");
  
  return str;
}

// Spinal Tap Case
// Convert a string to spinal case (all-lowercase-words-joined-by-dashes).
function spinalCase(str) {
  
  var re = /[^a-zA-Z]/g;
  var re_cap = /[a-z][A-Z]/;
  var re_cap_g = /[a-z](?=[A-Z])/g;
  
  var new_str = str;
  
  if (re_cap_g.test(new_str) === true) {
    for (var i = 0; i < str.match(re_cap_g).length; i++) {
      var cap_match = new_str.match(re_cap);
      new_str = new_str.replace(cap_match[0], cap_match[0].charAt(0) + " " + cap_match[0].charAt(1));
    }
  }
  
  new_str = new_str.toLowerCase();
  new_str = new_str.replace(re, "-");
  
  return new_str;
}

// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
function sumFibs(num) {
  var fib_nums = [1, 1];
  var fib = 1;
  var fib2 = 1;
  
  loop: while (fib2 <= num) {
    fib = fib + fib2;
    if (fib > num) {
      break loop;
    } else if (fib == num) {
      fib_nums.push(fib);
      break loop;
    }
    fib_nums.push(fib);
    
    fib2 = fib2 + fib;
    if (fib2 > num) {
      break loop;
    } else if (fib2 == num) {
      fib_nums.push(fib2);
      break loop;
    }
    fib_nums.push(fib2);
  }
  
  var result = fib_nums.reduce(function(accumulator, currentValue) {
    if (currentValue % 2 === 0) {
      currentValue = 0;
    }
    return accumulator + currentValue;
  });
  return result;
}

// Sum All Primes
// Sum all the prime numbers up to and including the provided number.
function sumPrimes(num) {
  var primes = [];
  loop: for (var i = 2; i <= num; i++) { // 1 is not a prime
    loop2: for (var j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
      continue loop;
      }
    }
    primes.push(i);
  }
  num = primes.reduce(function(sum, val) {
    return sum + val;
  });
  return num;
}

// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
function smallestCommons(arr) {
  arr = arr.sort(function(a, b) {
    return a-b;
  });
  var max = arr[1];
  var range = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }
  
  var cont = true;
  var multiplier = 1;
  
  loop: while (cont) {
    for (var j = range.length - 1; j >= 0; j--) {
      if (max * multiplier % range[j] !== 0) {
        multiplier++;
        continue loop;
      }
    }
    break loop;
  }
  return max * multiplier;
}

// Finders Keepers
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
function findElement(arr, func) {
  var num = 0;
  
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      num = arr[i];
      return num;
    }
  }
  return undefined;
}

// Drop It
// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
function dropElements(arr, func) {
  while (func(arr[0]) === false) {
    arr.shift();
  }
  return arr;
}

// Binary Addition
// Adds two numbers together and returns their sum in binary.
function addBinary(a,b) {
var sum = a + b;
  var exp = 0;
  var binary = "1";
  
  // Find place of leftmost digit.
  while (Math.pow(2, exp) < sum) {
    if (Math.pow(2, exp + 1) > sum) {
      break;
    }
    exp++;
  }
  
  sum = sum - Math.pow(2, exp);
  exp--;
  
  while (exp >= -1) {
    // If sum has already been reached, fill remaining digits with 0.
    if (sum === 0) {
      return zero_rest(binary, exp + 1);
    }
    
    // Fill remaining digits with 0s if sum has been reached.
    if (Math.pow(2, exp) == sum) {
      binary += "1";
      return zero_rest(binary, exp);
    }
    
    // If result of exponent is less than sum, fill 1 and subtract number from sum.
    else if (Math.pow(2, exp) < sum) {
      binary += "1";
      sum = sum - Math.pow(2, exp);
      exp--;
    }
    
    // If result of exponent is greater than sum, fill 0.
    else if (Math.pow(2, exp) > sum) {
      binary += "0";
      exp--;
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

// Find Balance (7th kyu)
// Return index of array, where members to the left of the index are equal to the average of the right members when rounded to the nearest integer.
function findBalance(arr){
  var res = [];
  for (var center = 1; center < arr.length - 1; center++) {
    var left = arr.slice(0, center);
    tt("left " + left);
    var right = arr.slice(center + 1, arr.length);
    tt("right " + right);
    var left_avg = Math.round(left.reduce((sum, val) => sum + val) / left.length);
    var right_avg = Math.round(right.reduce((sum, val) => sum + val) / right.length);
    if (left_avg == right_avg) {
      res.push(center);
    }
  }
  return res;
}

// Steamroller
// Flatten a nested array.
function steamrollArray(arr) {
  var res = [];
  goDeeper(arr);
    
  function goDeeper(arr) {
    for (var a in arr) {
      if (Array.isArray(arr[a])) {
        goDeeper(arr[a]);
      } else {
      res.push(arr[a]);
      }
    }
  }
  return res;
}

// Binary Agents
// Return an English translated sentence of the passed binary string.
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
  
  var decode = "";
  for (var b in sums) {
    decode += String.fromCharCode(sums[b]);
  }
  return decode;
}

// Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
function truthCheck(collection, pre) {
  for (var a in collection) {
    if(collection[a][pre]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
function addTogether() {
  for (var i = 0; i < arguments.length; i++) {
    if (!Number.isInteger(arguments[i])) {
      return undefined;
    }
  }
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else if (arguments.length == 1) {
    var num = arguments[0];
    return function(addend) {
      return Number.isInteger(addend) ? num + addend : undefined;
    };
  }
}

// Validate US Telephone Numbers
// Return true if the passed string is a valid US phone number.
function telephoneCheck(str) {
  var re = /(1\s?)?((\(\d{3}\))|\s?\d{3}-?)\s?\d{3}[-\s]?\d{4}/g;
  return str.match(re) == str;
}

// Record Collection
// Given a JSON object representing a musical album collection, create a function that manipulates its properties.
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
function updateRecords(id, prop, value) {
  var currentRecord = collection[id];
  if (value === "") {
    delete currentRecord[prop];
  }
  else if (prop == "tracks") {
    if (currentRecord[prop] === undefined) {
      currentRecord.tracks = [];
      currentRecord.tracks.push(value);
    } else {
      currentRecord.tracks.push(value);
    }
  } else {
    currentRecord[prop] = value;
  }
  return collection;
}

// Symmetric Difference
// Takes two or more arrays and returns an array of the symmetric difference of the provided arrays.
function sym(args) {
  var arg = [...arguments];
  var red = symDiff(arg[0], arg[1]);
  
  if (arg.length > 2) {
    for (var i = 2; i < arg.length; i++) {
      red = symDiff(red, arg[i]);
    }
  }
  return red;
}

function symDiff(arr1, arr2) {
  var combined = arr1.concat(arr2);
  var filtered = combined.filter(e => !(arr1.includes(e) && arr2.includes(e)));
  var result = [];
  for (var i = 0; i < filtered.length; i++) {
    if (!result.includes(filtered[i])) {
      result.push(filtered[i]);
    }
  }
  return result;
}

// Exact Change
// Cash register drawer function that accepts purchase price as the first argument, payment as the second argument, and cash-in-drawer as the third argument.
function checkCashRegister(price, cash, cid) {
  var roundNum = longFloat => parseFloat(longFloat.toFixed(2));
  var cid_total = roundNum(cid.reduce((accum, current, index) => accum + parseFloat(current[1]), 0));
  var change = cash - price;
  
  if (change >= cid_total) {
    if (change == cid_total) {
      return "Closed";
    }
    return "Insufficient Funds";
  }
  
  var amounts = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
  
  amount_left = true;
  var paid = [];
  
  for (var i = 8; i >= 0; i--) {
    if (change >= amounts[i]) {
      var units = 0;
      
      while (change >= amounts[i] && cid[i][1] >= amounts[i]) {
        change = roundNum(change - amounts[i]);
        cid[i][1] = roundNum(cid[i][1] - amounts[i]);
        units++;
      }
      paid.push([cid[i][0], amounts[i]*units]);
    }
  }
  
  if (change !== 0) {
    return "Insufficient Funds";
  }
  
  return paid;
}

// Inventory Update
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
function updateInventory(arr1, arr2) {
  var curInv = toJSON(arr1);
  var newInv = toJSON(arr2);
  
  for (var i = 0; i < arr2.length; i++) {
    var curItem = arr2[i][1];
    var curQuantity = arr2[i][0];
    if (curInv[curItem] !== undefined) {
      curInv[curItem] += curQuantity;
    } else {
      curInv[curItem] = curQuantity;
    }
  }
  
  var curArray = toArray(curInv);
  
  curArray = curArray.sort(function(a, b) {
    if (a[1] < b[1]) {
      return -1;
    }
    if (a[1] > b[1]) {
      return 1;
    }
  });
  
  //tt(curArray);
  return curArray;
}

function toJSON(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
      obj[arr[i][1]] = arr[i][0];
  }
  return obj;
}

function toArray(json) {
  var arr = [];
  for (var i in json) {
    if (json.hasOwnProperty(i)) {
      arr.push([json[i], i]);
    }
  }
  return arr;
}

// No Repeats Please
// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
function permAlone(str) {
  // 012, 021, 102, 120, 201, 210
  // total permutations = n * (n-1) * (n-2) * ... 1
  // subtract permutations with consecutive repeating characters - how many?
  // given 012, 021, 102, 120, 201, 210
  // get rid of all containing 01 or 10
  // 021, 120
  // given 0123456
  // total permutations = 5040
  // if 0 and 1 refer to the same chars; 2 and 3 refer to the same chars
  // get rid of all permutations containing 01, 10, 23, 32
  // number to remove for character that occurs more than once:
  // (number of times it occurs)!
  // (number of chars in string)! - (number of repetitions of a repeating char)! - ...
  
  // treat repeating sequence as one unit
  
  // use recursion and momoization to find the factorial

  var f = [];
  var factorial = function(n) {
    if (n === 1 || n === 0)
      return 1;
    if (f[n] > 0)
      return f[n];
    return f[n] = n * factorial(n - 1);
  };
  var permTot = factorial(str.length);
  //tt(permTot);
  
  strArray = str.split("");
  //tt(strArray);
  
  // find repeating characters
  var reps = [];
  var reduceArray = function(arr) {
    if (arr[0] === undefined)
      return "";
    var current = arr[0];
    var found = str.match(new RegExp(current, "g"));
    if (found.length > 1)
      reps.push(found.length);
    return reduceArray(arr.filter(a => a !== arr[0]));
  };
  
  reduceArray(strArray);
  //tt(reps);
  
  var perms = 2 * (factorial(str.length - reps[0]) * (str.length - reps[0] + 1));
  
  
  /*
  var sum = 0;
  for (let a of reps) {
    sum += pTot(a);
  }
  tt(sum);
  */
  
  //tt(perms);
  return permTot - perms;
}

//permAlone('aab');
permAlone("abcdefa");
//permAlone("abfdefa");
//permAlone("zzzzzzzz");
//permAlone("aaab");
//permAlone("aaabb");

//
//
function permAlone(str) {
  str = str.split().sort.join("");
  var perms = [];
  
  for (let j = 0; j < str.length; j++) {
    perms[j] = str.charAt(j);
  }
  
  tt(perms);
}

function generatePerms(str, used) {
  var re = new RegExp(used, "g");
  var remaining = str.replace(re, "");
  return remaining;
}

//permAlone('aab');
permAlone("abcdefa");
//permAlone("abfdefa");
//permAlone("zzzzzzzz");
//permAlone("aaab");
//permAlone("aaabb");
