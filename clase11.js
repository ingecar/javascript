/**
 * Arreglos
 */

let estudiantes = ["Juan", "Pedro", "Felipe", "Angela", "Fernando"];
// console.log(estudiantes);

// Agregar elementos al inicio
estudiantes.unshift("Jorge");
// console.log(estudiantes);

// Agregar elementos en la posicion 2
estudiantes.splice(2, 0, "Ildefonso");
// console.log(estudiantes);

// Quitar elementos en la posicion 2
estudiantes.splice(2, 1);
// console.log(estudiantes);

// Agregar elementos al final
estudiantes.push("Pedro");
// console.log(estudiantes);

// Eliminar el ultimo elemento
estudiantes.pop();
// console.log(estudiantes);

// Eliminar el primer elemento
estudiantes.shift();
// console.log(estudiantes);

// Recorrer el arreglo con for tradicional
console.log("Arreglo recorrido con For");
for (let i = 0; i < estudiantes.length; i++) {
  console.log(estudiantes[i]);
}

// Recorrer el arreglo con for each
console.log("\nArreglo recorrido con ForEach");
estudiantes.forEach((element, index) => {
  console.log(element);
  // console.log(element);
});

// Recorrer el arreglo con let
console.log("\nArreglo recorrido con Let");
for (let element of estudiantes) {
  console.log(element);
}

// Recorrer el arreglo con map
// Esta opción devuelve un nuevo arrefglo
console.log("\nArreglo recorrido con Map");
let student = estudiantes.map((est, index) => est + " " + (index + 1));

console.log("Normal", estudiantes);
console.log("Map", student);

// Imprmir un dato especifico
// estudiantes.forEach((element) => {
//   element == estudiantes[0] ? console.log(element) : "";
// });

console.log("");

// let numeros = [];
// numeros[0] = 0;
// numeros[1] = 1;
// numeros[2] = 2;
// console.log(numeros);

// Llenar un arreglo con ciclo for
// let array = [];
// suma = 0;

// for (let index = 1; index <= 5; index++) {
//   array.push(index);
// }

// Imprimir un arreglo con ciclo for tradicional
// sumando sus elementos
// for (let index = 0; index < array.length; index++) {
//   console.log(array[index]);
//   suma += array[index];
// }

// Imprimir un arreglo con foreach
// sumando sus elementos
// array.forEach((element) => {
//   suma += element;
// });

// console.log(suma);

let sumaNun = [18, 16, 23, 12, 19];

// Ejercicio mayor y menor en un arreglo
// let mayor = sumaNun[0];
// let menor = sumaNun[0];

// for (i = 1; i < sumaNun.length; i++) {
//   if (sumaNun[i] > mayor) {
//     mayor = sumaNun[i];
//   }
//   if (sumaNun[i] < menor) {
//     menor = sumaNun[i];
//   }
// }
// console.log(`El mayor es:${mayor}`);
// console.log(`El menor es:${menor}`);

// Ejercicio suma pares e impares en un arreglo
let sumaPar = 0;
let sumaImpar = 0;
let pares = 0;
let impares = 0;

// solucion con foreach
// sumaNun.forEach((element, index) => {
//   element % 2 !== 0
//     ? ((sumaImpar += element), impares++)
//     : ((sumaPar += element), pares++);
//   // console.log(index);
// });

// solucion con map
let arregloNum = sumaNun.map((element) => {
  element % 2 !== 0
    ? ((sumaImpar += element), impares++)
    : ((sumaPar += element), pares++);
  return element;
});
// console.log(arregloNum);

console.log(`La suma de los ${impares} impares es:${sumaImpar}`);
console.log(`La suma de los ${pares} pares es: ${sumaPar}`);

// Ejercicio arreglo de tamaño aleatorio
// let aleat = Math.floor(Math.random() * 5) + 1;
// let numerosAleatorios = [];
// alert(`El arreglo tiene ${aleat} posiciones`);
// for (let i = 0; i < aleat; i++) {
//   numerosAleatorios[i] = parseInt(
//     prompt(`Escriba el número de la posicion ${i}: `)
//   );
// }
// console.log(numerosAleatorios);

// alert(`El array que creaste es: [${numerosAleatorios}]`);
