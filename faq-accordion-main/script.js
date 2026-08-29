const buttons = document.getElementsByClassName("plus-img");
const minusButtons = document.getElementsByClassName("minus-img");

for (let button of buttons) {
  button.addEventListener("click", displayAnswer);
}

for (let button of minusButtons) {
  button.addEventListener("click", hideAnswer);
}

function displayAnswer(event) {
  const faqItem = event.target.closest(".faq-item");
  const answer = faqItem.querySelector(".answer");
  const plusIcon = faqItem.querySelector(".plus-img");
  const minusIcon = faqItem.querySelector(".minus-img");

  answer.style.display = "block";
  plusIcon.style.display = "none";
  minusIcon.style.display = "block";
}

function hideAnswer(event) {
  const faqItem = event.target.closest(".faq-item");
  const answer = faqItem.querySelector(".answer");
  const plusIcon = faqItem.querySelector(".plus-img");
  const minusIcon = faqItem.querySelector(".minus-img");

  answer.style.display = "none";
  plusIcon.style.display = "block";
  minusIcon.style.display = "none";
}