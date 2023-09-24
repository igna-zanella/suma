const prompt = require("prompt-sync")()
var numeroUno, numeroDos
numeroUno = prompt('Ingrese un número: ','0')
numeroDos = prompt('Ingrese otro número: ','0')
var resultado
resultado = parseInt(numeroUno)+parseInt(numeroDos)
console.log("El resultado es: " + resultado)

let sign = prompt("¿Cuál es tu signo? ")

// if (sign == sign) {
  console.log("¡Increíble! Yo también soy de " + sign + " ¡Qué casualidad!")
// }

function admision(){
let nombre = prompt("Ingrese su nombre: ")
if (nombre !== "cosme fulanito" && nombre !== "Cosme Fulanito") {
    console.log("Puede pasar")
} else {
    console.log("No se admiten Homeros")
}
}
admision()

function hacerHelados(cantidad) {
  return '🍦'.repeat(cantidad);
  }
  let misHelados = hacerHelados(3);
  console.log(misHelados); // Mostrará en consola '🍦🍦🍦'