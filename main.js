const botoes = dovument.queryselectorAll("botao");
//console.log(botoes.length;i++){
    botoes[i].onclick = function(){
        for  (let j=0;j <botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo")
    }
    conaole.log();
}