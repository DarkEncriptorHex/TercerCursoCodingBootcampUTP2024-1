
//fecha y hora: 19/04/2024 12:42 p.m
/*
Creador: ing Mariand Evans , Ing Jorge, Ing Santiago 

*/
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: Javascript 6.0
//universidad Tecnologica de Pereira
//programa de ingenieria en sistemas y computacion

const prompt = require("prompt-sync")();

function validaNumero(num) {
    return isNaN(num) || num === 0;
}

function procesarNumeros(numeros) {
    let mayor = Number.MIN_SAFE_INTEGER;
    let menor = Number.MAX_SAFE_INTEGER;
    let cantidadNegativos = 0;
    let sumaPositivos = 0;
    let cantidadPositivos = 0;
    let cantidadMayores150 = 0;

    for (let num of numeros) {
        if (validaNumero(num)) {
            console.log("Error: Todos los numeros deben ser diferentes de cero.");
            return;
        }

        if (num > 150) {
            cantidadMayores150++;
        }

        if (num > mayor) {
            mayor = num;
        }
        if (num < menor) {
            menor = num;
        }
        if (num < 0) {
            cantidadNegativos++;
        }
        if (num > 0) {
            sumaPositivos += num;
            cantidadPositivos++;
        }
    }

    console.log("Cantidad de numeros Mayores a 150:", cantidadMayores150);
    console.log("Numero mayor encontrado en el grupo:", mayor);
    console.log("Numero menor encontrado en el grupo:", menor);
    console.log("Cantidad de numeros negativos encontrados:", cantidadNegativos);
    console.log("Promedio de los positivos encontrados:", cantidadPositivos > 0 ? sumaPositivos / cantidadPositivos : 'N/A');
}

function verificarCantidadNumeros(numeros) {
    return numeros.length === 15;
}

function iniciarPrograma() {
    console.log("Este programa lee desde el teclado 15 numeros diferentes de cero y realiza calculos.");

    let input = prompt("Ingrese 15 numeros separados por espacios: ");
    let numerosEntrada = input.trim().split(' ').map(Number);

    if (!verificarCantidadNumeros(numerosEntrada)) {
        console.log("Debe ingresar exactamente 15 numeros.");
        return;
    }

    procesarNumeros(numerosEntrada);
}

iniciarPrograma();