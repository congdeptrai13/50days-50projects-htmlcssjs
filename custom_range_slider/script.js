const rangeEle = document.querySelector('#range');
const rangeField = document.querySelector('label');
rangeEle.addEventListener('input', function (e) {
    rangeField.innerText = e.target.value;
    let inputWidth = e.target.clientWidth;
    let labelWidth = rangeField.clientWidth;
    let min = e.target.min;
    let max = e.target.max;
    let left = scale(e.target.value, min, max, 0, inputWidth) - 40;
    rangeField.style.left = `${left}px`;
})



function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}