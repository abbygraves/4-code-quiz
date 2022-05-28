var generateQuestionIndex = 0;

var questionsArray = [
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
var choicesEl = document.querySelector(".choices");


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
  for (var i = 0; i < questionsArray.length; i++) {

    questionEl.style.display = 'block';
    var generateQuestion = questionsArray[0];
    console.log(questionsArray.length);

    var questionTitleEl = document.getElementById("question-title");
    questionTitleEl.innerHTML = "<h1 class='title'>" + generateQuestion.question + "</h1>";
  }

  generateQuestion.choices.forEach(function(choice, i) {

    var choicesBtnEl = document.createElement("button");
    choicesBtnEl.setAttribute("value", "choice-btn");
    choicesBtnEl.setAttribute("class", "button-style");
    choicesBtnEl.textContent = i + 1 + ". " + choice;

    choicesEl.appendChild(choicesBtnEl);
    choicesBtnEl.onclick = (choiceSelect);
  });
};

function choiceSelect() {
  generateQuestionIndex++;
};


console.log(generateQuestionIndex++)






startBtn.addEventListener("click", startQuiz);



    




// function createTaskActions(taskId) {
//   var actionContainerEl = document.createElement("div");
//   actionContainerEl.className = "task-actions";

//   // create edit button
//   var editButtonEl = document.createElement("button");
//   editButtonEl.textContent = "Edit";
//   editButtonEl.className = "btn edit-btn";
//   editButtonEl.setAttribute("data-task-id", taskId);

//   actionContainerEl.appendChild(editButtonEl);


//   var statusChoices = ["To Do", "In Progress", "Completed"];
//   //for (var i = 0; i < statusChoices.length; i++) {
//     // create option element
//     var statusOptionEl = document.createElement("option");
//     statusOptionEl.textContent = statusChoices[i];
//     statusOptionEl.setAttribute("value", statusChoices[i]);

//     // append to select
//     statusSelectEl.appendChild(statusOptionEl);
