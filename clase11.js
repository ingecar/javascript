/**
 * Arreglos
 */

let estudiantes = ["Juan", "Pedro", "Felipe", "Angela", "Fernando"];
console.log(estudiantes);

// Agregar elementos al inicio
estudiantes.unshift("Jorge");
console.log(estudiantes);

// Agregar elementos en la posicion 2
estudiantes.splice(2, 0, "Ildefonso");
console.log(estudiantes);

// Agregar elementos en la posicion 2
estudiantes.splice(2, 1);
console.log(estudiantes);

// Agregar elementos al final
estudiantes.push("Pedro");
console.log(estudiantes);

// Eliminar el ultimo elemento
estudiantes.pop();
console.log(estudiantes);

// Eliminar el primer elemento
estudiantes.shift();
console.log(estudiantes);

// Recorrer el arreglo
// Operaciones sobre las posiciones
estudiantes.forEach((element) => {
  console.log(element);
});

console.log("");

for (let element of estudiantes) {
  console.log(element);
}

console.log("");

// Imprmir un dato especifico
estudiantes.forEach((element) => {
  element == estudiantes[0] ? console.log(element) : "";
});

console.log("");

for (let index = 0; index < estudiantes.length; index++) {
  const element = estudiantes[index];
  console.log(element);
}

let numeros = [];
numeros[0] = 0;
numeros[1] = 1;
numeros[2] = 2;
console.log(numeros);
