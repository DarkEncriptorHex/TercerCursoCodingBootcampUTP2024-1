
//fecha y hora: 19/04/2024 12:42 p.m
/*
Creador: ing Mariand Evans , Ing Jorge, Ing Santiago 

*/
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: Javascript 6.0
//universidad Tecnologica de Pereira
//programa de ingenieria en sistemas y computacion

function imprimirTabla(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + ' x ' + i + ' = ' + (numero * i));
    }
}

function presentarTabla() {
    for (let j = 1; j <= 10; j++) {
        imprimirTabla(j);
    }
}

presentarTabla();