let questions = [
    {
        question: "During a sunset on Earth, the sky often appears yellow or pink. What color is the sky during a sunset on Mars?",
        answer: 'blue'
    },
    {
        question: "What anatomy term is derived from a Latin word meaning\"little mouse\"?",
        answer: 'muscle'
    },
    {
        question: "What animal has transparent eyelids so that it can see underwater?",
        answer: 'beaver'
    },
    {
        question: "What hybrid animal is bred for its skills and magic (ref. Napoleon Dynamite)?",
        answer: 'liger'
    },
    {
        question: "What is the only US city whose major sports teams all share the same colors?",
        answer: 'pittsburgh'
    },
    {
        question: "What Asian garment literally translates to \"a thing to wear\"?",
        answer: 'kimono'
    },
    {
        question: "A blue whale's tongue weighs about as much as what land animal?",
        answer: 'elephant'
    },
    {
        question: "What is the only mammal that can fly?",
        answer: 'bat'
    },
    {
        question: "What is the most consumed manufactured drink in the world?",
        answer: 'tea'
    },
    {
        question: "What is the only edible food that never goes bad?",
        answer: 'honey'
    },
];

quiz = document.getElementById('quiz');
let score = 0;

function startQuiz() {
for(i = 0; i < questions.length; i++) {

    let qInput = document.createElement('div')
    qInput.innerHTML =
    `<div class="questionDiv${i}" style="margin-bottom: 40px;">
    <p class="form-text">${questions[i].question}</p>
    <input id="userResponse${i}" type="text" class="form-control" placeholder="type answer here"></input>
    </div>`
    quiz.appendChild(qInput)
}
submit = document.getElementById('submit')
result = document.getElementById('final')
submit.addEventListener('click', () => {

    for (i=0; i<questions.length; i++) {
    
        userResponse = document.querySelector(`#userResponse${i}`)
        color = document.querySelector(`.questionDiv${i}`)

        if (userResponse.value.toLowerCase() === questions[i].answer) {
        score++;
        color.style.backgroundColor = 'lightgreen';
        console.log(score)
    }
    else {
        color.style.backgroundColor = 'red';
    }
    }  // ends for loop

    let li = document.createElement('li')
    li.innerText = `You got ${score} out of ${questions.length} correct!`
    result.appendChild(li)

})  // ends submit eventListener
}  // ends startQuiz function

startQuiz()