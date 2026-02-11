const iniciarMt = document.getElementById("bi");
const telaInicalMt  = document.getElementById("tlmt");
const quizCardMt  = document.getElementById("card-quiz-3");
const questoesMtEl = document.getElementById("question-mt");
const respostasMtEl = document.getElementById("answers-mt");
const comentarioMt = document.getElementById("feedback-mt");
const proximoMt = document.getElementById("px");
const resultadoMt = document.getElementById("res");
const ptElPtMt = document.getElementById("pt");

let questaoAtualMt = 0
let ptMt = 0

iniciarMt.addEventListener("click", () =>{
  telaInicalMt.classList.add("hide")
  quizCardMt.classList.remove("hide")
   mostraQuestoesMt();
});

function mostraQuestoesMt(){
  comentarioMt.textContent ="";
  proximoMt.classList.add("hide");
  respostasMtEl.innerHTML= "";

const questaoAtual = questoesMt[questaoAtualMt];
questoesMtEl.textContent = questaoAtual.pergunta;

questaoAtual.respostas.forEach((resposta, index) => {
  const btp = document.createElement("button");
  btp.textContent = resposta;

  btp.addEventListener("click", () => {
      selecionarRespostaMt(btp, index);
     
  });

  respostasMtEl.appendChild(btp);
 
});

}


function selecionarRespostaMt(button, index){
const corretaIndex = questoesMt[questaoAtualMt].correta;
const buttons = respostasMtEl.querySelectorAll("button");

buttons.forEach(btp => btp.disabled = true);

if(index === corretaIndex){
    button.classList.add("correct");
    comentarioMt.textContent ="Resposta correta!";
    ptMt++     
}else{
  button.classList.add("wrong");
  buttons[corretaIndex].classList.add("correct");
  comentarioMt.textContent ="Resposta errada!";
}

proximoMt.classList.remove("hide");

}

proximoMt.addEventListener("click", () => {
questaoAtualMt++;
if(questaoAtualMt < questoesMt.length){
mostraQuestoesMt();
}else{
  mostraResultadoMt();
}

});

function mostraResultadoMt (){
  quizCardMt.classList.add("hide");
  resultadoMt.classList.remove("hide");
  ptElPtMt.textContent = `Você acertou ${ptMt} de ${questoesMt.length} perguntas.`;


}