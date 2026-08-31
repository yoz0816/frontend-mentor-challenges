const form = document.getElementById("email-form");
const email = document.getElementById("email");
const errorIcon = document.querySelector(".error-icon");
const errorMessage = document.querySelector(".error-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailValue = email.value.trim();

  if (emailValue === "" || !emailValue.includes("@")) {
    errorIcon.style.display = "block";
    errorMessage.style.display = "block";
    email.style.border = "2px solid hsl(0, 93%, 68%)";
  } else {
    errorIcon.style.display = "none";
    errorMessage.style.display = "none";
    email.style.border = "1px solid hsl(0, 36%, 70%)";

    alert("Email submitted successfully!");
  }
});