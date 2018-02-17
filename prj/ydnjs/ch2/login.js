document.addEventListener("DOMContentLoaded", function(event) {
  var submitButtons = document.getElementsByClassName("submit-button");

  for (let i = 0; i <submitButtons.length; i++) {
    submitButtons[i].addEventListener("click", changeMessage);
  }
  
  function changeMessage(e) {
    var statusMessage = document.getElementsByClassName("message-display")[0];
    if(e.target.id == "signup-submit") {
      statusMessage.innerHTML = "Please Log In";
    } else if (e.target.id == "login-submit") {
      statusMessage.innerHTML = "Login successful!";
    }
  }
});
