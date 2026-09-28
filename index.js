  //the array
  let FirstNameArray = [];
  let LastNameArray = [];
  let UsernameArray = [];
  let PasswordArray = [];


function RedirectFacebook() {
  // Get values from input fields
  let Username = document.getElementById("Username").value;
  let Password = document.getElementById("Password").value;

  // Flags to track verification
  let Verified = false;
  let UserNameCheck = false;
  let PasswordCheck = false;

  const isUsernamePresent = UsernameArray.includes(Username);
  const isPasswordPresent = PasswordArray.includes(Password);

  // Check if username match
  if (isUsernamePresent) {
    UserNameCheck = true;
  } else {
    NameCheck = false;
    alert("Username does not match our records!");
    document.getElementById("Username").value = "";
  }

  //Check if password matches stored password
  if (isPasswordPresent) {
    PasswordCheck = true;
  } else {
    PasswordCheck = false;
    alert("Password is incorrect!");
    // Clear the password field so user can re‑enter
    document.getElementById("Password").value = "";
  }

  // Final verification: all checks must be true
  if (UserNameCheck && PasswordCheck) {
    Verified = true;
  } else {
    Verified = false;
  }

  // Redirect based on verification result
  let TargetUrl = "https://www.facebook.com";

  if (Verified) {
    window.location.href = TargetUrl;
  } else {
  }
}

function SignUp() {
  //DECLARING VARIBALES 
    const Fname = document.getElementById("Firstname").value;
    const Lname = document.getElementById("Lastname").value;
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const sex = document.getElementById("type").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  //PUSH TO RESPECTIVE ARRAYS
    FirstNameArray.push(Fname);
    LastNameArray.push(Lname);
    UsernameArray.push(username);
    PasswordArray.push(password);
  //CHECK IF SUCCESSFULLY PUSHED
    //GIVE IMAGINARY VALUES TO VARIABLES TO CHECK IF THE ARRAYS HAVE THEM 
    const isFnamePresent = FirstNameArray.includes(Fname);
    const isLnamePresent = LastNameArray.includes(Lname);
    const isUsernamePresent = UsernameArray.includes(username);
    const isPasswordPresent = PasswordArray.includes(password);
    let isPresent;
    //CONFIRM ALL CHECKS ARE TRUE
    if (isFnamePresent && isLnamePresent && isPasswordPresent && isUsernamePresent) {
      isPresent = true;
    }
    //SEND TO A PAGE IF TRUE
    if (isPresent) {
        targeturl = "login.html"
        window.location.href = targeturl;
    }

    
}

