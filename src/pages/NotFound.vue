<template>
  <section class="c">
    <h1>404</h1>
    <p>That page doesn’t exist.</p>
    <RouterLink to="/">Go home →</RouterLink>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.c { max-width: 980px; margin: 0 auto; padding: 28px 18px; }
</style>