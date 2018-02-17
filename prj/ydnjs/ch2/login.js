document.addEventListener("DOMContentLoaded", function(event) {
  var submitButtons = document.getElementsByClassName("submit-button");

  for (let i = 0; i <submitButtons.length; i++) {
    submitButtons[i].addEventListener("click", changeMessage);
  }
  
  var textFields = document.querySelectorAll("input[type='text']");
  console.log(textFields);
  console.log(textFields[0]);
  for (let i = 0; i < textFields.length; i++) {
    textFields[i].addEventListener("click", function(e) {
      console.log(textFields[i].innerHTML);
      textFields[i].setAttribute("value", "");
    });
  }
  
  function changeMessage(e) {
    var statusMessage = document.getElementsByClassName("message-display")[0];
    if(e.target.id == "signup-submit") {
      statusMessage.innerHTML = "Please log in";
    } else if (e.target.id == "login-submit") {
      statusMessage.innerHTML = "Login successful!";
    }
  }
});
