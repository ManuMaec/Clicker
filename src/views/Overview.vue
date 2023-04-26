<script setup>
import { ref, onMounted, reactive, watch } from "vue";

// Classes
import TarjetaIngresos from "../Classes/TarjetaIngresos.js";
import TarjetaEgresos from "../Classes/TarjetaEgresos.js";
import Jugador from "../Classes/Jugador.js";

// Components
import CardIngresos from "../components/TarjetaIngresos.vue";
import TarjetaIngreso from "../Classes/TarjetaIngresos.js";

// info de tarjetas

const tarjetas = ref([
  {
    costo: 10,
    ingresos: 0.2,
    nombre: "Florerias",
    numNegocios: 0,
    nivel: 0,
    estado: false,
  },
  {
    costo: 30,
    ingresos: 0.7,
    nombre: "Cafeteria",
    numNegocios: 0,
    nivel: 0,
    estado: false,
  },
  {
    costo: 80,
    ingresos: 1.5,
    nombre: "Tecno Store's",
    numNegocios: 0,
    nivel: 0,
    estado: false,
  },
  {
    costo: 140,
    ingresos: 2,
    nombre: "Ciness",
    numNegocios: 0,
    nivel: 0,
    estado: false,
  },
  {
    costo: 170,
    ingresos: 2.2,
    nombre: "Pescaderias",
    numNegocios: 0,
    nivel: 0,
    estado: false,
  },
  {
    costo: 250,
    ingresos: 2.4,
    nombre: "Panaderias",
    numNegocios: 0,
    nivel: 0,
    estado: false,
  },
  {
    costo: 340,
    ingresos: 2.7,
    nombre: "Carnicerias",
    numNegocios: 0,
    nivel: 0,
    estado: false,
  },
  {
    costo: 490,
    ingresos: 3.2,
    nombre: "Cines",
    numNegocios: 0,
    nivel: 0,
    estado: false,
  },
  {
    costo: 530,
    ingresos: 3.4,
    nombre: "Paint ball's",
    numNegocios: 0,
    nivel: 0,
    estado: false,
  },
  {
    costo: 600,
    ingresos: 3.9,
    nombre: "Talleres automotriz",
    numNegocios: 0,
    nivel: 0,
    estado: false,
  },
  {
    costo: 700,
    ingresos: 5,
    nombre: "Visitas al cielo",
    numNegocios: 0,
    nivel: 0,
    estado: false,
  },
]);

const jugador = reactive(new Jugador());

let kk = ref(0);

watch(() => {
  let ingresos = 0;
  console.log(`ingresos ${ingresos}` + typeof ingresos);
  tarjetas.value.forEach((e) => {
    if (e.estado === true) {
      ingresos += ( e.ingresos * e.numNegocios ) ;
      console.log(`elemento ${e.ingresos}` + typeof e.ingresos);
    }
  });

  jugador.ingresosTotales = ingresos;
});

const redondear = (numero, decimales) => {
  if (typeof numero != "number" || typeof decimales != "number") {
    return null;
  }

  let signo = numero >= 0 ? 1 : -1;

  return (
    Math.round(numero * Math.pow(10, decimales) + signo * 0.0001) /
    Math.pow(10, decimales)
  ).toFixed(decimales);
};

onMounted(() => {
  setInterval(() => {
    jugador.sumarPuntos();
    kk.value === 1 ? (kk.value = 0) : (kk.value = 1);
  }, 1000);
});
</script>
<template>
  <section>
    Puntos: {{ redondear(jugador.puntos, 2) }} ---- Personas:
    {{ jugador.personas }} --- Ingresos Totales:
    {{ redondear(jugador.ingresosTotales, 2) }}
  </section>
  <main class="main">
    <p v-show="false">{{ kk }}</p>
    <section class="main__card-carrousel">
      <CardIngresos
        v-for="e in tarjetas"
        :key="e.nombre"
        :costo="e.costo"
        :ingresos="e.ingresos"
        :nombre="e.nombre"
        :numNegocios="e.numNegocios"
        :nivel="e.nivel"
        :estado="e.estado"
        :cambiarEstado="
          () => {
            if (jugador.puntos >= e.costo) {
              jugador.puntos -= e.costo
              e.estado = true;
              e.numNegocios++;
              e.nivel++;
            }else{ alert('Usted no tiene los puntos necesarios') }
          }
        "
        :sumarNegocio="
          () => {
            e.numNegocios++;
          }
        "
        :subirNivel="
          () => {
            e.nivel++;
          }
        "
      />
    </section>
    <section class="main__card-carrousel"></section>
    <section class="main__card-carrousel"></section>
  </main>
</template>