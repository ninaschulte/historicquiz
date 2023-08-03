
// data for historic quiz
const historicQuestions = [
    {
        question: "Which famous scientist developed the theory of general relativity?",
        options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Johannes Kepler"],
        correctAnswer: 2
    },
    {
        question: "The Declaration of Independence was adopted on which date?",
        options: ["July 4, 1776", "July 2, 1776", "July 4, 1789", "July 2, 1789"],
        correctAnswer: 0
    },
    {
        question: "The Great Wall of China was primarily built to protect against invasions from which group?",
        options: ["Mongols", "Vikings", "Romans", "Huns"],
        correctAnswer: 3
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "George Washington", "Benjamin Franklin", "Alexander Hamilton"],
        correctAnswer: 1
    },
    {
        question: "The French Revolution began in which year?",
        options: ["1789", "1776", "1792", "1800"],
        correctAnswer: 0
    },
    {
        question: "Who was the Egyptian pharaoh who built the Great Pyramid of Giza?",
        options: ["Tutankhamun", "Cleopatra", "Ramses II", "Khufu"],
        correctAnswer: 3
    },
    {
        question: "The Battle of Waterloo took place during which war?",
        options: ["American Revolutionary War", "Napoleonic Wars", "English Civil War", "Hundred Years' War"],
        correctAnswer: 1
    },
    {
        question: "The Magna Carta, a key historical document, was signed in which year?",
        options: ["1215", "1492", "1776", "1804"],
        correctAnswer: 0
    },
    {
        question: "Who was the first woman to fly solo across the Atlantic Ocean?", options: ["Amelia Earhart", "Rosa Parks", "Marie Curie", "Jane Austen"],
        correctAnswer: 0
    },
    {
        question: "In which year did the Berlin Wall fall, leading to the reunification of Germany?",
        options: ["1989", "1975", "1991", "1985"],
        correctAnswer: 0
    }];

/* All variables */
// which random numers were already used before
const usedNumbers = [];
//number of correct and wrong answers
let correctAnswers = 0;
let wrongAnswers = 0;
// how many questions does the user have to answer and how many did he answer already
let numberOfQuestions = 3;
//let answeredQuestions = 0;
// what question ("id") is currently being asked / shown
let currentQuestion = 4;
// how many questions were shown
let questionsShown = 0;
// what answer was clicked last?
let currentAnswer = 4;
// was the answer submitted already?
let submitted = false;

// init Handlers
initHandlers();

/* Function that fill up all html elements with text. 
Function is called called for each question. */
function displayQuestion(questions, index) {
    // question
    document.getElementById("question").innerHTML = questions[index].question;
    // answers            
    for (i = 0; i < 4; i++) {
        document.getElementById("answer" + i).innerHTML = questions[index].options[i];
    }
    // show submit button
    document.getElementById("submit").style.display = "flex";
}

/* Function to choose answer. 
It is called once user tap on the answer. */
function chooseAnswer(event) {
    // 			check if answer was already submitted
    if (!submitted) {
        // all answer boxes have the same handler, so find out which one was clicked
        let chosenAnswerButton = event.target || event.srcElement;
        // check that it is not chosen already (otherwise don't do do anything)
        if (chosenAnswerButton.id.charAt(6) != currentAnswer) {
            //	if other than currently clicked answer was selected before, set that to blue again   
            if (currentAnswer != 4) {
                document.getElementById("answer" + currentAnswer).style.backgroundColor = "#3498db";
            }
            // mark clicked answer
            chosenAnswerButton.style.backgroundColor = "red";
            // set "current answer" to clicked answer
            currentAnswer = chosenAnswerButton.id.charAt(6);
        }
    }
    // inform that answer was already submitted
    else {
        // simple alert            
        alert("You already submitted your answer");
    }
}

/* Function for submit button. 
It is called everytime submit button tapped. */
function submitAnswer(event) {
    if (!submitted) {
        // submit is only possible if an answer was chosen
        if (currentAnswer != 5) {
            // note that answer was submitted so no further change is allowed
            submitted = true;
            let correctAnswer = historicQuestions[currentQuestion].correctAnswer;
            // mark correct answer
            document.getElementById("answer" + correctAnswer).style.backgroundColor = "green";
            // count correct / wrong answers
            if (currentAnswer == correctAnswer) {
                correctAnswers++;
            }
            else {
                wrongAnswers++;
            }
            // show progress
            document.getElementById("numberanswered").innerHTML = correctAnswers + wrongAnswers;
            document.getElementById("numberofquestions").innerHTML = numberOfQuestions;
            document.getElementById("submit").style.display = "none";
        }
        else {
            // simple alert            
            alert("Please choose an answer first");
        }
    }
    else {
        // simple alert            
        alert("You already submitted an answer");
    }
}

/* FUnction for start quiz. 
It is called when user tap on "Start quiz button" */
function startQuiz() {
    // check that user name was supplied
    if (document.getElementById("username").value == "") {
        // simple alert            
        alert("Please enter a name");
    }
    else {
        document.getElementById("welcome").style.display = "none";
        document.getElementById("play").style.display = "flex";
        showRandomQuestion();
        // show progress
        document.getElementById("numberanswered").innerHTML = correctAnswers + wrongAnswers;
        document.getElementById("numberofquestions").innerHTML = numberOfQuestions;
    }
}

/* Function for next question.
It is called everytime user tap on "Next question" button */
function nextQuestion(event) {
    // if the answer was not submitted, next is not possible
    if (!submitted) {

        // simple alert            
        alert("No Answer submitted");
    }
    else {
        // show next question, if all are answered show result page                
        if (questionsShown < numberOfQuestions) {
            showRandomQuestion();
        }
        else {
            document.getElementById("play").style.display = "none";
            document.getElementById("result").style.display = "flex";
            showResult();
        }
    }
}

/* Function to show random question. 
It is called when user tap on "Start quiz" button and "Next question" button. */
function showRandomQuestion() {
    // determine random number    
    currentQuestion = nextRandomQuestionNumber(historicQuestions, usedNumbers);
    // show question with random ID
    displayQuestion(historicQuestions, currentQuestion);
    // reset current answer
    currentAnswer = 4;
    // turn buttons blue again            
    initAnswerButtons();
    // set to not submitted
    submitted = false;
    // increase question counter
    questionsShown++;
}

/* Function for all event listeners - 
add onclick event listeners. */
function initHandlers() {
    // answer buttons
    for (i = 0; i < 4; i++) {
        document.getElementById("answer" + i).addEventListener("click", chooseAnswer);
    }
    // start button
    document.getElementById("welcomesubmit").addEventListener("click", startQuiz);
    // submit an Answer         
    document.getElementById("submit").addEventListener("click", submitAnswer);
    // navigate to next question
    document.getElementById("next").addEventListener("click", nextQuestion);
}

/* Function to turn button blue again after next question button is clicked. */
function initAnswerButtons() {
    // answers            
    for (i = 0; i < 4; i++) {
        document.getElementById("answer" + i).style.backgroundColor = "#3498db";
    }
}

/* Function for next random question number. 
The purpose of this function is to not show the same question twice. */
function nextRandomQuestionNumber(questionArray, numbersArray) {
    let randomNumber;
    // Check if we can do anything at all
    if (numbersArray.length == questionArray.length) {
        console.log('All numbers gone');
    }
    let i = 0;
    // check if number is new
    do {
        // use math random and math floor to return integer
        randomNumber = Math.floor(Math.random() * questionArray.length);
    } while (numbersArray.includes(randomNumber));
    numbersArray.push(randomNumber);
    return (randomNumber);
}

/* Function showresult */
function showResult() {
    document.getElementById("correctAnswers").innerHTML = correctAnswers;
}

/* Dialog for quiz rules */
const dialog = document.querySelector("#myDialog");
const openButton = document.querySelector("#openDialogButton");
const closeButton = document.querySelector("#closeButton");
// Function to open the dialog
function openDialog() {
    dialog.showModal();
}
// Function to close the dialog
function closeDialog() {
    dialog.close();
}
openButton.addEventListener("click", openDialog);
closeButton.addEventListener("click", closeDialog);














