var currentDate = new Date().toISOString().split("T")[0];
document.getElementById("dob").max = currentDate;

var email = document.getElementById("email");
email.addEventListener("input", function(event) {
  var email = event.target.value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var isValid = emailRegex.test(email);
  if (isValid) {
    email.setCustomValidity("");
  } else {
    email.setCustomValidity("Invalid email address");
  }
});

var fb = document.getElementById("fb");
fb.addEventListener("input", function(event) {
  var fbUrl = event.target.value;
  var fbUrlRegex = /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9(\.\?)?]/;
  var isValid = fbUrlRegex.test(fbUrl);
  if (isValid) {
    fb.setCustomValidity("");
  } else {
    fb.setCustomValidity("Invalid Facebook URL");
  }
});

var pas= document.getElementById("password");
pas.addEventListener("input", function(event) {
  var password = event.target.value;
  var Regex = /^(?=.*[A-Z]).{8,}$/;
  var isValid = Regex.test(password);
  if (isValid) {
    pas.setCustomValidity("");
  } else {
    pas.setCustomValidity("Password must have at least 8 characters long,contain at least one uppercase letter");
  }
});

var pas = document.getElementById("password");
var con= document.getElementById("confirmpass");
con.addEventListener("input", function(event) {
  var password = pas.value;
  var confirmPass = event.target.value;

  if (confirmPass === password) {
    con.setCustomValidity("");
  } else {
    con.setCustomValidity("Passwords are not same");
  }
});