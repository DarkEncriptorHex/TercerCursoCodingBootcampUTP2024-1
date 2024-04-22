const prompt = require('prompt-sync')();

    const numero = parseFloat(prompt('Dijite su numero: '));
    const AdivinaNumero = Math.random()*100;

   if (numero === AdivinaNumero){
        console.log('encontraste el numero');

     }  else if (numero > AdivinaNumero){
        console.log('el numero es menor')

     }else if (numero <AdivinaNumero){
        console.log('el numero es mayor')

   }