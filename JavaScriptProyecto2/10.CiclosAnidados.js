
//fecha y hora: 19/04/2024 12:42 p.m
/*
Creador: ing Mariand Evans , Ing Jorge, Ing Santiago 

*/
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: Javascript 6.0
//universidad Tecnologica de Pereira
//programa de ingenieria en sistemas y computacion

const numColumnas = 10; 

for (let i = 0; i < numColumnas; i++) {
    for (let j = 0; j < numColumnas; j++) {
        if (j === i) {
            process.stdout.write("A"); 
        } else {
            process.stdout.write(" "); 
        }
    }
    console.log(); 
}