const form = document.getElementById("form");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

function showError(input, message) {
 const inputGroup = input.closest(".input-group");

  inputGroup.classList.add("error");

  const errorMessage = inputGroup.querySelector(".error-message");

  errorMessage.textContent = message;
}

function removeError(input) {
  const inputGroup = input.closest(".input-group");

  inputGroup.classList.remove("error");
}

function isValidEmail(emailValue) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
}

function checkRequired(input, message) {
  if (input.value.trim() === "") {
    showError(input, message);
    return false;
  }

  removeError(input);
  return true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let valid = true;

  if (firstName.value.trim() === "") {
    showError(firstName, "First Name cannot be empty");
    valid = false;
  } else {
    removeError(firstName);
  }

  if (lastName.value.trim() === "") {
    showError(lastName, "Last Name cannot be empty");
    valid = false;
  } else {
    removeError(lastName);
  }

  if (email.value.trim() === "") {
    showError(email, "Email cannot be empty");
    valid = false;
  } else if (!isValidEmail(email.value.trim())) {
    showError(email, "Looks like this is not an email");
    valid = false;
  } else {
    removeError(email);
  }

  if (password.value.trim() === "") {
    showError(password, "Password cannot be empty");
    valid = false;
  } else {
    removeError(password);
  }

  if (valid) {
    form.reset();

    alert("Your free trial has been successfully claimed!");
  }
});



firstName.addEventListener("input", function () {
  if (firstName.value.trim() !== "") {
    removeError(firstName);
  }
});

lastName.addEventListener("input", function () {
  if (lastName.value.trim() !== "") {
    removeError(lastName);
  }
});

email.addEventListener("input", function () {
  if (
    email.value.trim() !== "" &&
    isValidEmail(email.value.trim())
  ) {
    removeError(email);
  }
});

password.addEventListener("input", function () {
  if (password.value.trim() !== "") {
    removeError(password);
  }
});