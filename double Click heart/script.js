const loveMeEle = document.querySelector(".loveMe");
const timesEle = document.querySelector(".times");

let likes = 0;

loveMeEle.addEventListener("dblclick", function (e) {
    likes++;
    timesEle.innerHTML = likes;
    let x = e.clientX;
    let y = e.clientY;
    let xOffset = e.target.offsetLeft;
    let yOffset = e.target.offsetTop;
    let xInside = x - xOffset;
    let yInside = y - yOffset;
    let icon = document.createElement("i");
    icon.className = 'fas fa-heart';
    icon.style.left = `${xInside}px`;
    icon.style.top = `${yInside}px`;
    loveMeEle.appendChild(icon);
    setTimeout(() => {
        loveMeEle.removeChild(icon);
    }, 500)
})