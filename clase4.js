/** Estructuras repetitivas for
 * Uso de lowercase y uppercase
 */

// let nombre = prompt("Escriba su nombre").toUpperCase();
// console.log(`HOLA, ${nombre}`);

// Instrucciones repetitivas incrementando
for (let index = 0; index <= 12; index += 3) {
  console.log(index);
}

console.log("");

// Instrucciones repetitivas decrementando
for (let index = 12; index >= 0; index -= 3) {
  console.log(index);
}

// Ejercicio tabla de multiplicar invertida
let tabla = parseInt(prompt("Escriba un numero"));
console.log(`Tabla de multiplicar invertida del  < ${tabla} >`);

for (let i = 10; i >= 1; i--) {
  console.log(`${tabla} * ${i} = ${tabla * i}`);
}
