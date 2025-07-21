const questions = [
  {
    question: "what makes me the most happy?",
    answer: [
      { text: "Listing to music", correct: false },
      { text: "talking to my friends", correct: false },
      { text: "feeling loved", correct: true },
    ],
  },
  {
    question: "what is the one thing that i admire the most in people? ",
    answer: [
      { text: "peoples ability to forgive ", correct: false },
      { text: "Curiosity to learn new things", correct: true },
      { text: "Always being optimistic", correct: true },
    ],
  },
  {
    question: "what is my favourite song?",
    answer: [
      { text: "queen: bohemian rhapsody", correct: false },
      { text: "cold play:viva la vida ", correct: true },
      { text: "ricky montgomery : Line without a hook", correct: false },
    ],
  },
  {
    question: "what do i like the most about my self?",
    answer: [
      { text: "love i give", correct: true },
      { text: "My looks ", correct: false },
      { text: "just everything", correct: false },
    ],
  },
];
const QuestionElement = document.querySelector(".questions-container h2");
const AnswerElement = document.querySelector(".answer-container");
const Nextbtn = document.querySelector(".next");

let currentIndex = 0;
let score = 0;

function startQuiz() {
  currentIndex = 0;
  score = 0;
  Nextbtn.innerHTML = "Next";
  Nextbtn.style.display = "none";
  showQuestion();
}
function showQuestion() {
  let currentQuestion = questions[currentIndex];
  let questionno = currentIndex + 1;
  QuestionElement.innerHTML = questionno + "." + currentQuestion.question;
  AnswerElement.innerHTML = "";
   Nextbtn.style.display = "none";


  currentQuestion.answer.forEach((answers) => {
    const button = document.createElement("button");
    button.innerHTML = answers.text;
    button.classList.add("btn");
    AnswerElement.appendChild(button);

    button.addEventListener("click", () => {
      if (answers.correct) {
        button.style.backgroundColor = "green";
        score++;
      } else {
        button.style.backgroundColor = "red";
      }
      const currentAnswer = currentQuestion.answer.find((a) => a.correct).text;
      Array.from(AnswerElement.children).forEach((btn) => {
        btn.disabled = true;
        if (btn.textContent === currentAnswer) {
          btn.style.backgroundColor = "green";
        }
      });
      Nextbtn.style.display = "block";
    });
  });
}
function showscore() {
  AnswerElement.innerHTML = "";
  QuestionElement.innerHTML =
    `You have scored ${score}out of ${questions.length}`;
  Nextbtn.innerHTML = "play again";
  Nextbtn.style.display = "block";
}

  Nextbtn.addEventListener("click", () => {
    if ((Nextbtn.innerHTML === "play again")) {
      startQuiz();
    } else {
      currentIndex++;
      if (currentIndex < questions.length) {
        showQuestion();
      } else {
       showscore();
      }
    }
  });

startQuiz();
