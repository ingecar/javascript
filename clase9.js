/**
 * Ejercicios
 */

// Dibujar un triángulo rectángulo con asteriscos. El usuario
// 1 - tecleará un valor entero,
// El script escribirá con asteriscos tantas líneas como diga ese número.
// Cada línea estará formada por una serie de asteriscos tan larga como diga el número de linea en el que esta.
// Para separar una linea de la siguiente en console o en alert debes usar "\n".
// En este ejercicio usa console.log.

let num = 5;
// num = parseInt(prompt("Digite el numero de escalones del triangulo"));
let trian = "";

// solucion 1
for (let i = 0; i < num; i++) {
  trian += "*";
  console.log(trian);
}

// solucion 2
// for (let i = 1; i <= num; i++) {
//   trian = "";
//   for (let j = 0; j < i; j++) {
//     trian += "*";
//   }
//   console.log(trian);
// }

/**
 * Crea un script que pida al usuario una contraseña.
 * Si coincide con la clave definida en el script le devolverá el siguiente mensaje
 * "Acceso concedido" de lo contrario le devolverá el mensaje "Acceso Denegado" •
 * Si falla tres veces se visualizará el mensaje "Alerta, intruso tratando de acceder...
 */

let pass0 = "jorge";
let tmp = prompt("Escriba su contraseña");
let intento = 1;
let estado = true;

while (estado) {
  if (pass0 == tmp) {
    alert("Acceso Concedido");
    estado = false;
  } else {
    intento++;
    if (intento <= 3) {
      alert("Acceso denegado, intente nuevamente");
      tmp = prompt("Escriba su contraseña");
    } else {
      alert("Alerta, intruso tratando de acceder...");
      estado = false;
    }
  }
}
