function validateForm() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Simple validation for demonstration purposes
  if (!username || !email || !password) {
    alert("All fields are required!");
    return false;
  }

  // Add additional validation logic here if needed

  return true;
}
