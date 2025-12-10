<!--<template>
  <main class="content flex-grow-1">
    <div class="page-wrapper">
        <div class="container-fluid">
        <div class="card shadow-sm mb-4 header-card">
            <div class="card-body">
            <h2 class="mb-1">Avisos <span class="text-muted">• Notificaciones</span></h2>

            <div class="filtros mt-3">
                <button
                class="btn btn-outline-secondary filtro-categoria"
                :class="{ 'active': filtroActual === 'todas' }"
                @click="filtrarAvisos('todas')"
                >
                Todas
                </button>
                <button
                class="btn btn-outline-secondary filtro-categoria"
                :class="{ 'active': filtroActual === 'reservas' }"
                @click="filtrarAvisos('reservas')"
                >
                Reservas
                </button>
                <button
                class="btn btn-outline-secondary filtro-categoria"
                :class="{ 'active': filtroActual === 'promocion' }"
                @click="filtrarAvisos('promocion')"
                >
                Promociones
                </button>
                <button
                class="btn btn-outline-secondary filtro-categoria"
                :class="{ 'active': filtroActual === 'actividades' }"
                @click="filtrarAvisos('actividades')"
                >
                Actividades
                </button>
            </div>
            </div>
        </div>

        <div id="lista-avisos" class="mb-5">
            <AvisoItem
            v-for="aviso in avisosFiltrados"
            :key="aviso.id"
            :aviso="aviso"
            
            @marcar="marcarLeido"
            @eliminar="eliminarAviso"
            />
            
            <div v-if="avisosFiltrados.length === 0" class="alert alert-info mt-4">
                No hay avisos en esta categoría.
            </div>
        </div>
        </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import AvisoItem from './AvisoItem.vue';

// 1. Datos de ejemplo para los avisos (Añadido 'leido' para el estado)
const avisos = ref([
  { id: 1, categoria: 'reservas', titulo: 'Reserva Confirmada', texto: 'Tu cabaña...', tiempo: 'Hace 15 minutos', leido: false },
  { id: 2, categoria: 'promocion', titulo: 'Oferta Especial', texto: '¡25% de descuento...', tiempo: 'Hace 2 horas', leido: false },
  { id: 3, categoria: 'reservas', titulo: 'Recordatorio Pago', texto: 'El saldo de tu reserva está pendiente.', tiempo: 'Hace 1 día', leido: true },
  { id: 4, categoria: 'actividades', titulo: 'Nueva Ruta Senderismo', texto: 'Descubre el sendero del Jaguar...', tiempo: 'Hace 3 días', leido: false },
]);

// 2. Estado para el filtro actual
const filtroActual = ref('todas');

// 3. Propiedad computada para obtener la lista de avisos filtrados
const avisosFiltrados = computed(() => {
  if (filtroActual.value === 'todas') {
    return avisos.value;
  }
  return avisos.value.filter(aviso => aviso.categoria === filtroActual.value);
});

// 4. Función para cambiar el filtro
const filtrarAvisos = (categoria) => {
  filtroActual.value = categoria;
};

// 5. FUNCIÓN/RUTA LÓGICA: Marcar como leído
const marcarLeido = (avisoId) => {
  const avisoIndex = avisos.value.findIndex(a => a.id === avisoId);
  if (avisoIndex !== -1) {
    // Cambia el estado de 'leido' al valor opuesto
    avisos.value[avisoIndex].leido = !avisos.value[avisoIndex].leido; 
    console.log(`Aviso ID ${avisoId} marcado/desmarcado.`);
  }
};

// 6. FUNCIÓN/RUTA LÓGICA: Eliminar aviso
const eliminarAviso = (avisoId) => {
  // Filtra la lista para crear una nueva que excluye el aviso con el ID dado
  avisos.value = avisos.value.filter(aviso => aviso.id !== avisoId);
  console.log(`Aviso ID ${avisoId} eliminado.`);
};
</script>-->

<template>
  <main class="content flex-grow-1">
    <div class="container-fluid">
      <div class="card shadow-sm mb-4 header-card">
        <div class="card-body">
          <h2 class="mb-1">
            Avisos <span class="text-muted">• Notificaciones</span>
          </h2>

          <div class="filtros mt-3">
            <button
              class="btn btn-outline-secondary filtro-categoria"
              :class="{ active: filtroActual === 'todas' }"
              @click="filtrarAvisos('todas')"
            >
              Todas
            </button>
            <button
              class="btn btn-outline-secondary filtro-categoria"
              :class="{ active: filtroActual === 'reservas' }"
              @click="filtrarAvisos('reservas')"
            >
              Reservas
            </button>
            <button
              class="btn btn-outline-secondary filtro-categoria"
              :class="{ active: filtroActual === 'promocion' }"
              @click="filtrarAvisos('promocion')"
            >
              Promociones
            </button>
            <button
              class="btn btn-outline-secondary filtro-categoria"
              :class="{ active: filtroActual === 'actividades' }"
              @click="filtrarAvisos('actividades')"
            >
              Actividades
            </button>
          </div>
        </div>
      </div>

      <div id="lista-avisos" class="mb-5">
        <AvisoItem
          v-for="aviso in avisosFiltrados"
          :key="aviso.id"
          :aviso="aviso"
          @marcar="marcarLeido"
          @eliminar="eliminarAviso"
        />

        <div v-if="avisosFiltrados.length === 0" class="alert alert-info mt-4">
          No hay avisos en esta categoría.
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import AvisoItem from "./AvisoItem.vue";

// 1. Datos de ejemplo para los avisos (Añadido 'leido' para el estado)
const avisos = ref([
  {
    id: 1,
    categoria: "reservas",
    titulo: "Reserva Confirmada",
    texto:
      "Tu cabaña ha sido reservada con éxito. Consulta los detalles en tu perfil.",
    tiempo: "Hace 15 minutos",
    leido: false,
  },
  {
    id: 2,
    categoria: "promocion",
    titulo: "Oferta Especial",
    texto: "¡25% de descuento en tu próxima estancia si reservas este mes!",
    tiempo: "Hace 2 horas",
    leido: false,
  },
  {
    id: 3,
    categoria: "reservas",
    titulo: "Recordatorio Pago",
    texto: "El saldo de tu reserva para la cabaña Mariposa está pendiente",
    tiempo: "Hace 1 día",
    leido: true,
  },
  {
    id: 4,
    categoria: "actividades",
    titulo: "Nueva Ruta Senderismo",
    texto: "Descubre el sendero del Jaguar, una ruta guiada de 5 horas.",
    tiempo: "Hace 3 días",
    leido: false,
  },
  {
    id: 5,
    categoria: "actividades",
    titulo: "Clase de Yoga Matinal",
    texto: "Inscríbete a la clase de yoga al amanecer. ¡Plazas limitadas!",
    tiempo: "Hace 5 días",
    leido: true,
  },
  {
    id: 6,
    categoria: "promocion",
    titulo: "Noche Adicional Gratis",
    texto: "Reserva 3 noches y obtén la cuarta noche completamente gratis.",
    tiempo: "Hace 1 semana",
    leido: false,
  },
]);

// 2. Estado para el filtro actual
const filtroActual = ref("todas");

// 3. Propiedad computada para obtener la lista de avisos filtrados
const avisosFiltrados = computed(() => {
  if (filtroActual.value === "todas") {
    return avisos.value;
  }
  return avisos.value.filter((aviso) => aviso.categoria === filtroActual.value);
});

// 4. Función para cambiar el filtro
const filtrarAvisos = (categoria) => {
  filtroActual.value = categoria;
};

// 5. FUNCIÓN/RUTA LÓGICA: Marcar como leído
const marcarLeido = (avisoId) => {
  const aviso = avisos.value.find((a) => a.id === avisoId);
  if (aviso) {
    // Cambia el estado de 'leido' al valor opuesto
    aviso.leido = !aviso.leido;
    console.log(`Aviso ID ${avisoId} marcado/desmarcado.`);
  }
};

// 6. FUNCIÓN/RUTA LÓGICA: Eliminar aviso
const eliminarAviso = (avisoId) => {
  // Filtra la lista para crear una nueva que excluye el aviso con el ID dado
  avisos.value = avisos.value.filter((aviso) => aviso.id !== avisoId);
  console.log(`Aviso ID ${avisoId} eliminado.`);
};
</script>
