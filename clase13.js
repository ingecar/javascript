/**
 * Crea una clase Termostato que tenga los atributos temperatura y estado (encendido o apagado). Debe tener métodos para subir la temperatura, bajar la temperatura, encender y apagar el termostato, y mostrar el estado actual.
 */

class Termostato {
  constructor(temperatura, estado) {
    this._temperatura = temperatura;
    this._estado = estado;
  }
  get temperatura() {
    return this._temperatura;
  }
  set temperatura(temperatura) {
    this._temperatura = temperatura;
  }
  get estado() {
    return this._estado;
  }
  set estado(estado) {
    this._estado = estado;
  }

  static crearTermostato() {
    let temperatura = 0;
    let estado = 0;
    return new Termostato(temperatura, estado);
    // do {
    //   temperatura = parseInt(prompt("Ingrese la temperatura del termostato"));
    //   if (temperatura < 0 || isNaN(temperatura)) {
    //     alert("Temperatura invalida");
    //   } else {
    //     continue;
    //   }
    // } while (isNaN(temperatura) || temperatura < 0);

    // temperatura > 0 ? (estado = 1) : (estado = 2);
    // do {
    //   estado = parseInt(
    //     prompt("Ingrese el estado: \n 1. Encendido 2. Apagado")
    //   );
    // } while (isNaN(estado) && (estado == 1 || estado == 2));
  }

  mostrarTermostato() {
    let msjEstado;
    this._estado == 1 ? (msjEstado = "Encendido") : (msjEstado = "Apagado");
    alert(
      `Temperatura del termostato: ${this._temperatura}º\nEstado: ${msjEstado}`
    );
  }

  subirTemperatura() {
    let valor = Math.floor(Math.random() * 20) + 1;
    this._temperatura += valor;
    if (this._temperatura > 100) {
      alert("Temperatura Máxima, Peligro ...");
      return (this._temperatura = 100);
    } else {
      alert("Aumentando Temperatura..");
    }
    this._estado = 1;
    return this._temperatura;
  }

  bajarTemperatura() {
    let valor = Math.floor(Math.random() * 20) + 1;
    this._temperatura -= valor;
    if (this._temperatura <= 0) {
      alert("temperatura llego a cero, Apagando...");
      return (this._temperatura = 0);
    } else {
      alert("Disminuyendo Temperatura..");
    }
    return this._temperatura;
  }

  encenderTermostato() {
    if (this._temperatura > 0) {
      this._estado = 1;
      alert("Termostato encendido");
    } else {
      alert("Aumente la temperatura primero");
    }
  }
  apagarTermostato() {
    if (this._temperatura < 50) {
      this._estado = 0;
      this._temperatura = 0;
      alert("Termostato apagado");
    } else {
      alert("No es posible apagar, disminuya la temperatura primero..");
    }
  }
  mostrarEstado() {
    this._estado == 1
      ? console.log("Termostato Encendido")
      : console.log("Termostato Apagado");
  }
}

let menu = true;
let trm;
do {
  let opcion = parseInt(
    prompt(
      "                   << Termostato Virtual, Elija una opción >>\n\n 1. Crear Termostato\n 2. Encender termostato\n 3. Apagar termostato\n 4. Aumentar temperatura\n 5. Disminuir temperatura\n 6. Ver termostato\n 7. Salir"
    )
  );

  switch (opcion) {
    case 1:
      trm = Termostato.crearTermostato();
      alert("Termostato creado!");
      break;
    case 2:
      !trm
        ? alert("El termostato no existe, debe crearlo!")
        : trm.encenderTermostato();
      break;
    case 3:
      !trm
        ? alert("El termostato no existe, debe crearlo!")
        : trm.apagarTermostato();
      break;
    case 4:
      !trm
        ? alert("El termostato no existe, debe crearlo!")
        : trm.subirTemperatura();
      break;
    case 5:
      !trm
        ? alert("El termostato no existe, debe crearlo!")
        : trm.bajarTemperatura();
      break;
    case 6:
      !trm
        ? alert("El termostato no existe, debe crearlo!")
        : trm.mostrarTermostato();
      break;
    case 7:
      menu = false;
      break;
    default:
      alert("Opción Incorrecta");
      break;
  }
} while (menu);
