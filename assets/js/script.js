var questionsArray = [
  {
    title: "Commonly used data types do NOT include:",
    choices: ["alerts", "booleans", "strings", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed with ＿＿＿＿＿.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "parenthesis"
  },
  {
    title: "Arrays in JavaScript can be used to store ＿＿＿.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    title: "String values must be enclosed within ＿＿＿＿ when being assigned to variables.",
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
var setTime;


var timerEl = document.getElementById("time-remaining");
var startBtn = document.getElementById("start-btn");
var mainPage = document.getElementById("main-page");
var questionEl = document.querySelector(".questions");
var questionBox = document.getElementById("question-box")
var questionChoices = document.getElementById("question-choices")
var choicesEl = document.querySelector(".choices");
var feedbackEl = document.getElementById("question-feedback");
var initialsEl = document.getElementById("initials-field");
var submitBtn = document.getElementById("submit-btn");

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

  questionBox.style.display = 'block';
  setTime = setInterval(timerCountdown, 1000);

  displayQuestions();
};



function displayQuestions() {
  // empties container before displaying new question
  choicesEl.textContent = "";
  for (var i = 0; i < questionsArray.length; i++) {

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
  clearInterval(setTime);
  var finalPage = document.getElementById("final-page");
  questionBox.style.display = 'none';
  finalPage.style.display = 'block';
  submitResults();
};


function submitResults() {
  var finalScore = document.getElementById("time-remaining").innerText;

  var displayScore = document.getElementById("final-score");
  displayScore.textContent = finalScore;
  
  var initials = initialsEl.value;
  var newScore = { initials, finalScore };
  //console.log(newScore)
  localStorage.setItem("highscores", JSON.stringify(newScore));
  var highscoresArray = [];
  highscoresArray.push(newScore);
  //console.log(highscoresArray);
};


startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", submitResults);
