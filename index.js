function RedirectFacebook() {
  // Get values from input fields
  let Username = document.getElementById("Username").value;
  // let Lname = document.getElementById("Lname").value;
  let Password = document.getElementById("Password").value;
  // let ConfirmPassword = document.getElementById("ConfirmPassword").value;

  // Flags to track verification
  let Verified = false;
  let NameCheck = false;
  let PasswordCheck = false;


  // Hardcoded user object for validation
  let User1 = {
    Username: 'samuelazuh14@gmail.com',
    Password: '#2507DRiz_26!'
  };

  // ✅ Check if first and last name match
  if (Username === User1.Username) {
    NameCheck = true;
  } else {
    NameCheck = false;
    alert("Username does not match our records!");
    document.getElementById("Username").value = "";
  }

  // ✅ Check if password matches stored password
  if (Password === User1.Password) {
    PasswordCheck = true;
  } else {
    PasswordCheck = false;
    alert("Password is incorrect!");
    // Clear the password field so user can re‑enter
    document.getElementById("Password").value = "";
  }

  // ✅ Final verification: all checks must be true
  if (NameCheck && PasswordCheck) {
    Verified = true;
  } else {
    Verified = false;
  }

  // Redirect based on verification result
  let TargetUrl = "signup.html";       // Success page

  if (Verified) {
    window.location.href = TargetUrl;
  } else {
  }
}
// function ForgotPassword (){
//   let ForgotUrl = "forgot.html"
//   window.location.href = ForgotUrl;
// }