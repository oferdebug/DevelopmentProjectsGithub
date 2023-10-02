const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [
  {
    question: "What does “www” stand for in a website browser?",
    choice1: "world wide web",
    choice2: "web ww3",
    choice3: "web worldwide",
    choice4: "none of the above",
    answer: "1",
    question:
      " Of the following, if statements, which one correctly executes three instructions if the condition is true?",
    choice1: "If (x < 0) a = b * 2; y = x; z = a – y",
    choice2: "{ if (x < 0) a = b * 2; y = x; z = a – y; }",
    choice3: "If{ (x < 0) a = b * 2; y = x; z = a – y ; }",
    choice4: "If (x < 0) { a = b * 2; y = x; z = a – y; }",
    answer: "4",
    question:
      "Kim has just constructed her first for loop within the Java language.  Which of the following is not a required part of a for loop?",
    choice1: "Initialization",
    choice2: "Condition",
    choice3: "Variable",
    choice4: "increment",
    answer: "3",
  },
];
//contans
const CORRECT_Bouns = 10;
const MAX_QUESTIONS = 5;
startgame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getnewQuestion();
};
getnewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    return window.location.assign("/end.html");
  }
};
questionCounter++;
const questionIndex = Math.floor(Math.Random() * availableQuestions.length);
currentQuestion = availableQuestions[questionIndex];
question.innerText = currentQuestion.question;
choices.forEach((choice) => {
  const number = choice.dataSet["number"];
  choice.innerText = currentQuestion["choice" + number];
});
{
  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
}
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataSet["Number"];
    getnewQuestion();
  });
});

startGame();
