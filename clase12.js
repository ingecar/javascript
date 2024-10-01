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
// las clases se definen con PascalCase
// Funciones y variables camelCase

class Persona {
  // constructor
  constructor(nombre, edad) {
    // Se usa _ para diferenciar la variable por parametro de los metodos
    // En el constructor se declaran las variables de la clase
    this._nombre = nombre;
    // Validación directa en el constructor
    edad > 0
      ? (this._edad = edad)
      : console.log("Edad no modificada, ingrese una edad valida");
  }
  // getters y setters por buenas practicas para no violar
  // el principio de encapsulamiento
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
    edad > 0
      ? (this._edad = edad)
      : console.log("Edad no modificada, ingrese una edad valida");
  }
  //   Metodos de la clase
  saludar() {
    console.log(`Hola soy ${this._nombre} y tengo ${this._edad} años`);
  }
}

// let p1 = new Persona("jorge", 28);
// De esta forma de accede directamente a las variables
// pero es una mala practica deben usarse getters y setters
// p1._edad = 0;

// Accediendo al setter y getter de edad
// p1.edad = 0;
// console.log(p1.edad);
// Accediendo a una metodo saludar
// p1.saludar();

// Ejemplo 2
class Libro {
  constructor(titulo, autor, paginas) {
    this._titulo = titulo;
    this._autor = autor;
    this._paginas = paginas;
  }

  get titulo() {
    return this._titulo;
  }
  set titulo(titulo) {
    this._titulo = titulo;
  }
  get autor() {
    return this._autor;
  }
  set autor(autor) {
    this._autor = autor;
  }
  get paginas() {
    return this._paginas;
  }
  set paginas(paginas) {
    this._paginas = paginas;
  }

  mostrarinfo() {
    console.log(
      `El titulo del libro es: ${this._titulo}, su autor es: ${this._autor} y tiene ${this._paginas} Páginas`
    );
  }
}
// Creacion del objeto

let l1 = new Libro("El principito", "Antoine", 200);
let l2 = new Libro("El alquimista", "Mario", 240);

// acceso al setter
// console.log(`El autor del libro uno es: ${l1.autor}`);

// acceso al setter para modificar el autor
l1.autor = "newAutor";

let l3 = new Libro("El principito", "Antoine", 200);

// acceso a una funcion que muestra info del libro
// l1.mostrarinfo();
// l2.mostrarinfo();

// Ejemplo 3
class Producto {
  // constructor
  constructor(nombre, precio, cantidad) {
    this._nombre = nombre;
    this._precio = precio;
    cantidad > 0
      ? (this._cantidad = cantidad)
      : ((this._cantidad = 0),
        console.log("La cantidad no puede ser negativa, se agrego un 0"));
  }
  // getters y setters
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get precio() {
    return this._precio;
  }
  set precio(precio) {
    this._nombre = precio;
  }
  get cantidad() {
    return this._cantidad;
  }
  set cantidad(cantidad) {
    this._nombre = cantidad;
  }
  // Métodos

  mostrarProducto() {
    console.log(
      `El nombre del producto es: ${this._nombre}, el precio es $${this._precio} y la cantidad es ${this._cantidad}`
    );
  }
  mostrarNommbreProducto() {
    console.log(`El nombre del producto es: ${this._nombre}`);
  }
  valorTotal() {
    return this._precio * this._cantidad;
  }
  modificarCantidad(cantidad) {
    cantidad > 0
      ? (this._cantidad = cantidad)
      : console.log("Cantidad no modificada, ingrese un valor mayor a cero");
  }
}
// let prod1 = new Producto("Lapiz", 1200, 0);

let nommbre = prompt("ingrese el nombre del producto");
let precio = parseFloat(prompt("ingrese el precio del producto"));
let cantidad = parseInt(prompt("ingrese la cantidad del producto"));

let prod1 = new Producto(nommbre, precio, cantidad);
let prod2 = new Producto("Borrador", 600, 1);

prod1.mostrarProducto();
prod2.mostrarProducto();
// prod2.modificarCantidad(-3);

// console.log(`Èl valor total del producto 1 es: ${prod1.valorTotal()}`);
console.log(
  `Èl valor total del inventario del producto ${
    prod1.nombre
  } es: $${prod1.valorTotal()}`
);
console.log(
  `Èl valor total del inventario del producto ${
    prod2.nombre
  } es: $${prod2.valorTotal()}`
);

// prod1.mostrarNommbreProducto();
// prod2.mostrarNommbreProducto();
// console.log(prod2.nombre);

// prod1.modificarCantidad(0);
// prod2.mostrarNommbreProducto();
