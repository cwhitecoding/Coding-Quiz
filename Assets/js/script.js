// All variables global to start with
var timer;
var timerCount;
var score;
var timerElement = document.getElementById("timer-display");
var questionsEl = document.getElementById("ques");
var answerEl = document.getElementById("answers");
var startButton = document.getElementById("startButton");

// Creates an array to grab from to keep displaying questions and answers.
var questions = [
    {
        question: "What is a JavaScript array?",
        answers: ["A global variable", "An object that contains data", "A property of an object that contains a definition", "A process that is declared to perform an action"],
        correct: "An object that contains data",
    },
    {
        question: "When logically comparing two values in Javascript, what symbol is used to define the inverse of a value?",
        answers: ["^","!","#","||"],
        correct: "!",
    },
    {
        question: "What is the computer language used to style and design a website?",
        answers: ["Python","JavaScript","CSS","HTML"],
        correct: "CSS",
    },
    {
        question: "What coding language is most commonly used in creating websites?",
        answers: ["Python","Jaguar","JavaScript","CoffeeBean"],
        correct: "JavaScript",
    },
    {
        question: "What part of a plant is used to exchange gasses with the atmosphere?",
        answers: ["Stomata","Gibberellin","Anthocyanins","Apical Meristem"],
        correct: "Stomata",
    },
];

// This variable is a regular integer that will help select within the array
var qIndex = 0

// Displays questions and answers continuously after button pushing.
function displayQ() {
    var pEl = document.createElement("p");
    answerEl.innerHTML = "";
    questionsEl.innerHTML = "";
    for (var i = 0; i < questions[qIndex].answers.length; i++) {
        var buttonEl = document.createElement("button");
        buttonEl.textContent = questions[qIndex].answers[i];
        answerEl.append(buttonEl);
    }
    pEl.textContent = questions[qIndex].question;
    questionsEl.append(pEl);
}

// Begins timer function setting to stop at zero.
function startTimer() {
    timer = setInterval (function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (timerCount === 0) {
                clearInterval(timer);
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

// Gives parameters on what is necessary to start the game.
function startGame() {
    timerCount = 45;
    startButton.classList.add("hide");
    startTimer();
    displayQ();
}

// Function to allow wrong answer to subtract time from timer.
function wrongAnswer(event) {
    if (questions[qIndex].correct === event.target.textContent) {
    console.log("correct");
    }
    else {
        console.log("incorrct");
        timerCount = timerCount-5;
    }
    qIndex++
    displayQ();
    }
    
    startButton.addEventListener("click", startGame);
    answerEl.addEventListener("click", wrongAnswer);