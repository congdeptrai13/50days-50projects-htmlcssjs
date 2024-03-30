const listProgress = document.querySelectorAll(".circle");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let progressBar = document.getElementById("progress");
let value = 0;

function percentProgressBar() {
    progressBar.style.width = 33.33 * value + "%";
}

function checkBtn() {
    if (value === 0) {
        prev.setAttribute("disabled", true);
    } else {
        prev.removeAttribute("disabled");
        // next.removeAttribute("disabled");
    }
    if (value + 1 === parseInt(listProgress.length)) {
        next.setAttribute("disabled", true);
    } else {
        // prev.removeAttribute("disabled");
        next.removeAttribute("disabled");
    }
}
next.addEventListener("click", function () {
    value++;
    listProgress[value].classList.add('active')
    percentProgressBar();
    checkBtn();

})

prev.addEventListener("click", function () {
    listProgress[value].classList.remove('active')
    value--;
    percentProgressBar();
    checkBtn();

})

checkBtn();