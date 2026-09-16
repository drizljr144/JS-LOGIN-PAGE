 function RedirectFacebook() {
      let Fname = document.getElementById("Fname").value;
      let Lname = document.getElementById("Lname").value;
      let Password = document.getElementById("Password").value;
      let ConfirmPassword = document.getElementById("ConfirmPassword").value;

      let Verified = false;

      let User1 = {
        FirstName: 'Samuel',
        LastName: 'Azuh',
        Password: '123456'
      };

      if (Fname === User1.FirstName && Lname === User1.LastName && Password === User1.Password && ConfirmPassword === User1.Password) {
        Verified = true;
      } else {
        Verified = false;
      }

      let TargetUrl = "signup.html";
      let FailedUrl = "https://www.bing.com";

      if (Verified === true) {
        window.location.href = TargetUrl;
      } else {
        window.location.href = FailedUrl;
      }
    }