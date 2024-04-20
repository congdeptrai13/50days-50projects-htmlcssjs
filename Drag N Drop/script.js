

const fillEle = document.querySelector('.fill');
const emptiesEle = document.querySelectorAll('.empty');



const dragStart = () => {

    fillEle.classList.add("hold");
    setTimeout(() => fillEle.className = 'invisible', 0);
}
function dragEnd() {
    fillEle.className = "fill";
}


fillEle.addEventListener('dragstart', dragStart);
fillEle.addEventListener('dragend', dragEnd);

emptiesEle.forEach(empty => {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)

})

function dragEnter(e) {
    e.preventDefault();
    this.classList.add("hovered");
}

function dragOver(e) {
    e.preventDefault()
}

function dragDrop() {
    this.className = "empty";
    this.append(fillEle);
}

function dragLeave() {
    this.classList.remove("hovered");
}

