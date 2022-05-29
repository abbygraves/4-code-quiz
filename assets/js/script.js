var questionsArray = [
  {
    title: "Commonly used data types do NOT include:",
    choices: ["alerts", "booleans", "strings", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed with _______.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "parenthesis"
  },
  {
    title: "Arrays in JavaScript can be used to store _______.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    title: "String values must be enclosed within _______ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes"
  },
  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log"
  }
];

//this.score = 0
var time = questionsArray.length * 10;
var questionIndex = 0;
var choicesIndex = 0;

var timerEl = document.getElementById("time-remaining");
var startBtn = document.getElementById("start-btn");
var mainPage = document.getElementById("main-page");
var questionEl = document.querySelector(".questions");
var questionBox = document.getElementById("question-box")
var choicesEl = document.querySelector(".choices");
var feedbackEl = document.getElementById("question-feedback");

function timerCountdown() {
  timerEl.textContent = (time);
  time--;

  if (time < 0) {
    time = 0;
  }
  if (time <= 0) {
    endQuiz();
  }
};


function startQuiz() {
  startBtn.style.display = 'none';
  mainPage.style.display = 'none';

  var questionBox = document.getElementById("question-box");
  questionBox.style.display = 'block';

  setInterval(timerCountdown, 1000);

  displayQuestions();
};



function displayQuestions() {
  for (var i = 0; i < questionsArray.length; i++) {

    //questionEl.style.display = 'block';
    var generateQuestion = questionsArray[questionIndex];
    console.log(questionIndex);

    var questionTitleEl = document.getElementById("question-title");
    questionTitleEl.innerHTML = "<h1 class='title'>" + generateQuestion.title + "</h1>";
  }

  generateQuestion.choices.forEach(function (choice, i) {

    var choicesBtnEl = document.createElement("button");
    choicesBtnEl.setAttribute("value", choice);
    choicesBtnEl.setAttribute("class", "button-style");
    choicesBtnEl.textContent = i + 1 + ". " + choice;

    choicesEl.appendChild(choicesBtnEl);
    choicesBtnEl.onclick = (choiceSelect);
  });
};


function choiceSelect() {
  if (this.value !== questionsArray[questionIndex].answer) {
    time -= 5;
    timerEl.textContent = time;
    feedbackEl.textContent = "Nope!";
  } else {
    feedbackEl.textContent = "Yes!";
  }
  questionIndex++;

  if (questionIndex === questionsArray.length) {
    endQuiz();
  } else {
    displayQuestions();
  }
};


function endQuiz() {
  var finalPage = document.getElementById("final-page");
  questionBox.style.display = 'none';
  finalPage.style.display = 'block';


};

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
