let myname=prompt("Enter Your Name?");
let messwelcome=document.querySelector('#welcome');
messwelcome.innerHTML=`Welcome ${myname}🥰! Lets test Your Knowledge About Java `


const questions = [
  {
    question: "What is the purpose of the `main` method in Java?",
    answers: [
      { text: "To execute the program", correct: true },
      { text: "To define a variable", correct: false },
      { text: "To create a class", correct: false },
      { text: "To print data", correct: false },
    ],
  },

  {
    question: "Which keyword is used to inherit a class in Java?",
    answers: [
      { text: "inherits", correct: false },
      { text: "extends", correct: true },
      { text: "implements", correct: false },
      { text: "derives", correct: false },
    ],
  },

  {
    question: "What is the size of an `int` variable in Java?",
    answers: [
      { text: "4 bytes", correct: true },
      { text: "2 bytes", correct: false },
      { text: "8 bytes", correct: false },
      { text: "1 byte", correct: false },
    ],
  },
  {
    question: "Which of the following is not a Java feature?",
    answers: [
      { text: "Object-oriented", correct: false },
      { text: "Use of pointers", correct: true },
      { text: "Platform-independent", correct: false },
      { text: "Portable", correct: false },
    ],
  },
  {
    question: "Which method must be implemented by all threads?",
    answers: [
      { text: "wait()", correct: false },
      { text: "start()", correct: false },
      { text: "run()", correct: true },
      { text: "stop()", correct: false },
    ],
  },
  {
    question: "Which of these is a valid keyword in Java?",
    answers: [
      { text: "interface", correct: true },
      { text: "string", correct: false },
      { text: "Float", correct: false },
      { text: "unsigned", correct: false },
    ],
  },
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function starQuizz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");

  }

  //this is for when you click one button, it disables the other ones, if its wrong it paints the correct one
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Well Played ${myname} You scored ${score} out of ${questions.length}! `;
  nextButton.innerHTML = `Play Agin! ${myname}`;
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuizz();
  }
});

starQuizz();
