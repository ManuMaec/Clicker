<script setup>

import {ref} from "vue";

let msg = ref("Hola con reactividad atentamente dios")
let entre = ref("Quita eso de mi cara")
let leave = ref ("Gracias, basura... Hola con reactividad atentamente dios")

</script>
<template>
    <h1 @click="() => msg= msg+'!'" @mouseenter=" () => msg=entre" @mouseleave=" () => msg = leave">Hola mundo</h1>
    <h3>{{msg}}</h3>
</template>