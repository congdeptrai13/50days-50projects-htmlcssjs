const formAddTodo = document.querySelector('#add-todo-form');
const todoInput = document.querySelector('#todoInput');
const listTodoEle = document.querySelector('.list-todo');
let todoList = [];
let todoEles = [];
loadTodoList();
loadListTodo();
formAddTodo.addEventListener('submit', function (e) {
    e.preventDefault();
    let todo = {
        name: todoInput.value,
        isFinish: false
    };
    if (todoInput.value !== "") {
        todoList.unshift(todo);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        listTodoEle.innerHTML = "";
        loadListTodo()
        todoInput.value = ""
        todoEles = document.querySelectorAll('.todo');
    }
})

function loadTodoList() {
    if (localStorage.getItem('todoList')) {
        todoList = JSON.parse(localStorage.getItem('todoList'));
    } else {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }
}

function loadListTodo() {
    todoList.forEach((todo, index) => {
        let divEle = document.createElement('div');
        divEle.classList.add('todo');
        divEle.setAttribute('data-id', index);
        if (todo.isFinish === true) {
            divEle.classList.add('finished');
        }
        divEle.addEventListener('click', function () {
            divEle.classList.toggle('finished');
            if (divEle.classList.contains('finished')) {
                todoList[index].isFinish = true;
                localStorage.setItem('todoList', JSON.stringify(todoList));
            } else {
                todoList[index].isFinish = false;
                localStorage.setItem('todoList', JSON.stringify(todoList));
            }
        })
        divEle.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            todoList = todoList.filter((todo, idx) => {
                return idx !== index;
            })
            divEle.remove();
            localStorage.setItem('todoList', JSON.stringify(todoList));
            listTodoEle.innerHTML = ""
            loadListTodo();
        })
        divEle.innerText = todo.name;
        listTodoEle.appendChild(divEle);
    })
}
