const btnEle = document.querySelector('.btn');
const circleEle = document.querySelector('.circle');
btnEle.addEventListener('click', e => {
    let x = e.clientX;
    let y = e.clientY;
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    let xInside = x - buttonLeft;
    let yInside = y - buttonTop;
    let newSpan = document.createElement('span');
    newSpan.classList.add('circle');
    newSpan.style.top = yInside + 'px';
    newSpan.style.left = xInside + 'px';
    btnEle.appendChild(newSpan);
    setTimeout(() => newSpan.remove(), 500)
})