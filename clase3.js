/** Estructura condicionales switch
 * switch normal (ideal para valores fijos)
 * switch(true) (ideal para condiciones complejas):
 */

// Ejemplo 1 switch (normal)
// let dia = 7;

// switch (dia) {
//   case 1:
//     console.log("Es Lunes");
//     break;
//   case 2:
//     console.log("Es Martes");
//     break;
//   case 3:
//     console.log("Es Miercoles");
//     break;
//   case 4:
//     console.log("Es Jueves");
//     break;
//   case 5:
//     console.log("Es Viernes");
//     break;
//   case 6:
//     console.log("Es Sabado");
//     break;
//   case 7:
//     console.log("Es Domingo");
//     break;

//   default:
//     console.log("El dÍa no existe");
//     break;
// }

// Ejemplo 2 switch (normal)
// let operador = "+";

// switch (operador) {
//   case "+":
//     console.log("Suma");
//     break;
//   case "-":
//     console.log("Resta");
//     break;
//   case "*":
//     console.log("Multiplicación");
//     break;
//   case "/":
//     console.log("División");
//     break;

//   default:
//     console.log("El operador no existe");
//     break;
// }

// Ejemplo 1 switch (true)
let edad = 25;

switch (true) {
  case edad < 18:
    console.log("Eres menor de edad.");
    break;
  case edad >= 18 && edad <= 30:
    console.log("Eres joven adulto.");
    break;
  case edad > 30 && edad <= 60:
    console.log("Eres adulto.");
    break;
  case edad > 60:
    console.log("Eres adulto mayor.");
    break;

  default:
    console.log("No se pudo determinar la categoría de edad.");
}

// 1000

// Ejercicio 1 de clase convertir entre monedas
let cantidad = parseInt(prompt("Ingrese la cantidad en pesos"));
let moneda = parseInt(
  prompt("Ingrese la moneda a convertir 1: Dollar, 2: Euro, 3: Libra")
);

let dolar = 4280;
let euro = 4728;
let libra = 5601;

switch (moneda) {
  case 1:
    console.log(`La cantidad en Dolares es: ${cantidad / dolar}`);
    break;
  case 2:
    console.log(`La cantidad en Euros es: ${cantidad / euro}`);
    break;
  case 3:
    console.log(`La cantidad en Libras es: ${cantidad / libra}`);
    break;

  default:
    console.log("Ingrese una opción correcta");
    break;
}
