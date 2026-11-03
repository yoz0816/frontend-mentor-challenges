const form = document.getElementById("contact-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const consent = document.getElementById("consent");
const successMessage = document.getElementById("success-message");

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}


function showError(input, errorId) {
    const formGroup = document.getElementById(errorId).parentElement;
    formGroup.classList.add("error");
}

function removeError(input, errorId) {
    const formGroup = document.getElementById(errorId).parentElement;
    formGroup.classList.remove("error");
}


function validateFirstName() {
    if (firstName.value.trim() === "") {
        showError(firstName, "first-name-error");
        return false;
    }

    removeError(firstName, "first-name-error");
    return true;
}


function validateLastName() {
    if (lastName.value.trim() === "") {
        showError(lastName, "last-name-error");
        return false;
    }

    removeError(lastName, "last-name-error");
    return true;
}


function validateEmail() {
    if (!isValidEmail(email.value.trim())) {
        showError(email, "email-error");
        return false;
    }

    removeError(email, "email-error");
    return true;
}


function validateQuery() {
    const selectedQuery = document.querySelector(
        'input[name="queryType"]:checked'
    );

    const errorGroup = document.getElementById("query-error").parentElement;

    if (!selectedQuery) {
        errorGroup.classList.add("error");
        return false;
    }

    errorGroup.classList.remove("error");
    return true;
}

function validateMessage() {
    if (message.value.trim() === "") {
        showError(message, "message-error");
        return false;
    }

    removeError(message, "message-error");
    return true;
}

function validateConsent() {
    const errorGroup = document.getElementById("consent-error").parentElement;
    if (!consent.checked) {
        errorGroup.classList.add("error");
        return false;
    }

    errorGroup.classList.remove("error");
    return true;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isQueryValid = validateQuery();
    const isMessageValid = validateMessage();
    const isConsentValid = validateConsent();

    const isFormValid =
        isFirstNameValid &&
        isLastNameValid &&
        isEmailValid &&
        isQueryValid &&
        isMessageValid &&
        isConsentValid;

    if (isFormValid) {
        successMessage.classList.add("show");

        form.reset();

        setTimeout(function () {
        successMessage.classList.remove("show");
        }, 5000);
    } else {
        successMessage.classList.remove("show");
    }
});

firstName.addEventListener("input", validateFirstName);
lastName.addEventListener("input", validateLastName);
email.addEventListener("input", validateEmail);
message.addEventListener("input", validateMessage);

document.querySelectorAll('input[name="queryType"]').forEach(function (radio) {
    radio.addEventListener("change", validateQuery);
});


consent.addEventListener("change", validateConsent);
