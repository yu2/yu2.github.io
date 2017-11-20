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
      if (i % j == 0) {
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
