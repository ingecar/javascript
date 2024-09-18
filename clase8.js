// /**
//  * Ejercicio conversor de temperaturas con estructuras repetitivas dowhile y while
//  */

let valor;
let resultado;
let opcion;
let estado = true;

do {
  opcion = prompt(
    "Digite la opcion de conversor a utilizar \n 1. Kelvin a Celcius \n 2. Kelvin a Fahrenheit \n 3. Celcius a Kelvin \n 4. Fahrenheit a Kelvin\n 5. salir"
  );

  switch (opcion) {
    case "1":
      valor = parseInt(prompt("Digite el valor de la tempetarura:"));
      if (valor < 0 || Number.isNaN(valor)) {
        alert("Por favor, ingrese un número positivo válido.");
        continue;
      }
      resultado = valor - 273.15;
      alert(`Convertir ${valor}Kelvin a Celcius es: ${resultado.toFixed(2)}`);
      break;
    case "2":
      valor = parseInt(prompt("Digite el valor de la tempetarura:"));
      if (valor < 0 || Number.isNaN(valor)) {
        alert("Por favor, ingrese un número positivo válido.");
        continue;
      }
      resultado = (9 * (valor - 273.15)) / 5 + 32;
      alert(
        `Convertir ${valor} Kelvin a Fahrenheit es: ${resultado.toFixed(2)}`
      );
      break;
    case "3":
      valor = parseInt(prompt("Digite el valor de la tempetarura:"));
      if (valor < 0 || Number.isNaN(valor)) {
        alert("Por favor, ingrese un número positivo válido.");
        continue;
      }
      resultado = valor + 273.15;
      alert(`Convertir ${valor} Celcius a Kelvin es: ${resultado.toFixed(2)}`);
      break;
    case "4":
      valor = parseInt(prompt("Digite el valor de la tempetarura:"));
      if (valor < 0 || Number.isNaN(valor)) {
        alert("Por favor, ingrese un número positivo válido.");
        continue;
      }
      resultado = (5 * (valor - 32)) / 9 + 273.15;
      alert(
        `Convertir ${valor} Fahrenheit a Kelvin es: ${resultado.toFixed(2)}`
      );
      break;
    case "5":
      estado = !estado;
      alert("finalizando...");
      break;

    default:
      alert("ingrese una opcion valida");
      break;
  }
} while (estado);

// while (estado) {
//   opcion = prompt(
//     "Digite la opcion de conversor a utilizar \n 1. Kelvin a Celcius \n 2. Kelvin a Fahrenheit \n 3. Celcius a Kelvin \n 4. Fahrenheit a Kelvin\n 5. salir"
//   );
//   switch (opcion) {
//     case "1":
//       valor = parseInt(prompt("Digite el valor de la tempetarura:"));
//       if (valor < 0 || Number.isNaN(valor)) {
//         alert("Por favor, ingrese un número positivo válido.");
//         continue;
//       }
//       resultado = valor - 273.15;
//       alert(`Convertir ${valor}Kelvin a Celcius es: ${resultado.toFixed(2)}`);
//       break;
//     case "2":
//       valor = parseInt(prompt("Digite el valor de la tempetarura:"));
//       if (valor < 0 || Number.isNaN(valor)) {
//         alert("Por favor, ingrese un número positivo válido.");
//         continue;
//       }
//       resultado = (9 * (valor - 273.15)) / 5 + 32;
//       alert(
//         `Convertir ${valor} Kelvin a Fahrenheit es: ${resultado.toFixed(2)}`
//       );
//       break;
//     case "3":
//       valor = parseInt(prompt("Digite el valor de la tempetarura:"));
//       if (valor < 0 || Number.isNaN(valor)) {
//         alert("Por favor, ingrese un número positivo válido.");
//         continue;
//       }
//       resultado = valor + 273.15;
//       alert(`Convertir ${valor} Celcius a Kelvin es: ${resultado.toFixed(2)}`);
//       break;
//     case "4":
//       valor = parseInt(prompt("Digite el valor de la tempetarura:"));
//       if (valor < 0 || Number.isNaN(valor)) {
//         alert("Por favor, ingrese un número positivo válido.");
//         continue;
//       }
//       resultado = (5 * (valor - 32)) / 9 + 273.15;
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
// }
