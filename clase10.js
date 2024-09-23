/**
 * Funciones en Javascript
 */

// funcion sin parametros
function saludar() {
  console.log("Hola, a todos!");
}
saludar();

// funcion con parametros
function saludar_usuario(nombre) {
  console.log("Hola,", nombre);
}
saludar_usuario("jorge");

function potencia(a, b) {
  console.log(a ** b);
}
const a = 12;
const b = 2;
potencia(a, b);

// funciones flecha
let saludo = () => "Hola mundo";
let saludo1 = (nombre) => "Hola " + nombre;
let suma = (a, b) => a + b;

// funciones javascript
console.log(Math.pow(12, 2));

// Invocar funciones
console.log(saludo());
console.log(saludo1("Marisol"));
saludo1("Marisol");

console.log(`La suma de 12 + 12 es:`, suma(12, 12));

// /**
//  * Ejercicio conversor de temperaturas con estructuras repetitivas do while y funciones
//  */

// funciones flecha para la conversion

let kelvin_celcius = (valor) => {
  return valor - 273.15;
};

let kelvin_fahrenheit = (valor) => {
  return (9 * (valor - 273.15)) / 5 + 32;
};

// funciones clasicas para la conversion
function celcius_kelvin(valor) {
  return valor + 273.15;
}
function celcius_fahrenheit(valor) {
  return (5 * (valor - 32)) / 9 + 273.15;
}

// funcion validar numeros positivos
function validar(valor) {
  if (valor <= 0 || Number.isNaN(valor)) {
    alert("Por favor, ingrese un número positivo válido.");
    return true;
  } else {
    false;
  }
}

let valor;
let resultado;
let opcion;
let estado = true;

// do {
//   opcion = prompt(
//     "Digite la opcion de conversor a utilizar \n 1. Kelvin a Celcius \n 2. Kelvin a Fahrenheit \n 3. Celcius a Kelvin \n 4. Fahrenheit a Kelvin\n 5. salir"
//   );

//   switch (opcion) {
//     case "1":
//       valor = parseInt(prompt("Digite el valor de la tempetarura:"));
//       if (validar(valor)) {
//         continue;
//       }
//       resultado = kelvin_celcius(valor);
//       alert(`Convertir ${valor}Kelvin a Celcius es: ${resultado.toFixed(2)}`);
//       break;

//     case "2":
//       valor = parseInt(prompt("Digite el valor de la tempetarura:"));
//       if (validar(valor)) {
//         continue;
//       }
//       resultado = kelvin_fahrenheit(valor);
//       alert(
//         `Convertir ${valor} Kelvin a Fahrenheit es: ${resultado.toFixed(2)}`
//       );
//       break;

//     case "3":
//       valor = parseInt(prompt("Digite el valor de la tempetarura:"));
//       if (validar(valor)) {
//         continue;
//       }
//       resultado = celcius_kelvin(valor);
//       alert(`Convertir ${valor} Celcius a Kelvin es: ${resultado.toFixed(2)}`);
//       break;

//     case "4":
//       valor = parseInt(prompt("Digite el valor de la tempetarura:"));
//       if (validar(valor)) {
//         continue;
//       }
//       resultado = celcius_fahrenheit(valor);
//       alert(
//         `Convertir ${valor} Fahrenheit a Kelvin es: ${resultado.toFixed(2)}`
//       );
//       break;

//     case "5":
//       estado = !estado;
//       alert("finalizando...");
//       break;

//     default:
//       alert("ingrese una opcion valida");
//       break;
//   }
// } while (estado);
