
//fecha y hora: 19/04/2024 12:42 p.m
/*
Creador: ing Mariand Evans , Ing Jorge, Ing Santiago 

*/
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: Javascript 6.0
//universidad Tecnologica de Pereira
//programa de ingenieria en sistemas y computacion

function generarParejas() {
    let contador = 0;
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 2; j++) {
            console.log(contador, i);
            contador++;
        }
    }
}

console.log("Parejas de enteros generadas:");
generarParejas();