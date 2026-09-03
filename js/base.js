
// tela inicial do quiz
const enterQuiz = document.getElementById("enter-quiz");
const quizTimeScreen = document.getElementById("quiz-time-screen")
if(enterQuiz){
  enterQuiz.addEventListener("click", () =>{
    quizTimeScreen.style.display ="none";
});
}


// barra de progresso
function atualizarProgresso(atual, total) {
    const quizAtivo = document.getElementById('quiz-card');
  
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
  
