const ratings = document.querySelectorAll(".rating");
const submit = document.querySelector(".submit");

const ratingSection = document.querySelector(".rating-section");
const thankSection = document.querySelector(".thank-section");

const paragraph = document.querySelector("#paragraph");

let selectedRating = null;


ratings.forEach(function(rating) {

    rating.addEventListener("click", function() {

        ratings.forEach(function(button) {
            button.classList.remove("selected");
        });

        rating.classList.add("selected");

        selectedRating = rating.textContent;

    });

});


submit.addEventListener("click", function() {

    if (selectedRating === null) {
        return;
    }

    paragraph.textContent = `You selected ${selectedRating} out of 5`;

    ratingSection.style.display = "none";

    thankSection.style.display = "flex";

});