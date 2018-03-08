var num = 2;
$(function() {
  
  console.log(one(3));
});

function one(a) {
    return a + two(a + 1);
    function two(b) {
      return b * 2;
    }
  }