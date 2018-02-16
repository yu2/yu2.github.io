document.addEventListener("DOMContentLoaded", function(e) {
  var submitButtons = document.getElementsByClassName("submit-button");
  console.log(submitButtons);
  console.log(submitButtons[0]);
  
  /*
  for (let i = 0; i <submitButtons.length; i++) {
    submitButtons[i].addEventListener("click", changeMessage(e));
  }
  */
  submitButtons[0].addEventListener("click", function(e) {
    console.log(e.target);
  });
  
  function changeMessage(e) {
    console.log(e.target);
  }
});
