
function converter() {
const numero = document.getElementById('numero').value;
const baseOrigem = parseInt(document.getElementById("baseOrigem").value);
const baseDestino = parseInt(document.getElementById("baseDestino").value);
const resultado = document.getElementById("resultado");

if(numero ===""){
    resultado.innerHTML =" Digite um número";
    return;
}

const decimal = parseInt(numero, baseOrigem);

if(isNaN(decimal)){
    resultado.innerHTML = "Número inválido para essa base";
    return;
}

const convertido = decimal.toString(baseDestino).toUpperCase();
resultado.innerText =`Resultado: ${convertido}`;

}



