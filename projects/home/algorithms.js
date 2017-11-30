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