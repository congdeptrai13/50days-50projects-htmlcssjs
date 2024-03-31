const boxes = document.querySelectorAll(".box");

// document.addEventListener("scroll", function (event) {
//     box.classList.toggle("show");
// })

window.addEventListener("scroll", checkBoxes);
checkBoxes()
function checkBoxes() {
    const boxTop = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxCurrent = box.getBoundingClientRect();
        if (boxCurrent.top < boxTop) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    })
}