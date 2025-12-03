<template>
  <div>
    <div class="d-flex justify-content-center mt-5">
      <h1 class="h3 mb-3 fw-normal" id="titulo1">Registrarse</h1>
    </div>

    <!-- Tipo Persona -->
    <h3 class="h4 text-start w-50 mx-auto">Tipo Persona</h3>
    <select
      v-model="tipoPersona"
      class="form-select w-50 mx-auto h-50 mb-3"
      aria-label="Default select example"
    >
      <option value="">Seleccione el Tipo de Persona</option>
      <option value="natural">Natural</option>
      <option value="juridica">Jurídica</option>
    </select>

    <!-- Nombre Apellidos -->
    <h3 class="h4 text-start w-50 mx-auto">Nombre Apellidos</h3>
    <div class="form-floating w-50 mx-auto mb-3">
      <input
        v-model="nombre"
        type="text"
        class="form-control"
        id="floatingNombre"
        placeholder="Nombre completo"
      />
      <label for="floatingNombre">Nombre completo</label>
      <h3 class="h6 text-end fst-italic"></h3>
    </div>

    <!-- Tipo Documento -->
    <h3 class="h4 text-start w-50 mx-auto">Tipo Documento</h3>
    <select
      v-model="tipoDocumento"
      class="form-select w-50 mx-auto h-50 mb-3"
      aria-label="Default select example"
    >
      <option value="">Seleccione el Tipo de Documento</option>
      <option value="ti">Tarjeta de Identidad</option>
      <option value="cc">Cédula de Ciudadanía</option>
      <option value="ce">Cédula Extranjera</option>
    </select>

    <!-- Número de Documento -->
    <h3 class="h4 text-start w-50 mx-auto">Número de Documento</h3>
    <div class="form-floating w-50 mx-auto mb-3">
      <input
        v-model="documento"
        type="text"
        class="form-control"
        id="floatingDocumento"
        placeholder="Número de documento"
      />
      <label for="floatingDocumento">Número de documento</label>
      <h3 class="h6 text-end fst-italic"></h3>
    </div>

    <!-- Correo -->
    <h3 class="h4 text-start w-50 mx-auto">Correo</h3>
    <div class="form-floating w-50 mx-auto mb-3">
      <input
        v-model="email"
        type="email"
        class="form-control"
        id="floatingEmail"
        placeholder="name@example.com"
      />
      <label for="floatingEmail">Correo electrónico</label>
      <h3 class="h6 text-end fst-italic"></h3>
    </div>

    <!-- Teléfono -->
    <h3 class="h4 text-start w-50 mx-auto">Teléfono</h3>
    <div class="form-floating w-50 mx-auto mb-3">
      <input
        v-model="telefono"
        type="tel"
        class="form-control"
        id="floatingTelefono"
        placeholder="Celular"
      />
      <label for="floatingTelefono">Celular</label>
      <h3 class="h6 text-end fst-italic"></h3>
    </div>

    <!-- Contraseña -->
    <h3 class="h4 text-start w-50 mx-auto">Contraseña</h3>
    <div class="form-floating w-50 mx-auto">
      <input
        v-model="password"
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <label for="floatingPassword">Contraseña</label>
      <h3 class="h6 text-end fst-italic">Olvidaste tu Contraseña</h3>
    </div>

    <br />

    <div class="d-flex justify-content-center mt-1">
      <button class="btn btn-primary w-50 py-2" @click="submit">
        Registrar
      </button>
    </div>

    <h3 class="h6 text-center fst-italic mt-3">
      ¿Ya tienes una cuenta?
      <router-link
        to="/login"
        class="text-primary"
        style="cursor: pointer; text-decoration: underline"
      >
        Iniciar Sesión
      </router-link>
    </h3>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";

const tipoPersona = ref("");
const nombre = ref("");
const tipoDocumento = ref("");
const documento = ref("");
const email = ref("");
const telefono = ref("");
const password = ref("");

const submit = () => {
  if (
    !nombre.value.trim() ||
    !email.value.trim() ||
    !password.value.trim() ||
    !documento.value.trim()
  ) {
    return Swal.fire(
      "Error",
      "Completa todos los campos obligatorios",
      "error"
    );
  }

  const userData = {
    tipoPersona: tipoPersona.value,
    nombre: nombre.value.trim(),
    tipoDocumento: tipoDocumento.value,
    documento: documento.value.trim(),
    email: email.value.trim(),
    telefono: telefono.value.trim(),
    password: password.value,
  };

  localStorage.setItem("tempUser", JSON.stringify(userData));
  Swal.fire(
    "¡Registro exitoso!",
    "Usuario temporal creado correctamente",
    "success"
  );
};
</script>
