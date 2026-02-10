const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizCard = document.getElementById("quiz-card");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const resultScreen = document.getElementById("result-screen");
const scoreEl = document.getElementById("score");


let currentQuestion = 0;
let score = 0;

startBtn.addEventListener("click", () =>{
 startScreen.classList.add("hide");
 quizCard.classList.remove("hide");
 showQuestion();

})

function showQuestion() {
    feedbackEl.textContent = "";
    nextBtn.classList.add("hide");
    answersEl.innerHTML = "";

    const q = questionsWeb[currentQuestion];
    questionEl.textContent = q.question;


    q.answers.forEach((answer, index) =>{
        const btn = document.createElement("button");
        btn.textContent = answer;

        btn.addEventListener("click",() => {
           selectAnswer(btn, index);

        });

        answersEl.appendChild(btn);

    });
}


function selectAnswer(selectedButton, index){
      const correctIndex = questionsWeb[currentQuestion].correct;
      const buttons = answersEl.querySelectorAll("button");
      
      buttons.forEach(btn => btn.disabled = true);

      if( index === correctIndex){
        selectedButton.classList.add("correct");
        feedbackEl.textContent = "Resposta correta! "
        score++;
      }else{
          selectedButton.classList.add("wrong");
          buttons[correctIndex].classList.add("correct")
          feedbackEl.textContent = "Resposta incorreta! "
      }
      nextBtn.classList.remove("hide");
}

nextBtn.addEventListener("click", () => {
currentQuestion++;

if(currentQuestion < questionsWeb.length){
  showQuestion();
}else{
    showResult();
}



});

function showResult(){
  quizCard.classList.add("hide");
  resultScreen.classList.remove("hide");
  scoreEl.textContent = `Você acertou ${score} de ${questionsWeb.length} perguntas.`;

}