export default class TarjetaIngreso {
    constructor(costo, ingresos, nombre, numNegocios, nivel, estado) {
      this.costo = costo;
      this.ingresos = ingresos;
      this.nombre = nombre;
      this.numNegocios = numNegocios;
      this.nivel = nivel;
      this.estado = estado;
    }
  
    calcularRentabilidad() {
      return this.ingresos - this.costo;
    }
  
    cambiarEstado(nuevoEstado) {
      this.estado = nuevoEstado;
    }
  }
  