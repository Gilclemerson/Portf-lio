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

function embaralharPerguntasMt(perguntasMt){
        for( let i = perguntasMt.length -1; i > 0; i--){
          const indiceAleatorio = Math.floor(Math.random() * (i + 1));

          const temp = perguntasMt[i];
          perguntasMt[i] = perguntasMt[indiceAleatorio];
          perguntasMt[indiceAleatorio] = temp;
        }
}

iniciarMt.addEventListener("click", () =>{
  embaralharPerguntasMt(questoesMt)
  questaoAtualMt = 0
  ptMt = 0
  atualizarProgresso(1, questoesMt.length)
  telaInicalMt.classList.add("hide")
  quizCardMt.classList.remove("hide")
   mostraQuestoesMt();
});

function mostraQuestoesMt(){
  comentarioMt.textContent ="";
  proximoMt.classList.add("hide");
  respostasMtEl.innerHTML= "";
  atualizarProgresso( questaoAtualMt + 1, questoesMt.length);
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