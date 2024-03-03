const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");
const form = document.getElementById("form");

// Function to validate email
function validateEmail(email) {
  const regex = /^.{4,}@.*\..*$/;
  return regex.test(email);
}

// Function to validate password
function validatePassword(password) {
  const regex = /^.{9,}$/;
  return regex.test(password);
}

// Update UI for email validation
function updateEmailUI(isValid) {
  if (isValid) {
    emailError.textContent = '';
    emailInput.classList.remove('errorInput');
  } else {
    emailError.textContent = 'Make sure email is more than 3 characters and has @ and a .';
    emailInput.classList.add('errorInput');
  }
}

// Update UI for password validation
function updatePasswordUI(isValid) {
  if (isValid) {
    passwordError.textContent = '';
    passwordInput.classList.remove('errorInput');
  } else {
    passwordError.textContent = 'Make sure password is more than 8 characters.';
    passwordInput.classList.add('errorInput');
  }
}

// Email input event listener for validation
emailInput.addEventListener("input", () => {
  const isValid = validateEmail(emailInput.value);
  updateEmailUI(isValid);
  checkFormValidity();
});

// Password input event listener for validation
passwordInput.addEventListener("input", () => {
  const isValid = validatePassword(passwordInput.value);
  updatePasswordUI(isValid);
  checkFormValidity();
});

// Check overall form validity and update UI accordingly
function checkFormValidity() {
  if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
    successMessage.textContent = 'All good to go!';
  } else {
    successMessage.textContent = '';
  }
}

// Form submission event listener
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
    const confirmStatus = confirm("Are you sure you want to proceed?");
    if (confirmStatus) {
      alert("Successful signup!");
      form.reset();
      successMessage.textContent = '';
    } else {
      emailInput.value = '';
      passwordInput.value = '';
      updateEmailUI(false);
      updatePasswordUI(false);
      successMessage.textContent = '';
    }
  }
});
