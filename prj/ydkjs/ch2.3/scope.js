var num = 2;
$(function() {
  console.log(one(3));
});

function one(a) {
  function two(b) {
    return b * 2;
  }
  return a + two(a + 1);
}