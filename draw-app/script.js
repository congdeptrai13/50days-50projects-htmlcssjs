let size = 10;
let color = 'black';
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let x;
let y;
let isPressed = false;

const decreaseEle = document.querySelector('.decrease');
const increaseEle = document.querySelector('.increase');
const colorEle = document.querySelector('.color');
const closeEle = document.querySelector('.close');
const numEle = document.querySelector('.num');
function draw(x, y) {


    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true);
    ctx.fillStyle = color;
    ctx.fill();

}

function drawLine(x1, y1, x2, y2) {


    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}
// draw(200, 200);
canvas.addEventListener('mousedown', function (e) {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', function (e) {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', function (e) {
    if (isPressed) {
        let x2 = e.offsetX;
        let y2 = e.offsetY;
        draw(x, y);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
})

decreaseEle.addEventListener('click', function () {
    size -= 5;
    if (size === 0) {
        size = 0;
    }
    updateSizeScreen();
})

increaseEle.addEventListener('click', function () {
    size += 5;
    if (size > 50) {
        size = 50;
    }
    updateSizeScreen();
})

colorEle.addEventListener('change', function (e) {
    color = e.target.value;
    console.log(color);
})

closeEle.addEventListener('click',function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
})

function updateSizeScreen() {
    numEle.value = size;
}







// drawLine(200, 200, 200, 300)