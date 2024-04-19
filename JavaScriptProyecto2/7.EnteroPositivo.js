
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

function validarNumero(numero) {
    return numero >= 0;
}

function calcularSumaFactoriales(hastaN) {
    let suma = 0;
    for (let i = 0; i <= hastaN; i++) {
        suma += calcularFactorial(i);
    }
    return suma;
}

function iniciarPrograma() {
    console.log("Este programa calcula la suma de los factoriales de todos los números desde 0 hasta N.");
    let numero = parseInt(prompt("Ingrese un número entero no negativo: "));

    if (!validarNumero(numero)) {
        console.log("Debe ingresar un número entero no negativo.");
        return;
    }

    let sumaFactoriales = calcularSumaFactoriales(numero);
    console.log("La suma de los factoriales desde 0 hasta", numero, "es:", sumaFactoriales);
}

iniciarPrograma();