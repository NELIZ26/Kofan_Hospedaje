<script setup>
import { ref } from "vue";

// 1. Datos iniciales (estado reactivo)
//La función 'ref' se usa para hacer que 'formData' y sus cambios sean visibles en la interfaz.
const formData = ref({
  nombres_apellidos: "Nelson Contreras",
  tipo_documento: "Loream Impus",
  correo: "loreamimpus@gmail.com",
  fecha_nacimiento: "Loream Impus",
  numero_documento: "Loream Impus",
  telefono: "XXX XXX XXXX",
  tipo_persona: "Jurídica",
  nombre_empresa: "Loream Impus",
  nit: "Loream Impus",
  direccion: "Loream Impus",
});

// 2. Función de guardado
//Esta función es llamada cuando el usuario interactúa con el formulario.
const saveProfile = () => {
  console.log("Enviando datos al API:", formData.value);
  alert("¡Datos guardados! Revisa la consola para ver los datos.");
  // Aquí es donde se haría una llamada al servidor (ej: axios.put('/api/user', formData.value))
};
</script>
<template>
  <div class="col-md-10 main-content">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Mi Cuenta &bullet; Titular: Nelson Contreras</h2>
      <div class="d-flex align-items-center">
        <img
          src="https://images.icon-icons.com/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"
          alt="Imagen de perfil"
          class="rounded-circle"
          style="width: 50px; height: 50px"
        />
      </div>
    </div>

    <form class="row g-3" @submit.prevent="saveProfile">
      <div class="col-md-6">
        <div class="col-12 mb-3">
          <label for="nombres_apellidos" class="form-label"
            >Nombres y Apellidos</label
          >
          <input
            type="text"
            class="form-control"
            id="nombres_apellidos"
            v-model="formData.nombres_apellidos"
          />
        </div>
        <div class="col-12 mb-3">
          <label for="tipo_documento" class="form-label"
            >Tipo de Documento</label
          >
          <input
            type="text"
            class="form-control"
            id="tipo_documento"
            v-model="formData.tipo_documento"
          />
        </div>
        <div class="col-12 mb-3">
          <label for="correo" class="form-label">Correo</label>
          <input
            type="email"
            class="form-control"
            id="correo"
            v-model="formData.correo"
          />
        </div>
        <div class="col-12 mb-3">
          <label for="fecha_nacimiento" class="form-label"
            >Fecha de Nacimiento</label
          >
          <input
            type="text"
            class="form-control"
            id="fecha_nacimiento"
            v-model="formData.fecha_nacimiento"
          />
        </div>
        <div class="col-12 mb-3">
          <label for="numero_documento" class="form-label"
            >Número de Documento</label
          >
          <input
            type="text"
            class="form-control"
            id="numero_documento"
            v-model="formData.numero_documento"
          />
        </div>
        <div class="col-12 mb-3">
          <label for="telefono" class="form-label">Teléfono</label>
          <input
            type="text"
            class="form-control"
            id="telefono"
            v-model="formData.telefono"
          />
        </div>
      </div>

      <div class="col-md-6">
        <div class="col-12 mb-3">
          <label for="tipo_persona" class="form-label">Tipo de Persona</label>
          <select
            id="tipo_persona"
            class="form-select"
            v-model="formData.tipo_persona"
          >
            <option value="Jurídica">Jurídica</option>
            <option value="Natural">Natural</option>
          </select>
        </div>
        <div class="col-12 mb-3">
          <label for="nombre_empresa" class="form-label"
            >Nombre de la empresa</label
          >
          <input
            type="text"
            class="form-control"
            id="nombre_empresa"
            v-model="formData.nombre_empresa"
          />
        </div>
        <div class="col-12 mb-3">
          <label for="nit" class="form-label">Nit</label>
          <input
            type="text"
            class="form-control"
            id="nit"
            v-model="formData.nit"
          />
        </div>
        <div class="col-12 mb-3">
          <label for="direccion" class="form-label">Dirección</label>
          <input
            type="text"
            class="form-control"
            id="direccion"
            v-model="formData.direccion"
          />
        </div>
        <div class="col-12 d-flex justify-content-end mt-4 pt-5">
          <button type="submit" class="btn btn-confirmar">Confirmar</button>
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped>
.main-content {
  padding: 30px;
  width: 100%;
}
.account-title {
  font-size: 24px;
  font-weight: 500;
  color: #333;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}
.btn-confirmar {
  background-color: #6ac267;
  border-color: #6ac267;
  color: white;
  padding: 10px 20px;
  font-weight: bold;
}
.btn-confirmar:hover {
  background-color: #5baa58;
  border-color: #5baa58;
  color: white;
}
</style>
