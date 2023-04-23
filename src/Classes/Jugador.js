export default class Jugador {
  constructor(
    personas,
    puntos,
    ingresosTotales,
    egresosTotales,
    ingresosPersonas,
    multiplicadorIngresos,
    multiplicadorEgresos,
    multiplicadorIngresosPersonas,
    multuplicadorEgresosPersonas,
    buffos,
    debuffos
  ) {
    this.personas = personas;
    this.puntos = puntos;
    this.ingresosTotales = ingresosTotales;
    this.egresosTotales = egresosTotales;
    this.ingresosPersonas = ingresosPersonas;
    this.multiplicadorIngresos = multiplicadorIngresos;
    this.multiplicadorEgresos = multiplicadorEgresos;
    this.multiplicadorIngresosPersonas = multiplicadorIngresosPersonas;
    this.multuplicadorEgresosPersonas = multuplicadorEgresosPersonas;
    this.buffos = buffos;
    this.debuffos = debuffos;
  }
  
  sumarPersonas = () => {
    this.personas++;
    console.log(this.personas);
  };
  sumarPuntos = () => {
    this.puntos++;
    console.log(this.puntos);
  };
}
