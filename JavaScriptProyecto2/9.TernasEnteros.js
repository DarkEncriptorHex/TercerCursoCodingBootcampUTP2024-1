
//fecha y hora: 19/04/2024 12:42 p.m
/*
Creador: ing Mariand Evans , Ing Jorge, Ing Santiago 

*/
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: Javascript 6.0
//universidad Tecnologica de Pereira
//programa de ingenieria en sistemas y computacion

function generarTernas() {
    let contador = 1;
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            console.log(contador, i, j);
            contador++;
        }
    }
}

console.log("Ternas de enteros generadas:");
generarTernas();