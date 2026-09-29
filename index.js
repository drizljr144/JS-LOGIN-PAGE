  //the array
let FirstNameArray = [];
let LastNameArray = [];
let UsernameArray = [];
let PasswordArray = [];

function loadArrays() {
  FirstNameArray = JSON.parse(localStorage.getItem("FirstNameArray")) || [];
  LastNameArray = JSON.parse(localStorage.getItem("LastNameArray")) || [];
  UsernameArray = JSON.parse(localStorage.getItem("UsernameArray")) || [];
  PasswordArray = JSON.parse(localStorage.getItem("PasswordArray")) || [];
}

function saveArrays() {
  localStorage.setItem("FirstNameArray", JSON.stringify(FirstNameArray));
  localStorage.setItem("LastNameArray", JSON.stringify(LastNameArray));
  localStorage.setItem("UsernameArray", JSON.stringify(UsernameArray));
  localStorage.setItem("PasswordArray", JSON.stringify(PasswordArray));
}

loadArrays();

function RedirectFacebook() {
  loadArrays();

  const Username = document.getElementById("Username").value.trim();
  const Password = document.getElementById("Password").value;

  const index = UsernameArray.indexOf(Username);

  if (index === -1) {
    alert("Username does not match our records!");
    document.getElementById("Username").value = "";
    return;
  }

  if (PasswordArray[index] !== Password) {
    alert("Password is incorrect!");
    document.getElementById("Password").value = "";
    return;
  }

  window.location.href = "forgot.html";
}

function SignUp() {
  //DECLARING VARIBALES 
    const Fname = document.getElementById("Firstname").value.trim();
    const Lname = document.getElementById("Lastname").value.trim();
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const sex = document.getElementById("type").value;
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

     // CHECK FOR DUPLICATE USERNAME
  if (UsernameArray.includes(username)) {
    alert("That username is already taken. Please choose another.");
    document.getElementById("username").value = "";
    return;
  }

  //PUSH TO RESPECTIVE ARRAYS
    FirstNameArray.push(Fname);
    LastNameArray.push(Lname);
    UsernameArray.push(username);
    PasswordArray.push(password);

    saveArrays();
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

