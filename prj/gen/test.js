// YIELD
document.addEventListener("DOMContentLoaded", function() {
  // ITERATOR
  let it = foo();
  let x = it.next().value;
  let y = it.next(7).value;
  console.log(`${x} ${y} ${it.next().value}`);
  
  var it2 = step(foo);
  it2();
  console.log(it2());
  
  gimmeSomething(); //this returns an unexecuted function
  console.log(gimmeSomething()); //this returns and executes the function, but only if the function assigned to it is IIFE
  
  var ar = [1, 2, 3, 4, 5];
  var arIt = ar[Symbol.iterator]();
  console.log(arIt.next().value);
  console.log(arIt.next().value);
});

// GENERATOR
function *foo() {
  var a = yield "hi";
  var b = yield "bye";
  var c = 8;
  return a * c;
}

// ITERATOR HELPER
function step(gen) {
  var it = gen();
  var last; //keep it in this scope
  
  return function () {
    last = it.next(last).value;
    return last;
  };
}

var gimmeSomething = (function() {
  var nextVal;
  
  return function() {
    if (nextVal === undefined) {
      nextVal = 1;
    }
    else {
      nextVal = (3 * nextVal) + 6;
    }
    return nextVal;
  };
})();
