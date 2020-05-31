var quizContainer = document.getElementsByClassName("quiz-container");
var playButton = document.getElementById("playButton");
var minutesDisplay = document.getElementById("minutes");
var secondsDisplay = document.getElementById("seconds");




var score = 0
var currentQuestion = -1;
var timerLapse = 0;
var interval;

//starts the countdown timer once user clicks the 'start' button
function beginQuiz() {

    timerLapse = 10;
    document.getElementById("timerLapse").innerHTML = timerLapse;

    timer = setInterval(function() {
        timerLapse--;
        document.getElementById("timerLapse").innerHTML = timerLapse;
//proceed to end the game function when timer is below 0 at any time
        if (timerLapse <= 0) {
            clearInterval(timer);
            endGame(); 
        }
    }, 1000);

    next();
}
// Questions
var questions = [
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
    },

    {
        question: "Who is making the Web standards?",
        answers: ["Mozilla", "Google", "The World Wide Web Consortium", "Microsoft"],
        correctAnswer: "The World Wide Web Consortium"
    },

    {
        question: "Choose the correct HTML element for the largest heading:",
        answers: ["<heading>", "<h1>", "<h6>", "head"],
        correctAnswer: "<h1>"
    },

    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: ["<lb>", "<break>", "<br>"],
        correctAnswer: "<br>"
    },

    {
        question: "What does CSS stand for?",
        answers: ["Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheet"],
        correctAnswer: "Cascading Style Sheet"
    },

    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        answers: ["In the <body> section", "At the end of the document", "In the <head> sections"],
        correctAnswer: "In the <head> sections"
    },

    {
        question: "Which HTML attribute is used to define inline styles?",
        answers: ["font","style", "class", "styles"],
        correctAnswer: "style"
    },

    {
        question: "Which HTML attribute is used to define inline styles?",
        answers: ["bgcolor", "background-color", "color"],
        correctAnswer: "background-color"
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: ["The <body> section", "The <head> section", "Both the <head> section and the <body> section are correct"],
        correctAnswer: "The <head> section"
    },

    {
        question: "How do you create a function in JavaScript?",
        answers: ["function = myFunction()", "function:myFunction", "function myFunction"],
        correctAnswer: "function = myFunction()"
    },
    ]





document.getElementsByClassName("quiz-container").innerHTML = quizContainer
console.log(questions);