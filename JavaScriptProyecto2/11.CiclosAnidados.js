
//fecha y hora: 19/04/2024 12:42 p.m
/*
Creador: ing Mariand Evans , Ing Jorge, Ing Santiago 

*/
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: Javascript 6.0
//universidad Tecnologica de Pereira
//programa de ingenieria en sistemas y computacion

function imprimirFigura() {
    let caracter = "A";
    let espacio = " ";

    for (let fila = 1; fila <= 25; fila++) {

        for (let i = 0; i < (25 - fila) * 2; i++) {
            process.stdout.write(espacio);
        }

        for (let columna = 1; columna <= fila; columna++) {
            process.stdout.write(caracter + espacio);
        }

        console.log(); 
    }
}

console.log("Fila");
imprimirFigura();
console.log("Columna");