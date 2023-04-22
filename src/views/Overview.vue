<script setup>

import { ref, onMounted, reactive } from "vue";

let msg = ref(null);
let entre = ref("Quita eso de mi cara");
let leave = ref ("Gracias, basura... Hola con reactividad atentamente dios");

let jugador = reactive({
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

const sumarPersonas = ()=>{
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
</template>