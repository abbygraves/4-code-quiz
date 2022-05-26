var questions = [
  {
    question: "Commonly used data types do NOT include:",
    answer1: "alerts",
    answer2: "booleans",
    answer3: "strings",
    answer4: "numbers",
    correct: "alerts"  //answer1
  },
  {
    question: "The condition in an if / else statement is enclosed with _______.",
    answer1: "quotes",
    answer2: "curly brackets",
    answer3: "parenthesis",
    answer4: "square brackets",
    correct: "parenthesis"  //answer3
  },
  {
    question: "Arrays in JavaScript can be used to store _______.",
    answer1: "numbers and strings",
    answer2: "other arrays",
    answer3: "booleans",
    answer4: "all of the above", 
    correct: "all of the above"  //answer4
  },
  {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    answer1: "commas",
    answer2: "curly brackets",
    answer3: "quotes",
    answer4: "parenthesis",
    correct: "quotes"  //answer3
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer1: "JavaScript",
    answer2: "terminal/bash",
    answer3: "for loops",
    answer4: "console.log",
    correct: "console.log"  //answer4
  }
];

var startBtn = document.getElementById("start-btn");
var mainPage = document.getElementById("main-page");
var questionEl = document.querySelector(".questions");

function startQuiz() {
  startBtn.style.display = 'none';
  mainPage.style.display = 'none';

  var questionBox = document.getElementById("question-box");
  questionBox.style.display = 'block';

  

  // setInterval function
  // if timer runs out and i have not completed questions then do this 

  // if timer runs out and i have completed questions do this 
  getQuestions();
};


function getQuestions() {
  questionEl.style.display = 'block';
  var nextQuestion = questions[0];

  var questionTitleEl = document.getElementById("question-title");
  questionTitleEl.innerHTML = "<h1 class='title'>" + nextQuestion.question + "</h1>";
  console.log(questionTitleEl.innerHTML);
};

startBtn.addEventListener("click", startQuiz);
