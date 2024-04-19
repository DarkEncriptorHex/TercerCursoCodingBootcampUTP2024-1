
//fecha y hora: 19/04/2024 12:42 p.m
/*
Creador: ing Mariand Evans , Ing Jorge, Ing Santiago 

*/
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: Javascript 6.0
//universidad Tecnologica de Pereira
//programa de ingenieria en sistemas y computacion

const prompt = require("prompt-sync")();

function calcularFactorial(numero) {
    if (numero < 0) {
        return "El factorial no está definido para números negativos.";
    } else if (numero === 0) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

function iniciarPrograma() {
    console.log("Este programa calcula el factorial de un número entero positivo.");
    let numero = parseInt(prompt("Ingrese un número entero positivo: "));

    let factorial = calcularFactorial(numero);

    if (typeof factorial === 'string') {
        console.log(factorial);
    } else {
        console.log("El factorial de", numero, "es:", factorial);
    }
}

iniciarPrograma();