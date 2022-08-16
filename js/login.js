"use strict";
// Get Elements
const loginButton = document.getElementById("btn-login");
const emailField = document.getElementById("user-email");
const passwordField = document.getElementById("user-password");
// Event Listener
loginButton.addEventListener("click", function () {
  const emailTyped = emailField.value;
  console.log(emailTyped);
  const passwordTyped = passwordField.value;
  console.log(passwordTyped);
  // Danger: Do not varify email password on the client site like this. This is only for learning purpose. We usually send it to the server site.
  if (
    emailTyped.toLowerCase() === "personal@bank.com" &&
    passwordTyped === "getMoney"
  ) {
    window.location.href = "bank-calculation.html";
  } else {
    alert("Invalid user");
  }
});
