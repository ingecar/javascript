/**
 * Ejercicio somulacion de cajero online
 */

class Cuenta {
  constructor() {
    // Array de cuentas de usuario
    this._cuentas = new Array(2);
    // Array de saldos
    this._saldos = new Array(2);
  }
  //   setters y getters
  setCuenta(index, cuenta) {
    return (this._cuentas[index] = cuenta);
  }
  getCuenta(index) {
    return this._cuentas[index];
  }
  setSaldo(index, saldo) {
    return (this._saldos[index] = saldo);
  }
  getSaldo(index) {
    return this._saldos[index];
  }

  //   Metodos
  crearCuentas() {
    for (let index = 0; index < this._cuentas.length; index++) {
      let cuenta = prompt(`Ingrese el numero de cuenta ${index + 1}`);
      let saldo = parseFloat(
        prompt(`Ingrese el saldo inicial de la cuenta ${index + 1}`)
      );

      this.setCuenta(index, cuenta);
      this.setSaldo(index, saldo);
    }
  }
  consultarSaldo() {
    let cuenta = prompt(`Ingrese el numero de cuenta a consultar`);
    let index = this._cuentas.indexOf(cuenta);
    if (index !== -1) {
      alert(`El saldo de la cuenta ${cuenta} es: ${this.getSaldo(index)}`);
    } else {
      alert("Cuenta no encontrada");
    }
  }
  agregarSaldo() {
    let cuenta = prompt(`Ingrese el numero de cuenta`);
    let index = this._cuentas.indexOf(cuenta);
    let valor = parseFloat(prompt(`Ingrese el valor a consignar`));
    if (index !== -1) {
      valor += this.getSaldo(index);
      this.setSaldo(index, valor);
    } else {
      alert("Cuenta no encontrada");
    }
  }
  retirarSaldo() {
    let cuenta = prompt(`Ingrese el numero de cuenta`);
    let index = this._cuentas.indexOf(cuenta);
    let valor = parseFloat(prompt(`Ingrese el valor a retirar`));
    if (index !== -1) {
      if (valor <= this.getSaldo(index)) {
        valor = this.getSaldo(index) - valor;
        this.setSaldo(index, valor);
      } else {
        alert("Saldo insuficiente");
      }
    } else {
      alert("Cuenta no encontrada");
    }
  }
}

let menu = true;
const cta = new Cuenta();

do {
  let opcion = parseInt(
    prompt(
      "                                        << Banca Online >>\n 1. Crear cuentas\n 2. Consultar saldos \n 3. Consignar \n 4. Retirar \n 5. Salir"
    )
  );

  switch (opcion) {
    case 1:
      cta.crearCuentas();
      break;
    case 2:
      cta.consultarSaldo();
      break;
    case 3:
      cta.agregarSaldo();
      break;
    case 4:
      cta.retirarSaldo();
      break;
    case 5:
      menu = false;
      break;

    default:
      alert("Opción Incorrecta");
      break;
  }
} while (menu);
