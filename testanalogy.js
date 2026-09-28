// Array to store users
let users = [];

// Sign up function
function signUp(email, mobile, password) {
  // Check if user already exists
  let exists = users.some(user => user.email === email || user.mobile === mobile);
  
  if (exists) {
    console.log("User already exists!");
    return false;
  }

  // Add new user
  users.push({ email, mobile, password });
  console.log("Sign up successful!");
  return true;
}

// Login function
function login(identifier, password) {
  // identifier can be email or mobile
  let user = users.find(user => 
    (user.email === identifier || user.mobile === identifier) && user.password === password
  );

  if (user) {
    console.log("Login successful!");
    return true;
  } else {
    console.log("Invalid credentials.");
    return false;
  }
}

// Example usage
signUp("test@example.com", "08012345678", "mypassword");
login("08012345678", "mypassword"); // ✅ Login successful
