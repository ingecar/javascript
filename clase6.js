/**
 * Tipos de errores en Js
 */

// SyntaxError
// a 0;

// TypeError
// a.pop();

// ReferenceError
// console.log(a / c);

//RangeError
// (10).toString(100);

/**
 * Estructuras repetitivas while and dowhile
 */
// prompt(
//   "seleccione una opcion: \n 1. Opción 1 \n 2. Opción 2 \n 3. Opción 3 \n 4. Opción 4"
// );

// let num;
// let sum = 0;
// while ((num = parseInt(prompt("Ingrese un numero positivo: "))) > 0) {
//   sum += num;
//   console.log(sum);
// }
// console.log("la suma total es:", sum);

let opcion;
let estado = true;
let coseno, seno, raiz, numero;

// opciones realizar un calculo matemático

// 1. Raiz
// 2. Seno
// 3. Coseno

while (estado) {
  opcion = parseInt(
    prompt(
      `SELECCIONE UN OPCION \n 1. Raiz \n 2. Seno de N1 \n 3. Coseno N1 \n 4. Salir`
    )
  );

  switch (opcion) {
    case 1:
      alert("Selecciono Raiz");
      numero = parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR LA RAIZ`));
      raiz = Math.sqrt(numero);
      alert(`LA RAIZ DE ${numero} ES: ${raiz}`);
      break;
    case 2:
      alert("Selecciono Seno N1");
      numero = parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR EL SENO`));
      seno = Math.sin(numero);
      alert(`EL SENO DE ${numero} ES: ${seno}`);
      break;

    case 3:
      alert("Selecciono Coseno N1");
      numero = parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR EL COSENO`));
      coseno = Math.cos(numero);
      alert(`EL SENO DE ${numero} ES: ${coseno}`);
      break;

    case 4:
      alert("SALIENDO....");
      estado = falso;
      break;

    default:
      alert("LA OPCION NO EXISTE");
      break;
  }
}
