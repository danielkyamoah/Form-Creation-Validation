document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    
    const feedbackDiv = document.getElementById("form-feedback");
  // All your JavaScript logic goes here
    // retrieving user input
  const username = usernameInput.value.input.trim()
  const email = emailInput.value.input.trim()
  const password = userInput.value.input.trim()

  let isValid = true
  const messages = []

  if (username > 3 ) {
    isValid = false
    messages.push("Username is valid");
  }

});
