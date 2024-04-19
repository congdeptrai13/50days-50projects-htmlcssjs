const sliders = document.querySelectorAll('.slider');
const leftBtn = document.querySelector(".btnLeft");
const rightBtn = document.querySelector(".btnRight");

const body = document.body;

let itemCurrentActive = 0;

leftBtn.addEventListener('click', function () {
    if (itemCurrentActive > 0) {
        itemCurrentActive -= 1;
    } else {
        itemCurrentActive = sliders.length - 1;
    }
    setActive();
})


rightBtn.addEventListener('click', function () {

    if (itemCurrentActive < sliders.length - 1) {
        itemCurrentActive += 1;
    } else {
        itemCurrentActive = 0;
    }
    console.log(itemCurrentActive);
    setActive();
})

function setActive() {
    sliders.forEach(slider => {
        slider.classList.remove('active');
    });

    sliders[itemCurrentActive].classList.add('active');
    body.style.backgroundImage = sliders[itemCurrentActive].style.backgroundImage
}