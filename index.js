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

// question
document.getElementById("question").innerHTML = questions[index].question;

// answers            
for (i = 0; i < 4; i++) {
    document.getElementById("answer" + i).innerHTML = questions[index].options[i];
}

// question which is currently displayed
let currentQuestion = 4;

// how many questions were shown
let questionsShown = 0;

// what answer was clicked last?
let currentAnswer = 4;

// was the answer submitted already?
let submitted = false;


// display question 
displayQuestion(historicQuestions, currentQuestion);

// function to fill boxes for one question
function displayQuestion(questions, index) {

    document.getElementById("question").innerHTML = questions[index].question;
    for (i = 0; i < 4; i++) {
        document.getElementById("answer" + i).innerHTML = questions[index].options[i];
    }
}

// question
document.getElementById("question").innerHTML = questions[index].question;

// answers            
for (i = 0; i < 4; i++) {
    document.getElementById("answer" + i).innerHTML = questions[index].options[i];
}
        
        }

//		handler for choosing an answer
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

// was the answer submitted already?
let submitted = false;

// init Handlers
initHandlers();        

// handler for submit button       
function submitAnswer(event) {

    // submit is only possible if an answer was chosen
    if (currentAnswer != 5) {

        // note that answer was submitted so no further change is allowed
        submitted = true;

        let correctAnswer = historicQuestions[currentQuestion].correctAnswer;

        // handler for submit button       
        function submitAnswer(event) {

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
            }
            else {
                // simple alert            
                alert("Please choose an answer first");

            }
        }

        // show next question, if all are answered show result page                
        if (questionsShown < numberOfQuestions) {

            showRandomQuestion();

        }
        else {

            document.getElementById("play").style.display = "none";
            document.getElementById("result").style.display = "flex";
        }
    }
}

//        
function showRandomQuestion() {



    // determine random number    
    let currentQuestion = nextRandomQuestionNumber(historicQuestions, usedNumbers);

    // show question with random ID
    displayQuestion(historicQuestions, currentQuestion);

    // reset current answer
    currentAnswer = 4;     

    // turn buttons blue again            
    initAnswerButtons();

    // start button
    document.getElementById("welcomesubmit").addEventListener("click", startQuiz);

    // submit an Answer         
    document.getElementById("submit").addEventListener("click", submitAnswer);
    // navigate to next question
    document.getElementById("next").addEventListener("click", nextQuestion);
}

function initAnswerButtons() {
    // answers            
    for (i = 0; i < 4; i++) {
        document.getElementById("answer" + i).style.backgroundColor = "#3498db";
    }

}

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

        i++;

        if (i == 10) {
            break;
        }

    } while (numbersArray.includes(randomNumber));

    numbersArray.push(randomNumber);
    return (randomNumber);
}       


