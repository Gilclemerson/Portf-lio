  const startPt = document.getElementById("btn");
  const telaInicialPt = document.getElementById("tela-inicial");
  const quizCardPt = document.getElementById("quiz-2-card");
  const questionElPt = document.getElementById("question-pt");
  const answersElPt = document.getElementById("answers-pt");
  const feedbackElPt = document.getElementById("feedback-pt");
  const nextBtnPt = document.getElementById("proximo");
  const resultScreenPt = document.getElementById("resultado");
  const scoreElPt = document.getElementById("pontuacao");

  let currentQuestionPt  = 0;
  let pontuacaoPt = 0;

  function embaralharPerguntasPt(perguntasPt){
    for ( let i = perguntasPt.length -1;  i > 0; i--){
        const indiceAleatorio = Math.floor(Math.random()* (i + 1));  
        const temp = perguntasPt[i];
        perguntasPt[i] = perguntasPt[indiceAleatorio];
        perguntasPt[indiceAleatorio] = temp;

    }
}

  startPt.addEventListener("click", () => {
    embaralharPerguntasPt(questionsPt)
    telaInicialPt.classList.add("hide");
    quizCardPt.classList.remove("hide");
    showQuestionPt();
  });

  function showQuestionPt() {
    feedbackElPt.textContent = "";
    nextBtnPt.classList.add("hide");
    answersElPt.innerHTML = "";

    const q = questionsPt[currentQuestionPt];
    questionElPt.textContent = q.question;

    q.answers.forEach((answer, index) => {
      const btn = document.createElement("button");
      btn.textContent = answer;
      btn.onclick = () => selectAnswerPt(btn, index);
      answersElPt.appendChild(btn);
    });
  }

  function selectAnswerPt(selectedButton, index) {
    const correctIndex = questionsPt[currentQuestionPt].correct;
    const buttons = answersElPt.querySelectorAll("button");

    buttons.forEach(btn => btn.disabled = true);

    if (index === correctIndex) {
      selectedButton.classList.add("correct");
      feedbackElPt.textContent = "Resposta correta!";
      pontuacaoPt++;
    } else {
      selectedButton.classList.add("wrong");
      buttons[correctIndex].classList.add("correct");
      feedbackElPt.textContent = "Resposta incorreta!";
    }

    nextBtnPt.classList.remove("hide");
  }

  nextBtnPt.addEventListener("click", () => {
    currentQuestionPt++;

    if (currentQuestionPt < questionsPt.length) {
      showQuestionPt();
    } else {
      showResultPt();
    }
  });

  function showResultPt() {
    quizCardPt.classList.add("hide");
    resultScreenPt.classList.remove("hide");
    scoreElPt.textContent = `Você acertou ${pontuacaoPt} de ${questionsPt.length} perguntas.`;
  }