alert('Boas vindas ao Jogo de advinhação');
let valorLimite = 1000;
let numeroSecreto = parseInt(Math.random() * valorLimite) + 1;
let numeroChute;
let numeroTentativas = 0;

while(numeroSecreto != numeroChute){
    numeroChute = prompt(`Escolha um numero entre 1 e ${valorLimite}`);
    numeroTentativas++;
    if(numeroSecreto == numeroChute){
        break;
    }else {
        if(numeroSecreto > numeroChute){
            alert(`O número secreto é maior que ${numeroChute}`);
        }else {
            alert(`O número secreto é menor que ${numeroChute}`);
        }
    } 
}

let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Acertou em ${numeroTentativas} ${palavraTentativa}!! O número secreto é ${numeroSecreto}.`);
