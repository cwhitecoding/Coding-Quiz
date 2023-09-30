//  start button click
    // starts the game displaying the first question
    // starts timer
    // See time in corner of the screen
var timer;
var timerCount;
var score;
var timerElement = document.getElementById("timer-display");
var startButton = document.getElementById("startButton");

function startTimer() {
    timer = setInterval (function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (score && timerCount > 0) {
                clearInterval(timer);
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

function startGame() {
    timerCount = 30;
    startButton = true;
    startTimer()
}

startButton.addEventListener("click", startGame);

// Multiple Choice Question
// wrong answer subtracts time from timer
function wrongAnswer() {
    timerCount--;
    if (isCorrect === false) {
        timerCount += -5;}
    }

// answer button click displays next question
var question1 = "What is a Javascript array?";
var answer1 = "A global variable";
var answer12 = "An object that contains data"; //Correct answer
var answer13 = "A property of an object that contains a definition";
var answer14 = "A process that is declared to perform an action";
var question2 = "When logically comparing two values in Javascript, what symbol is used to define the inverse of a value?";
var answer2 = "!"; //Correct answer
var answer22 = "^";
var answer23 = "#";
var answer24 = "||";
var question3 = "What is the computer language used to style and design a website?";
var answer3 = "Python";
var answer32 = "JavaScript"; 
var answer33 = "CSS"; //Correct answer
var answer34 = "HTML";
var question4 = "What coding language is most commonly used in creating websites?";
var answer4 = "Python";
var answer42 = "Jaguar";
var answer43 = "JavaScript"; //Correct answer
var answer44 = "CoffeeBean";
var question5 = "What part of a plant is used to exchange gasses with the atmosphere?";
var answer5 = "Stomata"; //Correct answer
var answer52 = "Gibberellin";
var answer53 = "Anthocyanins";
var answer54 = "Apical Meristem";

var questions = [question1, question2, question3, question4, question5];
var answers1 = [answer1, answer12, answer13, answer14];
var answers2 = [answer2, answer22, answer23, answer24];
var answers3 = [answer3, answer32, answer33, answer34];
var answers4 = [answer4, answer42, answer43, answer44];
var answers5 = [answer5, answer52, answer53, answer54];

for (var i = 0; i < answers1.length; i++) {

}

function loseGame() {
    if (timerCount === 0) {
        clearInterval(timer);}
}
// When timer reaches 0, or completes all questions, end the game
    // Once game is over, timer disappears
    // on game over screen, user can input initials and save score
    // on game over screen, user can press buanswer14