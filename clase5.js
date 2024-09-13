// Ejercicio 1
/**
 * Numero par o impar
 */
// let numero = parseInt(prompt("Ingrese un numero mayor que cero:"));
// let condicion = numero % 2 == 0;

// switch (condicion) {
//   case true:
//     console.log("es par");
//     break;
//   case false:
//     console.log("es impar");
//     break;

//   default:
//     console.log("Ingrese un numero valido");
//     break;
// }

// Ejercicio 2
/**
 * Los clientes de un Restaurante pueden pedir del menú: Carne, Pescado o Ensalada.
 * Si pide Carne se le ofrecerá como bebida vino tinto
 * Si pide Pescado se le ofrecerá vino blanco
 * Si pide Ensalada se le ofrecerá agua
 * Si no elije el menú de la lista aparecerá la frase: “elija carne, pescado o ensalada.”
 * Ejemplo: he pedido carne, el ejercicio mostrará "¿Desea beber vino tinto?"
 */

// let menu = prompt("Elija el menu: \n carne - percado - ensalada").toLowerCase();
// switch (menu) {
//   case "carne":
//     console.log("¿Desea beber vino tinto?");
//     break;
//   case "pescado":
//     console.log("¿Desea beber vino blanco?");
//     break;
//   case "ensalada":
//     console.log("¿Desea agua?");
//     break;
//   default:
//     console.log("Elija carne, pescado o ensalada.");
//     break;
// }

/**
 * A partir de un número de mes digitado por un usuario el programa debe indicar la estación del año.
 * Las estaciones serán 12,1,2: Invierno. 3,4,5 primavera, 6,7,8 verano y 9,10,11 otoño
 * Si tecleo el 3 el script me responderá que estamos en Primavera
 */

// let estacion = parseInt(prompt("Escriba un numero de 1 y 12 para la estacion"));
// switch (estacion) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("Invierno");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Primavera");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Verano");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Otoño");
//     break;

//   default:
//     console.log("Estacion desconocida");
//     break;
// }

// Ejercicio 4
/**
 * En una sala de juegos existen cuatro salas: Consolas, Juegos 2D, Juegos 3D y
Realidad Virtual.
Si un usuario paga 4 créditos puede acceder a todas,
si paga 3 solo podrá acceder a las tres primeras,
Si paga 2 a las dos primeras 
si paga 1 solo a la primera sala.

Tecleo que pago 2 créditos, el script me dirá que puedo acceder a las salas de
consola y juegos 2D.
 */

// let creditos = parseInt(
//   prompt("Bienvenido a la sala de juegos: Ingresa tu numero de creditos")
// );

// switch (creditos) {
//   case 4:
//     console.log("Puedes ingresar a todas las salas");
//     break;
//   case 3:
//     console.log("Puedes ingresar a las salas Consolas, Juegos 2D y Juegos 3D");
//     break;
//   case 2:
//     console.log("Puedes ingresar a las salas de Consolas y Juegos 2D");
//     break;
//   case 1:
//     console.log("Puedes ingresar solo a la salas de Consolas");
//     break;

//   default:
//     console.log("Indica un numero válido de créditos entre 1 y 4");
//     break;
// }

// Ejercicio 5
/**
 * Un comerciante hace descuentos a sus clientes de la siguiente forma:
Si ha comprado menos de 100 mil pesos no hay descuento
Si la compra está entre 100 mil y 300 mil pesos le descuenta un 5%
Si la compra está por encima de 300 mil hasta 500 mil pesos le descuenta un 10%
Si la compra supera los 400 mil pesos le descuenta un 15%
Es decir: hago una compra de 150 mil: pago 150000 - 5% de 150000, o sea 142,500 pesos.
 */

let compra = parseInt(prompt("Ingrese el valor de la compra: "));

switch (true) {
  case compra > 0 && compra <= 100000:
    console.log(`El valor a pagar es: ${compra}`);
    break;
  case compra > 100000 && compra <= 300000:
    console.log(
      `Su compra con descuento del 5% es: ${compra - (compra * 5) / 100}`
    );
    break;
  case compra > 300000 && compra <= 400000:
    console.log(
      `Su compra con descuento del 10% es: ${compra - (compra * 10) / 100}`
    );
    break;
  case compra > 400000:
    console.log(
      `Su compra con descuento del 15% es: ${compra - (compra * 15) / 100}`
    );
    break;

  default:
    console.log("Ingrese un monto valido de compra");
    break;
}
