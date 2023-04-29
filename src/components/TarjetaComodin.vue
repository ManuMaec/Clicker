<script setup>
import { ref, toRefs, onMounted } from "vue";

const props = defineProps({
  nombre: String,
  costo: Number,
  ingresos: Number,
  numNegocios: Number,
  nivel: Number,
  estado: Boolean,
  cambiarEstado: Function,
  sumarNegocio: Function,
  subirNivel: Function
});

const { nombre, costo, ingresos, numNegocios, nivel, estado } = toRefs(props);

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
      <p class="profit-card--atributes">Ingresos: {{ ingresos }}</p>
      <p class="profit-card--atributes">Costo: {{ costo }}</p>
      <button class="profit-card--button" @click="props.cambiarEstado()">desbloquear</button>
    </div>
    <div
      class="profit-card-unlocke"
      v-else
      :style=" isHover? 'opacity: 1' : 'opacity: 0' "
    >
      <h1 class="profit-card--title">{{ nombre }}</h1>
      <p class="profit-card--atributes">Ingresos: {{ ingresos }}</p>
      <p class="profit-card--atributes">Nivel: {{ nivel }}</p>
      <p class="profit-card--atributes">Locales: adquiridos: {{ numNegocios }}</p>
      <div class="profit-card__actions">
        <button class="profit-card--button" @click="props.subirNivel()">Subir Nivel</button>
        <button class="profit-card--button" @click="props.sumarNegocio()">Comprar local</button>
      </div>
    </div>
  </div>
</template>