document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

   const usernameInput = document.getElementById("username");
    const username = usernameInput.value.trim();

    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    const passwordInput = document.getElementById("password");
    const password = passwordInput.value.trim();

    let isValid = true;
    const messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long");
    } else {
      messages.push("Username looks good!");
    }

    if (!email.includes("@")) {
      isValid = false;
      messages.push("Email must be valid");
    } else {
      messages.push("Email looks good!");
    }

    if (password.length < 6) {
      isValid = false;
      messages.push("Password must be at least 6 characters long");
    } else {
      messages.push("Password looks good!");
    }

    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
  }

  });

});
