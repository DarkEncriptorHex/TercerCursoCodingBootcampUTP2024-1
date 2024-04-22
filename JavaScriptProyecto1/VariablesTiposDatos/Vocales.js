const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese una frase 
const frase = prompt('Ingrese una frase: ');

// Convertir la frase a minuscula para hacer la comparacion de vocales mas sencilla
const fraseMinusculas = frase.toLowerCase();
const vocalesEncontradas = new Set();
// Inicializar un contador para las vocales 
let contadorVocales = 0;

// Iterar sobre cada caracter de la frase
for (let caracter of fraseMinusculas){
    //Verificar si el caracter es 8una vocal
    if ('aeiou' .includes(caracter)) {
        // Incrementa el contador de vocales
        contadorVocales++;
        vocalesEncontradas.add(caracter)
    }
}
console.log('Vocales Encontradas:');
for (let vocal of vocalesEncontradas) {
    console.log(vocal);
}
// Mostrar la vantidad de Vocales encontradas
console.log('Cantidad total de vocales encontradas:', vocalesEncontradas , contadorVocales);
