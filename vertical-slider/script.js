const sliderLeft = document.querySelector('.slider-left');
const sliderRight = document.querySelector('.slider-right');
const buttonDown = document.querySelector('.down');
const buttonUp = document.querySelector('.up');
let sliderLength = sliderLeft.querySelectorAll('div').length;

let indexLeft = 0;
let indexRight = sliderLength - 1;
// sliderRight.style.top = `${(indexRight - 1) * 100}vh`

buttonDown.addEventListener('click', () => handleButton('down'))
buttonUp.addEventListener('click', () => handleButton('up'))
function handleButton(direction) {
    if (direction === 'up') {
        indexLeft++;
        indexRight--;
        if (indexLeft > sliderLength - 1) {
            indexLeft = 0;
        }
        if (indexRight < 0) {
            indexRight = sliderLength - 1;
        }
    } else if (direction === 'down') {
        indexLeft--;
        indexRight++;
        if (indexRight > sliderLength - 1) {
            indexRight = 0;
        }
        if (indexLeft < 0) {
            indexLeft = sliderLength - 1;
        }
    }
    sliderLeft.style.top = `-${indexLeft * 100}vh`;
    sliderRight.style.top = `${indexRight * 100}vh`;

}