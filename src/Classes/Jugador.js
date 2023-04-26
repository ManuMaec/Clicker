export default class Jugador {
  constructor() {
    this.personas = 0;
    this.puntos = 10;
    this.ingresosTotales = 0;
    this.egresosTotales = 0;
    this.ingresosPersonas = 0;
    this.multiplicadorIngresos = 1;
    this.multiplicadorEgresos = 1;
    this.multiplicadorIngresosPersonas = 1;
    this.multuplicadorEgresosPersonas = 1;
    this.buffos = [];
    this.debuffos = [];
  }

  sumarPersonas = () => {
    this.personas++;
    console.log(this.personas);
    return;
  };
  sumarPuntos = () => {
    console.log(this.ingresosTotales);
    this.puntos += this.ingresosTotales
    return;
  };
}
