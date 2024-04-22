const prompt = require('prompt-sync')();
function fecha (){

    const nombre = prompt('Indique su nombre:');
    const apellido = prompt('Indique su apellido:');
    const fechaespecifica = parseFloat(prompt('Indique su año de nacimiento:'));

    const identificacion = nombre+apellido+fechaespecifica;
    return identificacion;
}
const Identificacion = fecha()
console.log('su ID es:'+Identificacion);
