const showNav = document.querySelector(".container");
const btnOpen = document.getElementById("open");
const btnClose = document.getElementById("close");
btnOpen.addEventListener("click", function () {
    showNav.classList.add("show-nav");
});
btnClose.addEventListener("click", function () {
    showNav.classList.remove("show-nav");
});