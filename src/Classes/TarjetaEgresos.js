export default class TarjetaEgresos {
  constructor(costo, ingresosPersonas, egresos, nombre, nivelServicio, estado) {
    this.costo = costo;
    this.ingresosPersonas = ingresosPersonas;
    this.egresos = egresos;
    this.nombre = nombre;
    this.nivelServicio = nivelServicio;
    this.estado = estado;
  }

  calcularRentabilidad() {
    return this.ingresosPersonas - this.egresos - this.costo;
  }

  cambiarEstado(nuevoEstado) {
    this.estado = nuevoEstado;
  }
}
