<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="header">
    <p>Clicker de Manuel y Wladi</p>
    <nav class="header__navbar">
      <li><router-link to="/" >Overview</router-link></li>
    </nav>
  </header>
  <RouterView />
</template>
