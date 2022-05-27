var questions = [
  {
    question: "Commonly used data types do NOT include:",
    choices: ["alerts", "booleans", "strings", "numbers"],
    answer: "alerts" 
  },
  {
    question: "The condition in an if / else statement is enclosed with _______.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "parenthesis"
  },
  {
    question: "Arrays in JavaScript can be used to store _______.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log" 
  }
];

var startBtn = document.getElementById("start-btn");
var mainPage = document.getElementById("main-page");
var questionEl = document.querySelector(".questions");
var choicesEl = document.querySelector(".choices")

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
  for (i = 0; i < questions.length; i++) {
    console.log("Element at index " + i + " : "+ questions[i]);

    questionEl.style.display = 'block';
    var newQuestion = questions[i];
    console.log(newQuestion)
    
    var questionTitleEl = document.getElementById("question-title");
    questionTitleEl.innerHTML = "<h1 class='title'>" + newQuestion.question + "</h1>";
    //console.log(questionTitleEl.innerHTML);
  }
};


function getChoices() {
     var newChoices = questions[0]

     var buttonTextEl = document.getElementById("choice-1-btn");
     buttonTextEl.textContent = newChoices;
     console.log(newChoices)
};

//getChoices();
startBtn.addEventListener("click", startQuiz);
