<template>
  <div id="app-kofan">
    <main class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-10">

          <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="fw-bold">Reservas</h2>
            <button class="btn btn-success" @click="crearReserva">
              <i class="fa-solid fa-plus"></i> Crear Reserva
            </button>
          </div>

          <div class="card shadow-sm border-0 mb-4">
            <div class="card-body">
              <h5 class="fw-semibold mb-3">Listado de Reservas</h5>

              <div v-if="reservas.length > 0">
                <table class="table align-middle">
                  <thead class="table-success text-center">
                    <tr>
                      <th>Nombre</th>
                      <th>Correo</th>
                      <th>Fecha</th>
                      <th>Cantidad de Personas</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>

                  <tbody class="text-center">
                    <tr v-for="reserva in reservas" :key="reserva.id">
                      <td>{{ reserva.nombre }}</td>
                      <td>{{ reserva.correo }}</td>
                      <td>{{ reserva.fecha }}</td>
                      <td>{{ reserva.cantidad }} Personas</td>
                      <td>
                        <button class="btn btn-warning btn-sm" @click="editarReserva(reserva.id)">
                          <i class="fa-solid fa-pen"></i>
                        </button>
                        <button class="btn btn-danger btn-sm" @click="eliminarReserva(reserva.id)">
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>

                </table>
              </div>
              <div v-else class="alert alert-info text-center">
                No hay reservas registradas en este momento.
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 1. Datos/Estado de la aplicación (Composition API - ref)
const reservas = ref([
  { id: 1, nombre: 'MISHEL OTAIZA', correo: 'mishelotaiza123@gmail.com', fecha: '2025-02-12', cantidad: 6 },
  { id: 2, nombre: 'JENNY SANCHEZ', correo: 'jennysanchez23@gmail.com', fecha: '2025-02-14', cantidad: 2 },
  { id: 3, nombre: 'SANTIAGO RIVERA', correo: 'riverasanti21@gmail.com', fecha: '2025-02-16', cantidad: 4 }
]);

// 2. Métodos (Funciones)
const crearReserva = () => {
  // En una aplicación real, aquí abrirías un modal/formulario
  console.log("Acción: Abrir formulario para crear una nueva reserva.");
  // Ejemplo de cómo agregar una reserva (para demostración)
  // reservas.value.push({ id: Date.now(), nombre: 'NUEVA RESERVA', correo: 'test@mail.com', fecha: '2025-11-20', cantidad: 1 });
};

const editarReserva = (id) => {
  // En una aplicación real, aquí buscarías la reserva por ID y cargarías el formulario
  console.log(`Acción: Editar reserva con ID: ${id}`);
};

const eliminarReserva = (id) => {
  // En una aplicación real, aquí mostrarías una confirmación y luego la eliminarías
  console.log(`Acción: Eliminar reserva con ID: ${id}`);
  // Ejemplo de eliminación (para demostración)
  // reservas.value = reservas.value.filter(r => r.id !== id);
};

const iniciarSesion = () => {
    console.log("Acción: Redirigir a la página de inicio de sesión.");
}

// Opcional: Si quieres exponer las variables y funciones para que puedan ser usadas en el template,
// en el setup de <script setup> no es necesario, ya que son automáticamente expuestas.

</script>

<style scoped>
/* Estilos específicos que tenías en la etiqueta <style> del HTML */
#app-kofan {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* Nota: La fuente 'Poppins' y los estilos de Bootstrap deben estar cargados globalmente
     o en este componente si no usas un archivo CSS externo. */
  font-family: 'Poppins', sans-serif;
}
main {
  flex: 1; /* Esto empuja el footer hacia abajo */
}


</style>