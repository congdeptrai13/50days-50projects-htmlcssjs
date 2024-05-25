const btnAdd = document.querySelector('.btn');
btnAdd.addEventListener('click', () => { addNewNote('') });
const bodyEle = document.querySelector('body');
const noteList = JSON.parse(localStorage.getItem('notes'));

if (noteList) {
    noteList.forEach(note => {
        addNewNote(note);
    })
}
function addNewNote(text = '') {
    let note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
    <div class="note__tools">
            <div class="edit"><i class="fas fa-edit"></i></div>
            <div class="delete"><i class="fas fa-trash-alt"></i></div>
        </div>
        <div class="note__content">
            <textarea class="note__content--textarea" ${text !== "" ? "" : "disabled"}>${text !== "" ? text : ""}</textarea>
        </div>
    `;
    const editEle = note.querySelector('.edit');
    const deleteEle = note.querySelector('.delete');
    const textAreaEle = note.querySelector('.note__content--textarea');
    deleteEle.addEventListener('click', function () {
        note.remove();
        updateLS();
    })
    textAreaEle.addEventListener('input', function () {
        updateLS();
    })



    editEle.addEventListener('click', function () {
        textAreaEle.toggleAttribute('disabled');
    })
    bodyEle.appendChild(note);
}

function updateLS() {
    let arrNote = [];
    const notes = document.querySelectorAll('.note .note__content--textarea');
    notes.forEach(note => {
        console.dir(note);
        arrNote.push(note.value);
        console.log(arrNote);
    })
    localStorage.setItem('notes', JSON.stringify(arrNote));
}