const container = document.querySelector('.container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
for (let i = 0; i < 404; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', (e) => setColor(e));
    container.appendChild(square);
}

function setColor(e) {
    e.target.style.backgroundColor = `${colors[getRandomColor()]}`;
    setTimeout(()=> {
        removeColor(e.target);
    },1000)
   
}

function removeColor(e){
    e.style.backgroundColor = "rgb(29, 29, 29)";
}

function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}