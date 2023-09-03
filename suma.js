const prompt = require("prompt-sync")();
var numeroUno;
var numeroDos;
numeroUno = prompt('Ingrese un número: ','0');
numeroDos = prompt('Ingresos otro número: ','0');
var resultado;
resultado = parseInt(numeroUno)+parseInt(numeroDos);
console.log("El resultado es: " + resultado);

let sign = prompt("¿Cuál es tu signo? ");

// if (sign == sign) {
  console.log("¡Increíble! Yo también soy de " + sign + " ¡Qué casualidad!");
// }