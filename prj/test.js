// YIELD
document.addEventListener("DOMContentLoaded", function() {
  // ITERATOR
  let it = foo();
  let x = it.next().value;
  let y = it.next(7).value;
  console.log(`${x} ${y} ${it.next().value}`);
});

// GENERATOR
function *foo() {
  var a = yield "hi";
  var b = yield "bye";
  var c = 8;
  return a * c;
}