const container = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
console.log(left);

left.addEventListener("mouseenter", function () {
    container.classList.toggle("hover-left");
    container.classList.remove("hover-right");
})
right.addEventListener("mouseenter", function () {
    container.classList.toggle("hover-right");
    container.classList.remove("hover-left");
})