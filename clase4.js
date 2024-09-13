/** Estructuras repetitivas for
 * Uso de lowercase y uppercase
 */

// let nombre = prompt("Escriba su nombre").toUpperCase();
// console.log(`HOLA, ${nombre}`);

// Instrucciones repetitivas incrementando
// for (let index = 0; index <= 12; index += 3) {
//   console.log(index);
// }

// console.log("");

// Instrucciones repetitivas decrementando
// for (let index = 12; index >= 0; index -= 3) {
//   console.log(index);
// }

// Ejercicio tabla de multiplicar invertida
// let tabla = parseInt(prompt("Escriba un numero"));
// console.log(`Tabla de multiplicar invertida del  < ${tabla} >`);

// for (let i = tabla; i >= 1; i--) {
//   console.log(`${tabla} * ${i} = ${tabla * i}`);
// }

// Ejercicio tabla de multiplicar
// console.log("Tabla de multiplicar del 1 al 10");
// for (let i = 1; i <= 10; i++) {
//   console.log(`Tabla de multiplicar del [${i}]`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Imprimir la suma de los primeros 100 numeros impares
let suma = 0;
for (let i = 1; i < 200; i += 2) {
  suma += i;
  // i % 2 != 0 ? (suma += i) : "";
}
console.log(`La suma de los primeros "100" numeros impares es = ${suma}`);
