const prompt = require("prompt-sync")();
var numeroUno;
var numeroDos;
numeroUno = prompt('Ingrese un número: ','');
numeroDos = prompt('Ingresos otro número: ','');
var resultado;
resultado = numeroUno * numeroDos;
console.log("El resultado es: " + resultado);

let sign = prompt("¿Cuál es tu signo? ");

// if (sign == sign) {
  console.log("¡Increíble! Yo también soy de " + sign + " ¡Qué casualidad!");
// }