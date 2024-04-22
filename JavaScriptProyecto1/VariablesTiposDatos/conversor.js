const prompt = require('prompt-sync')();
function transformar() {

    const GradosCentigrados = parseFloat(prompt('Ingrese la temperatura en grados Centigrados: '));
    const GradosFahrenheit = (9/5 * GradosCentigrados) + 32;
    return GradosFahrenheit; 


}

const GradosFahrenheit = transformar();
console.log('La temperatura en grados Fahrenheit es'+GradosFahrenheit +'°'); 