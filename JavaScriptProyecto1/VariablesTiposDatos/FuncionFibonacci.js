const prompt = require('prompt-sync')();
function Fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let Fibonacci1 = 0; // Primer numero de Fibonacci 
    let Fibonacci2 = 1; // Segundo numero de Fibonacci
    let Fibonacci; // Variable para almacenar el n-ésimo numero de Fibonacci 

    for (let i = 2; i <= n; i++) {
        Fibonacci = Fibonacci1 + Fibonacci2;
        Fibonacci1 = Fibonacci2;
        Fibonacci2 = Fibonacci1;

        return Fibonacci;

    }

} 

const n = parseInt(prompt('Ingrese el valor de n para calcular el n-ésimo numero de Fibonacci: '));

console.log(`El ${n}-ésimo número de Fibonacci es: ${Fibonacci(n)}`);

