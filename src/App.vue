<template>
  <div id="page">
    <TheNavbar />
    <main>
      <div class="container-fluid" id="contenido">
        <router-view />
      </div>
    </main>
    <TheFooter/>
  </div>
</template>

<script setup>
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue'

</script>

<style>
#contenido {
  padding: 0;
  width: 100%;
  margin: 0;
}
</style>
