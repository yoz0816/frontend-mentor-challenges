const shareBtn = document.getElementById("shareBtn");
const sharePopup = document.getElementById("sharePopup");

shareBtn.addEventListener("click", function () {
    sharePopup.classList.toggle("active");
});