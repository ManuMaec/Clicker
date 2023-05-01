<script setup>
import { ref, toRefs, onMounted } from "vue";

const props = defineProps({
  nombre: String,
  costo: Number,
  ingresosPersonas: Number,
  egresos: Number,
  numServicios: Number,
  nivel: Number,
  estado: Boolean,
  cambiarEstado: Function,
  sumarServicio: Function,
  subirNivel: Function
});

const { nombre, costo, ingresosPersonas, egresos, numServicios, nivel, estado } = toRefs(props);

let isHover = ref(false);

const entre = ()=>{
  isHover.value = true;
}
const sali = ()=>{
  isHover.value = false;
}

</script>

<template>
  <div class="profit-card"
    @mouseenter="entre()"
    @mouseleave="sali()"
  >
    <div class="profit-card-locke" v-if="!estado">
      <h1 class="profit-card--title">{{ nombre }}</h1>
      <p class="profit-card--atributes">Ingresos Personas: {{ ingresosPersonas }}</p>
      <p class="profit-card--atributes">Egresos: {{ egresos }}</p>
      <p class="profit-card--atributes">Costo: {{ costo }}</p>
      <button class="profit-card--button" @click="props.cambiarEstado()">desbloquear</button>
      </div>
      <div
      class="profit-card-unlocke"
      v-else
      :style=" isHover? 'opacity: 1' : 'opacity: 0' "
      >
      <h1 class="profit-card--title">{{ nombre }}</h1>
      <p class="profit-card--atributes">Ingresos: {{ ingresosPersonas }}</p>
      <p class="profit-card--atributes">Egresos: {{ egresos }}</p>
      <p class="profit-card--atributes">Nivel: {{ nivel }}</p>
      <p class="profit-card--atributes">Locales: adquiridos: {{ numServicios }}</p>
      <div class="profit-card__actions">
        <button class="profit-card--button" @click="props.subirNivel()">Subir Nivel</button>
        <button class="profit-card--button" @click="props.sumarServicio()">Comprar local</button>
      </div>
    </div>
  </div>
</template>