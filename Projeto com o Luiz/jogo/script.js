var jogador = "x";

function jogar(celula){
    //comprar se a celula está vazia para assim escrever 
    if (celula.innerHTML == ""){
        //escreva no html a letra
        celula.innerHTML = jogador;
        //alternar variavel jogador para a proxima jogada
        if(jogador == "x"){
            jogador = "o";
        
        }else{
            jogador = "x"
        }
    }
}

 function reiniciar(){
    window.location.reload() }
