function calcular(){

let hectares =
Number(document.getElementById("hectares").value);

let producao =
Number(document.getElementById("producao").value);

let total = hectares * producao;

document.getElementById("resultado").innerHTML =
"Produção estimada: " +
total.toLocaleString("pt-BR");
}

function resposta(correta){

if(correta){

document.getElementById("resultadoQuiz").innerHTML =
"✅ Correto! Os drones ajudam a monitorar lavouras.";

}else{

document.getElementById("resultadoQuiz").innerHTML =
"❌ Incorreto. A resposta correta é Drone.";

}

}
