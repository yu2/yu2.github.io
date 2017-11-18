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