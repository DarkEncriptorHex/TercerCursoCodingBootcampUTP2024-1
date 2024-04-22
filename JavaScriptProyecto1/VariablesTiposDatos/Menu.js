const prompt = require('prompt-sync')();

// Funcion para cargar y ejecutar el modulo correspondiente a la opcion seleccionada
// Funcion para cargar y ejecutar el modulo correspondiente a la opcion seleccionada 
function cargarOpcion(opcion) {
    switch (opcion) {
        case '1':
            require('./conversor'); // Cargar el modulo conversor.js
            break;

        case '2':
            require('./calculadora'); // Carga el modulo calculadora.js
        
        case '3':
            require('./GeneradorNombre'); // carga el modulo GeneradorNombre.js
            break;

        case '4':
            require('./FuncionFibonacci'); // Cargar el modulo FuncionFibonacci.js
            break;

        case '5':
            console.log('Has seleccionado la opcion 5. Saliendo del menu.');
    }
}

// Funcion para mostrar el menu y leer la entrada del usuario 
function menu(){
    let opcion;
    while (true){
        console.log('nMenu');
        console.log('1. Conversor de °C a °F.');
        console.log('2. Indice de masa corporal.');
        console.log('3. Creador de nombre de usuario.');
        console.log('4. Funcion Fibonacci.');
        console.log('5. Salir del menu');

        opcion = prompt('Seleccione una opcion del menu; ');
        cargarOpcion(opcion); // Llama a la funcion para cargar y ejecutar el modulo correspondiente 
    }
}

// Ejecutar el menu
menu();