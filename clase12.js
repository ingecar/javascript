/**
 * Programacion orientada a objetos en Javascript
 */

// Definir un objeto
let carro = {
  marca: "Mazda",
  color: "Rojo",
  Modelo: 2024,
  encender() {
    return "Encendido..";
  },
  cambiarColor(color) {
    this.color = color;
  },
};

// Agregar una caracteristica
// carro.importado = true;

// Modificar una caracteristica
// carro.color = "Azul";
// carro.cambiarColor("Verde");

// Imprimir un objeto
// console.log("Primer Vehiculo:", carro);

// invocar la funcion dentro de un objeto
// console.log(`\nEl modelo es: ${carro.Modelo}`);

// invocar la funcion dentro de un objeto
// console.log("\nVehiculo", carro.encender());

// Creacion de clase basica

// class persona {
//   constructor(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
//   }

//   saludar() {
//     console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
//   }
// }

// Creacion de clase con buenas prácticas (getters y setters)
class persona {
  // constructor
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }
  //   getters y setters
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }

  get edad() {
    return this._edad;
  }
  set edad(edad) {
    this._edad = edad;
  }

  saludar() {
    console.log(`Hola soy ${this._nombre} y tengo ${this._edad} años`);
  }
}

let p1 = new persona("jorge", 32);
let p2 = new persona("Angela", 38);
let p3 = new persona("Fernando", 58);

p1.nombre = "Alberto";
p1.edad = 23;

p1.saludar();
p2.saludar();
p3.saludar();

console.log("");

console.log(p1.nombre);
console.log(p2);
console.log(p3);
