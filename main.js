const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        Text[i].classList.add("ativo")
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoOObjetivo1 = new Date('2024-12-31 T00:00:00');
contadores[0].textContent = tempoOObjetivo1[]

let
