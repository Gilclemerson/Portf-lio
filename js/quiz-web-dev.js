
// Variáveis de ligação do JS com o HTML
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizCard = document.getElementById("quiz-card");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const resultScreen = document.getElementById("result-screen");
const scoreEl = document.getElementById("score");

// Controle de estado quiz
let currentQuestion = 0; // indice da pergunta atual
let score = 0; // pontuação

function embaralharPerguntasWeb(PerguntasWeb){
for ( let i = PerguntasWeb.length -1; i > 0; i--){
      const indiceAleatorio = Math.floor(Math.random() * (i + 1));
       const temp = PerguntasWeb[i];
       PerguntasWeb[i]= PerguntasWeb[indiceAleatorio];
       PerguntasWeb[indiceAleatorio] = temp;
       

}
}

// Fluxo completo do quiz
startBtn.addEventListener("click", () =>{
  embaralharPerguntasWeb(questionsWeb)
  currentQuestion = 0;
  score = 0;
  atualizarProgresso( 1, questionsWeb.length);

 startScreen.classList.add("hide"); // esconde a tela
 quizCard.classList.remove("hide"); // mostra o quiz
 showQuestion(); // chama a função que carregar as perguntas
 

});

function showQuestion() {
    feedbackEl.textContent = ""; // limpa o feedback
    nextBtn.classList.add("hide"); // esconde o botão antigo
    answersEl.innerHTML = ""; // apaga respostas antigas

    atualizarProgresso(currentQuestion + 1, questionsWeb.length);

    //pega a pergunta atual pelo indice
    
    const q = questionsWeb[currentQuestion];
    questionEl.textContent = q.question;

        
    q.answers.forEach((answer, index) =>{
        const btn = document.createElement("button"); // cria os botões
        btn.textContent = answer;

        btn.addEventListener("click",() => {
           selectAnswer(btn, index);

        });

        answersEl.appendChild(btn);

    });
}

// verificas as respostas
function selectAnswer(selectedButton, index){
      const correctIndex = questionsWeb[currentQuestion].correct;
      const buttons = answersEl.querySelectorAll("button");
      
      buttons.forEach(btn => btn.disabled = true); // evita vários clicks

     // Compara as respostas
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

// próxima pergunta
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