const prompt = require('prompt-sync')();

let lista = [2,3,5,7,8]
let listaInvertida=[]//variable donde se almacenara la lista invertida
for ( let i = lista.length -1; i>= 0; i--){ // declarando la funcion for para la incersion

        listaInvertida.push(lista[i]);

}

console.log(listaInvertida);
