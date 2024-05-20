const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

let idxQuestion = 0;
let score = 0;
const questionEle = document.querySelector('.question-title');
const answer_a = document.querySelector('#labelA');
const answer_b = document.querySelector('#labelB');
const answer_c = document.querySelector('#labelC');
const answer_d = document.querySelector('#labelD');
const inputEles = document.querySelectorAll('input');
const buttonEle = document.querySelector('#submit');
const container = document.querySelector('.container');
function loadQuiz() {
    unselected();
    let currentQuestion = quizData[idxQuestion];
    questionEle.innerText = currentQuestion.question;
    answer_a.innerText = currentQuestion.a;
    answer_b.innerText = currentQuestion.b;
    answer_c.innerText = currentQuestion.c;
    answer_d.innerText = currentQuestion.d;

}
loadQuiz();
// inputEles.addEventListener('click',function(){

// })
function unselected() {
    inputEles.forEach(input => {
        input.checked = false;
    })
}

function checkAnswer() {
    let answer;
    inputEles.forEach(input => {
        if (input.checked) {
            answer = input.id;
        }
    })
    return answer;
}


buttonEle.addEventListener('click', function () {
    const answer = checkAnswer();
    if (answer === quizData[idxQuestion].correct) {
        score++;
    }
    idxQuestion++;
    if (idxQuestion < quizData.length) {
        loadQuiz();
    } else {
        container.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button id='submit' onclick="location.reload()">Reload</button>
            `;
            buttonEle.style.display = 'none';
    }
})
