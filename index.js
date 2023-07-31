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

// question which is currently displayed
let currentQuestion = 4;

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




