const prompt = require('prompt-sync')();

function lista1(lista) {
    if (lista.length === 0) { // Si en la lista hay 0 numero soltara null 
    return null;
    }

    let minimo = lista[0]; // Inicializa el minimo con el primer elemento de la lista
    let maximo = lista[0]; // Inicializa el maximo con el primer elemento de la lista 

    for (let i = 1; i < lista.length; i++) { //crea un bucle que recorre el primer elemento hasta el ultimo
        if (lista[i] >maximo) {
            maximo = lista[i]; // Actualiza el maximo si encontramos un numero mayor 
        }
        if (lista[i] < minimo) {
            minimo =lista[i]; // Actualiza el minimo si encontramos un numero menor 
        }
    }

    return { maximo, minimo }; // Devuelve un objeto con el maximo y el minimo 
}

// Ejemplo de uso
const numero = [50,60,70,80];
const resultado =lista1(numero); 
console.log('El numero mayor es:', resultado.maximo);
console.log('El numero menor es', resultado.minimo);
