
// tela inicial do quiz
const enterQuiz = document.getElementById("enter-quiz");
const quizTimeScreen = document.getElementById("quiz-time-screen")
enterQuiz.addEventListener("click", () =>{
    quizTimeScreen.style.display ="none";
});

// menu do quiz
const quizzes = ['quiz-dev-web','quiz-portugues','quiz-matematica'];
function abrirQuiz(id){
    document.querySelector('.quiz-menu').classList.add('hide')

    quizzes.forEach(quiz =>{
      document.getElementById(quiz).classList.add('hide');

    });

    document.getElementById(id).classList.remove('hide')
}



// barra de progresso
function atualizarProgresso(atual, total) {
    const quizAtivo = document.querySelector(
      '#quiz-dev-web:not(.hide), #quiz-portugues:not(.hide), #quiz-matematica:not(.hide)'
    );
  
    if (!quizAtivo) return;
  
    const circle = quizAtivo.querySelector('.progress-circle');
    const text = quizAtivo.querySelector('.progress-text');
  
    if (!circle || !text) return;
  
    const porcentagem = atual / total;
    const graus = Math.round(porcentagem * 360);
  
    circle.style.background =
      `conic-gradient(#ff9800 ${graus}deg, #333 0deg)`;
  
    text.textContent = `${atual}/${total}`;
  }
  
