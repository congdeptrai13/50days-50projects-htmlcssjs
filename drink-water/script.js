const smallCups = document.querySelectorAll(".cup-small");
const liters = document.querySelector("#liters");
const remained = document.querySelector("#remained");
const percentage = document.querySelector("#percentage")
updateBigCup();
smallCups.forEach((cup, index) => {
    cup.addEventListener("click", function () {
        updateSmallCups(index);
    })
})


function updateSmallCups(index) {
    if (smallCups[index].classList.contains("full") && !smallCups[index + 1].classList.contains("full")) {
        index--;
    }
    smallCups.forEach((cup, idx) => {
        if (idx <= index) {
            cup.classList.add("full");
        } else {
            cup.classList.remove("full");
        }
    })
    updateBigCup();
}

function updateBigCup() {
    const fullfillCups = document.querySelectorAll(".cup.cup-small.full").length;

    console.log(fullfillCups);
    if (fullfillCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.innerText = "0%";
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${fullfillCups / smallCups.length * 330}px`;
        percentage.innerText = `${fullfillCups / smallCups.length * 100}%`;
    }
    if (fullfillCups === 8) {
        remained.style.visibility = "hidden";
        remained.style.height = "0";
    } else {
        remained.style.visibility = "visible";
        remained.style.height = "auto";
        liters.innerText = `${2 - 0.25 * fullfillCups}L`;
    }
}