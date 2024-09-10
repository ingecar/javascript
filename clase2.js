/** Clase 2
 * Uso de TypeOf
 * Solicitar datos al usuario
 */
console.log(typeof pi);
console.log(typeof estado);
console.log(typeof pais);
console.log(typeof nulo);

// let n1 = parseInt(prompt("Ingrese el numero 1"));
// let n2 = parseInt(prompt("Ingrese el numero 2"));

//Numeros aleatorios forma 1 de (1-50)
let aleat = Math.floor(Math.random() * 50) + 1;
console.log(aleat);

//Numeros aleatorios forma 2 de (0-49)
let aleat1 = Math.floor(Math.random() * 50);
console.log(aleat1);

//Numeros aleatorios forma 3 de (10-20)
let aleat2 = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
console.log(aleat2);

console.log(
  `Los numeros que ingtresaste son ${n1} y ${n2} y suman = ${n1 + n2}`
);

// Estructura if else
let edad = 16;
if (edad >= 18) {
  console.log(`Es mayor de edad porque tiene: ${edad}`);
} else {
  console.log(`Es menor de edad porque tiene: ${edad}`);
}

// Ejercicio 1 con sentencias if else
// let calificacion;
// calificacion = parseFloat(prompt("Ingrese la calificacion del estudiante"));

// if (calificacion < 3) {
//   console.log(`El estudiante perdio el año`);
// } else if (calificacion >= 3.0 && calificacion < 4.0) {
//   console.log(`El estudiante gano el año`);
// } else {
//   console.log(`El estudiante es brillanteo`);
// }

// Ejercicio 1 con operador ternario
// condición ? expresión1 : expresión2
// calificacion < 3 ? console.log(`Perdio el año`) : console.log(`Ganó el año`);

// Ejercicio 2 que generacion eres?
let gen;
gen = parseInt(prompt("Ingrese su año de nacimiento"));
if (gen >= 1883 && gen <= 1900) {
  console.log("Generación Perdida");
} else if (gen >= 1901 && gen <= 1924) {
  console.log("Generación Grandiosa");
} else if (gen >= 1925 && gen <= 1945) {
  console.log("Generación Silenciosa");
} else if (gen >= 1946 && gen <= 1964) {
  console.log("Generación Boomers");
} else if (gen >= 1965 && gen <= 1980) {
  console.log("Generación X");
} else if (gen >= 1981 && gen <= 1996) {
  console.log("Generación Y");
} else if (gen >= 1997 && gen <= 2012) {
  console.log("Generación Z");
} else if (gen >= 2013 && gen <= 2025) {
  console.log("Generación Alpha");
} else {
  console.log("No perteneces a estas generaciones");
}
