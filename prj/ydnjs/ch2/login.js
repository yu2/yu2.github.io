document.addEventListener("DOMContentLoaded", function(e) {
  var submitButtons = document.getElementsByClassName("submit-button");
  console.log(submitButtons);
  console.log(submitButtons[0]);
  console.log(e);
  
  /*
  for (let i = 0; i <submitButtons.length; i++) {
    submitButtons[i].addEventListener("click", changeMessage(e));
  }
  */
  submitButtons[0].addEventListener("click", changeMessage);
  
  function changeMessage(e) {
    console.log(e.target);
    document.getElementsByClassName("message-display")[0].innerHTML = "Please Log In";
  }
});
