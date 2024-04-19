
//fecha y hora: 19/04/2024 12:42 p.m
/*
Creador: ing Mariand Evans , Ing Jorge, Ing Santiago 

*/
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: Javascript 6.0
//universidad Tecnologica de Pereira
//programa de ingenieria en sistemas y computacion

function imprimirCuadr(filas, columnas) {
    for (let i = 0; i < filas; i++) {
        let linea = " ";
        for (let j = 0; j < columnas; j++) {
            if (i === 0 && j === 39) {
                linea += "A";

            } else if (i === 1 && (j === 38 || j === 39)) {

                linea += "A";
            } else if (i === 2 && (j === 37 || j === 38 || j === 39 )) {
                
                linea += "A";

            } else if (i === 3 && (j === 36 || j === 38 || j === 37 || j === 39 )) {

                linea += "A";
            } else if (i === 4 && (j === 35 || j === 36 || j === 38 || j === 37 || j === 39 )) {
            
                linea += "A";
            } else if (i === 5 && (j === 34 || j === 35 || j === 36 || j === 38 || j === 37 || j === 39 )) {
            
                linea += "A";

            } else if (i === 6 && (j === 35 || j === 36 || j === 37 || j === 38 || j === 39 )) {
            
                linea += "A";
            } else if (i === 7 && (j === 36 || j === 37 || j === 38 || j === 39 )) {
            
                linea += "A";

            } else if (i === 8 && (j === 37 || j === 38 || j === 39 )) {
            
                linea += "A";
            } else if (i === 9 && (j === 38 || j === 39 )) {
            
                linea += "A";
            } else if (i === 10 && (j === 39 )) {
            
                linea += "A";

            } else {
                linea += " ";
            }
        }
        console.log(linea);
    }
}

// Definir el tamaño de la cuadrícula
const filas = 11;
const columnas = 40;

// Imprimir la cuadrícula
imprimirCuadr(filas, columnas);