
<script setup>
import { ref, onMounted, reactive } from "vue";
import TarjetaIngresos from '../Classes/TarjetaIngresos';
import TarjetaEgresos from '../Classes/TarjetaEgresos';

const msg = ref(null);
const entre = ref("Quita eso de mi cara");
const leave = ref("Gracias, basura... Hola con reactividad atentamente dios");

const jugador = reactive({
  personas: 0,
  puntos: 0,
  ingresosTotales: 0,
  egresosTotales: 0,
  ingresosPersonas: 0,
  multiplicadorIngresos: 1,
  multiplicadorEgresos: 1,
  multiplicadorIngresosPersonas: 1,
  multuplicadorEgresosPersonas: 1,
  buffos: [],
  debuffos: []
});

const tarjetaIngresos = new TarjetaIngresos(
  100,
  500,
  "Mi Tarjeta",
  3,
  "Premium",
  "desbloqueado"
);

const tarjetaEgresos = new TarjetaEgresos(
  50,
  200,
  150,
  "Mi Otra Tarjeta",
  "Básico",
  "desbloqueado"
);

const sumarPersonas = () => {
  jugador.personas++;
};
const sumarPuntos = () =>{
  jugador.puntos++;
}

onMounted(()=>{
  msg.value = "Hola con reactividad atentamente dios";
});
</script>
<template>
    <h1 
      @click="() => msg = msg+'!'" 
      @mouseenter=" () => msg=entre" 
      @mouseleave=" () => msg = leave"
    >
      Hola mundo
    </h1>
    <h3>{{msg}}</h3>
    <header>
      <h1>Personas: {{ jugador.personas }}</h1>
      <h1>Puntos: {{ jugador.puntos }}</h1>
    </header>
    <main>
      <button @click="sumarPersonas()">Sumar personas</button>
      <button @click="sumarPuntos()">Sumar puntos</button>
    </main>

    <h1>TAJETAS</h1>
    <div>
      <div>
        <h3>Tarjeta de Ingresos</h3>
        <p>Nombre: {{ tarjetaIngresos.nombre }}</p>
        <p>Ingresos: {{ tarjetaIngresos.ingresos }}</p>
        <p>Costo: {{ tarjetaIngresos.costo }}</p>
        <p>Número de Negocios: {{ tarjetaIngresos.numeroNegocios }}</p>
        <p>Nivel: {{ tarjetaIngresos.nivel }}</p>
        <p>Estado: {{ tarjetaIngresos.estado }}</p>
      </div>
      <div>
        <h3>Tarjeta de Egresos</h3>
        <p>Nombre: {{ tarjetaEgresos.nombre }}</p>
        <p>Ingresos de Personas: {{ tarjetaEgresos.ingresosPersonas }}</p>
        <p>Egresos: {{ tarjetaEgresos.egresos }}</p>
        <p>Costo: {{ tarjetaEgresos.costo }}</p>
        <p>Nivel de Servicio: {{ tarjetaEgresos.nivelServicio }}</p>
        <p>Estado: {{ tarjetaEgresos.estado }}</p>
      </div>
    </div>
</template>