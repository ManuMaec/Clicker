<script setup>
import { ref, onMounted, reactive } from "vue";
import TarjetaIngresos from "../Classes/TarjetaIngresos.js";
import TarjetaEgresos from "../Classes/TarjetaEgresos.js";
import { Jugador } from "../Classes/Jugador.js";

let msg = ref(null);
let entre = ref("Quita eso de mi cara");
let leave = ref("Gracias, basura... Hola con reactividad atentamente dios");

let jugador = reactive(new Jugador(0, 0, 0, 0, 0, 1, 1, 1, 1, [], []));

const sumarPersonas = () => {
  kk.value == 0? kk.value = 1 : kk.value = 0;
  jugador.sumarPersonas();
};
const sumarPuntos = () => {
  kk.value == 0? kk.value = 1 : kk.value = 0;
  jugador.sumarPuntos();
};

let tarjetaIngresos = new TarjetaIngresos(
  100,
  500,
  "Mi Tarjeta",
  3,
  "Premium",
  "desbloqueado"
);

let tarjetaEgresos = new TarjetaEgresos(
  50,
  200,
  150,
  "Mi Otra Tarjeta",
  "Básico",
  "desbloqueado"
);

let kk = ref(0);

onMounted(() => {
  msg.value = "Hola con reactividad atentamente dios";
});
</script>
<template>
  <main>
    <h1
      @click="() => (msg = msg + '!')"
      @mouseenter="() => (msg = entre)"
      @mouseleave="() => (msg = leave)"
    >
      Hola mundo
    </h1>
    <h2 @click="kk += 1" v-show="false">{{ kk }}</h2>
    <h3>{{ msg }}</h3>
    <main>
      <button @click="sumarPersonas">Sumar personas</button>
      <button @click="sumarPuntos">Sumar puntos</button>
    </main>
    <header>
      <h4>Personas: {{ jugador.personas }}</h4>
      <h4>Puntos: {{ jugador.puntos }}</h4>
    </header>

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
  </main>
</template>