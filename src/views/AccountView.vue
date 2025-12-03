<script setup>
import SidebarNav from './SidebarNav.vue';
</script>

<template>
  <div class="account-layout-container">
    <SidebarNav/>
    <div class="account-content-area">
      <router-view/>
    </div>
  </div>
</template>
<style scoped>
/* Aplicamos Flexbox para el layout de dos columnas */
.account-layout-container {
  display: flex; 
  width: 100%;
}

/* La vista interna ocupa el espacio restante */
.account-content-area {
  flex-grow: 1; /* Ocupa el espacio restante después del Sidebar */
  padding: 20px;
}
</style>