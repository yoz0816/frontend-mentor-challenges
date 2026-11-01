const signupForm = document.querySelector("#signup-form");
const emailInput = document.querySelector("#email");
const formMessage = document.querySelector("#form-message");

signupForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (
        emailInput.value.trim() === "" ||
        !emailInput.validity.valid
    ) {
        formMessage.textContent =
            "Please enter a valid email address.";

        emailInput.setAttribute("aria-invalid", "true");

        emailInput.focus();

        return;
    }

    formMessage.textContent =
        "Thanks! Your email address is valid.";

    emailInput.removeAttribute("aria-invalid");
});

emailInput.addEventListener("input", function () {
    formMessage.textContent = "";

    emailInput.removeAttribute("aria-invalid");
});