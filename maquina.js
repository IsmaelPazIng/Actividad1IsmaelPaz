class Maquina_exp {
  constructor(saldo, producto) {
    this.saldo = saldo;
    this.producto = producto;
  }
  introducirMoneda(moneda) {
    this.saldo = this.saldo + moneda;
    alert("su saldo actual es" + this.saldo);
  }
  seleccionarProducto(moneda) {
    if (this.producto <= 0) {
      alert("ya no quedan productos en la maquina");
    }
    if (this.saldo <= 0) {
      alert("su saldo es insuficiente");
    }
    if (this.producto > 0 && this.saldo > 0) {
      this.producto = this.producto - moneda;
      this.saldo = this.saldo - moneda;
    }

    alert(
      "su saldo actual es" +
        this.saldo +
        "y quedan" +
        this.producto +
        "productos"
    );
  }
  solicitarDevolucion(moneda) {
    this.saldo = moneda - moneda;
    alert("su saldo actual es" + this.saldo);
  }
  saldoActual() {
    alert("tu saldo actual es" + this.saldo);
  }
  numero_de_productos() {
    alert("existe" + this.producto + "en esta maquina");
  }
}
