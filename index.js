
var countdownTimer;
var timerInterval;
var arrayOfQuestions = [];
const maxTime = 5 * 60; //time is in seconds
function setCountDownTimer() {
    countDownTimer = maxTime;
}
//when button is clicked start timer
//start time
timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
    countDownTimer = countDownTimer -1;
}
//question is asked
function setUpQuestions() {
    console.log("SetupQuestions started");
    let question1 = {
        id: "quest0",
        question: "To select elements with a specific class: ",
        answer1: " write a semicolon",
        answer2: " write a period",
        answer3: " write a period",
        answer4: " write a comma",
    };
    arrayOfQuestions.push(question1);
    arrayOfQuestions.push(question2);

    console.log("SetupQuestions arrayOfQuestions: ", arrayOfQuestions);
}


function nextQuestion() {

for(let i = 0; i<arrayOfQuestions.length; i++) {

}
}

function showQuestion(questionindex) {
    let questionSection = document.getElementId('question');
    let newQuestion = document.createElement('div');
    newQuestion.id = arrayOfQuestions[questionindex].id;
    newQuestion.innerText = arrayOfQuestions[questionindex].question;
    questionSection.appendChild(newQuestion);
}


 //if answer is correct go to next question and add points
        //if answer is incorrect deduct time
        //once all questions answered give options
        //if user chooses to save score show scoreboard
        
