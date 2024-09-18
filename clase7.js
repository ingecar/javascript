/**
 * Juego de adivinar el número enttre 1 y 50
 */

const aleat = Math.floor(Math.random() * 50) + 1;
let num;
let intento = 1;

num = parseInt(prompt("Juego de adivinanza \nIngrese un número entre 1 y 50"));

while (num !== aleat && intento <= 5) {
  if (num < 1 || num > 50 || Number.isNaN(num)) {
    num = parseInt(prompt("Ingrese un número valido entre 1 y 50"));
    continue;
  }

  aleat < num
    ? alert(
        `Intento #${intento}: Ingresaste el ${num}, pista el numero es menor!`
      )
    : alert(
        `Intento #${intento}: Ingresaste el ${num}, pista el numero es mayor!`
      );

  intento++;

  if (intento > 5) {
    break;
  }

  num = parseInt(prompt("Ingrese un nuevo número entre 1 y 50"));
}

num === aleat
  ? alert(`Ganaste!, el número era ${aleat}`)
  : alert(`Perdiste!, el número era ${aleat}`);
