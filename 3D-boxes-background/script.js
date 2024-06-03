const boxesContainer = document.querySelector('.boxes');
const btn = document.querySelector('.btn-change');

function createBox() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = `<div class="box" style="background-position: ${-j * 125}px ${-i * 125}px;"></div>`;
            boxesContainer.innerHTML += box;
        }
    }
}

createBox();


btn.addEventListener('click',function(){
    boxesContainer.classList.toggle('big');
})