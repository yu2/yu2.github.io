document.addEventListener("DOMContentLoaded", function(event) {
  var submitButtons = document.getElementsByClassName("submit-button");

  for (let i = 0; i <submitButtons.length; i++) {
    submitButtons[i].addEventListener("click", submit);
  }
  
  var textFields = document.querySelectorAll("input[type='text']");
  for (let i = 0; i < textFields.length; i++) {
    textFields[i].addEventListener("click", resetField);
  }
  
  function resetField(e) {
    e.target.setAttribute("value", "");
  }
  
  var signupInfo = [];
  var loginInfo = [];
  var newUser;
  function submit(e) {
    var statusMessage = document.getElementsByClassName("message-display")[0];
    //statusMessage.style.opacity = "0";
    if(e.target.id == "signup-submit") {
      newUser = User();
      signupInfo[0] = document.getElementById("signup-username").value;
      signupInfo[1] = document.getElementById("signup-password").value;
      newUser.login(signupInfo[0], signupInfo[1]);
      //statusMessage.classList.add("opaque");
      statusMessage.innerHTML = "Please log in";
    } else if (e.target.id == "login-submit") {
      loginInfo[0] = document.getElementById("login-username").value;
      loginInfo[1] = document.getElementById("login-password").value;
      //statusMessage.classList.add("opaque");
      statusMessage.innerHTML = (newUser.check(loginInfo[0], loginInfo[1])) ? "Login successful! Welcome, " + loginInfo[0] + "." : "Incorrect username or password";
    }
  }
  
  function User() {
    var username;
    var password;
    
    function doLogin(user, pw) {
      username = user;
      password = pw;
    }
    
    function doCheck(user, pw) {
      return (user == username && pw == password) ? true : false;
    }
    
    var publicAPI = {
      login: doLogin,
      check: doCheck
    };
    
    return publicAPI;
  }
});
