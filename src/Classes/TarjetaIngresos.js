export default class TarjetaIngreso {
  constructor(costo, ingresos, nombre, numNegocios, nivel, estado) {
    this.costo = costo;
    this.ingresos = ingresos;
    this.nombre = nombre;
    this.numNegocios = numNegocios;
    this.nivel = nivel;
    this.estado = estado;
  }

  desbloquearTarjeta() {
    this.estado = true;
    this.numNegocios++;
    this.nivel++;
    return;
  }

  sumarNegocio() {
    this.numNegocios++;
    return;
  }

  subirNivel() {
    this.nivel ++;
    return;
  }
}
