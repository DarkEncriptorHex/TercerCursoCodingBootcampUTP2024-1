//fecha y hora: 19/04/2024 12:42 p.m
/*
Creador: ing Mariand Evans , Ing Jorge, Ing Santiago 

*/
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: Javascript 6.0
//universidad Tecnologica de Pereira
//programa de ingenieria en sistemas y computacion
// declaramos prompt como costante 

//imprime los numeros de fibonacci sin pasarse de 10000
function fibonacciRecursivo(n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
    }
}

function fibonacciIterativo(n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        let a = 0;
        let b = 1;
        let c;
        for (let i = 2; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
}

function mostrarFibonacci() {
    let limite = 10000;
    let i = 0;
    let numero = 0;

    console.log("Este programa presenta la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va sumando progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......");
    console.log("Para este programa, se presenta la serie fibonacci sin sobrepasar el numero 10,000");

    while (numero <= limite) {
        numero = fibonacciRecursivo(i);
        if (numero <= limite) {
            process.stdout.write(numero.toString() + ",");
        }
        i++;
    }
}
mostrarFibonacci();