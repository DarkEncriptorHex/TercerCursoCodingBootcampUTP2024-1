const prompt =require('prompt-sync')();
function Calcular(){

    const peso = parseFloat(prompt('indique su peso:'));
    const altura = parseFloat(prompt('Indique su altura:'));
    const IMC = peso/(altura)**2;
    return IMC; 


}

    const IMC = Calcular()
    console.log('Su IMC es:'+ IMC);
    