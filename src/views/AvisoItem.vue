<!--<template>
  <div class="aviso-item shadow-sm mb-3" :data-categoria="aviso.categoria" :data-id="aviso.id" :class="{ 'aviso-leido': aviso.leido }">
    <div class="aviso-left">
      <i :class="getIconClass(aviso.categoria)" class="aviso-icon"></i>
    </div>
    <div class="aviso-body">
      <div class="d-flex justify-content-between">
        <div>
          <h5 class="aviso-titulo">{{ aviso.titulo }}</h5>
          <p class="aviso-text small mb-0">{{ aviso.texto }}</p>
          <div class="meta small text-muted mt-2"><i class="fa-regular fa-clock"></i> {{ aviso.tiempo }}</div>
        </div>

        <div class="aviso-actions text-end">
          <div class="etiqueta-et"> 
            <span v-if="!aviso.leido && aviso.categoria === 'reservas'" class="etiqueta etiqueta-nuevo">Nuevo</span>
            <span v-else-if="aviso.categoria === 'promocion'" class="etiqueta etiqueta-promocion">Promoción</span>
            <span v-else class="etiqueta etiqueta-info">Info</span>
          </div>
          <div class="mt-2">
            <a href="#" class="accion marcar-leido" @click.prevent="$emit('marcar', aviso.id)">
              <i :class="aviso.leido ? 'fa-solid fa-eye-slash' : 'fa-regular fa-eye'"></i> 
              {{ aviso.leido ? 'Marcar como no leído' : 'Marcar como leído' }}
            </a>
            <a href="#" class="accion text-danger ms-3 eliminar-aviso" @click.prevent="$emit('eliminar', aviso.id)">
              <i class="fa-solid fa-trash"></i> Eliminar
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Define las props y los eventos que emite
const props = defineProps({
  aviso: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(['marcar', 'eliminar']); // Definición de los eventos

// Lógica para determinar el ícono de Font Awesome
const getIconClass = (categoria) => {
  switch (categoria) {
    case 'reservas':
      return 'fa-solid fa-crown'; 
    case 'promocion':
      return 'fa-solid fa-percent';
    case 'actividades':
      return 'fa-solid fa-campground'; 
    default:
      return 'fa-solid fa-info-circle';
  }
};
</script>

<style scoped>
/* Puedes añadir un estilo para los avisos leídos si lo deseas */
.aviso-item {
  transition: rgba(0, 143, 57, 1);
}
.aviso-item.aviso-leido {
  background-color: #f8f9fa; /* Color más tenue para avisos leídos */
}
</style>-->

<template>
  <div class="aviso-item shadow-sm mb-3" :data-categoria="aviso.categoria" :data-id="aviso.id" :class="{ 'aviso-leido': aviso.leido }">
    <div class="aviso-left">
      <i :class="getIconClass(aviso.categoria)" class="aviso-icon"></i>
    </div>
    <div class="aviso-body">
      <div class="d-flex justify-content-between">
        <div>
          <h5 class="aviso-titulo">{{ aviso.titulo }}</h5>
          <p class="aviso-text small mb-0">{{ aviso.texto }}</p>
          <div class="meta small text-muted mt-2"><i class="fa-regular fa-clock"></i> {{ aviso.tiempo }}</div>
        </div>

        <div class="aviso-actions text-end">
          <div class="etiqueta-et"> 
            <span v-if="!aviso.leido && aviso.categoria === 'reservas'" class="etiqueta etiqueta-nuevo">Nuevo</span>
            <span v-else-if="aviso.categoria === 'promocion'" class="etiqueta etiqueta-promocion">Promoción</span>
            <span v-else class="etiqueta etiqueta-info">Info</span>
          </div>
          <div class="mt-2">
            <a href="#" class="accion marcar-leido" @click.prevent="$emit('marcar', aviso.id)">
              <i :class="aviso.leido ? 'fa-solid fa-eye-slash' : 'fa-regular fa-eye'"></i> 
              {{ aviso.leido ? 'Marcar como no leído' : 'Marcar como leído' }}
            </a>
            <a href="#" class="accion text-danger ms-3 eliminar-aviso" @click.prevent="$emit('eliminar', aviso.id)">
              <i class="fa-solid fa-trash"></i> Eliminar
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Define las props y los eventos que emite
const props = defineProps({
  aviso: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(['marcar', 'eliminar']); // Definición de los eventos

// Lógica para determinar el ícono de Font Awesome
const getIconClass = (categoria) => {
  switch (categoria) {
    case 'reservas':
      return 'fa-solid fa-crown'; 
    case 'promocion':
      return 'fa-solid fa-percent';
    case 'actividades':
      return 'fa-solid fa-campground'; 
    default:
      return 'fa-solid fa-info-circle';
  }
};
</script>

<style scoped>
/* Puedes añadir un estilo para los avisos leídos si lo deseas */
.aviso-item {
  transition: rgba(0, 143, 57, 1);
  padding: 15px;
  border-left: 5px solid rgba(0, 143, 57, 1);
  border-radius: 8px;
  display: flex;
}
.aviso-item.aviso-leido {
  background-color: #f8f9fa; /* Color más tenue para avisos leídos */
  border-left-color: #ced4da;
}
.aviso-left {
  flex-shrink: 0;
  margin-right: 15px;
}
.aviso-icon {
  font-size: 24px;
  color: rgba(0, 143, 57, 1);
}
.aviso-item.aviso-leido .aviso-icon {
  color: #adb5bd;
}
.aviso-body {
  flex-grow: 1;
}
.aviso-titulo {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
}
.etiqueta {
  display: inline-block;
  padding: 2px 8px;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 4px;
  margin-left: 5px;
}
.etiqueta-nuevo {
  background-color: #dc3545;
  color: white;
}
.etiqueta-promocion {
  background-color: #ffc107;
  color: #343a40;
}
.etiqueta-info {
  background-color: #0d6efd;
  color: white;
}
.accion {
  font-size: 0.85rem;
  text-decoration: none;
  color: #495057;
}
.accion:hover {
  text-decoration: underline;
}
</style>