const textEle = document.querySelector('.text');

const speedEle = document.querySelector('#speed');

const text = "we are programming!!!"
let index = 1;
let speed = 300 / speedEle.value;

showText();

function showText() {
    console.log(speed);
    textEle.innerHTML = text.slice(0, index);
    index++;
    if (index > text.length) {
        index = 1;
    }

    setTimeout(() => showText(), speed);
}

speedEle.addEventListener("input", () => speed = 300 / speedEle.value);



