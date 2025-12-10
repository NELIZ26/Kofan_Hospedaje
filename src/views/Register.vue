<template>
  <main class="m-auto my-5 mx-5" id="register">
    <div class="formcontainer px-4 my-2 py-md-3 px-4 my-2 py-md-3">
      <div class="d-flex justify-content-center mt-5">
        <h1 class="title h2 mb-3 fw-normal" id="titulo1">Registrarse</h1>
      </div>

      <!-- Tipo Persona -->
      <h3 class="h5 text-start w-75 mx-auto">Tipo Persona</h3>
      <select
        v-model="tipoPersona"
        class="form-select w-75 mx-auto h-50 mb-3"
        aria-label="Default select example"
      >
        <option value="">Seleccione el Tipo de Persona</option>
        <option value="natural">Natural</option>
        <option value="juridica">Jurídica</option>
      </select>

      <!-- Nombre Apellidos -->
      <h3 class="h5 text-start w-75 mx-auto">Nombre Apellidos</h3>
      <div class="form-floating w-75 mx-auto mb-3">
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
      <h3 class="h5 text-start w-75 mx-auto">Tipo Documento</h3>
      <select
        v-model="tipoDocumento"
        class="form-select w-75 mx-auto h-50 mb-3"
        aria-label="Default select example"
      >
        <option value="">Seleccione el Tipo de Documento</option>
        <option value="ti">Tarjeta de Identidad</option>
        <option value="cc">Cédula de Ciudadanía</option>
        <option value="ce">Cédula Extranjera</option>
      </select>

      <!-- Número de Documento -->
      <h3 class="h5 text-start w-75 mx-auto">Número de Documento</h3>
      <div class="form-floating w-75 mx-auto mb-3">
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
      <h3 class="h5 text-start w-75 mx-auto">Correo</h3>
      <div class="form-floating w-75 mx-auto mb-3">
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
      <h3 class="h5 text-start w-75 mx-auto">Teléfono</h3>
      <div class="form-floating w-75 mx-auto mb-3">
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
      <h3 class="h5 text-start w-75 mx-auto">Contraseña</h3>
      <div class="form-floating w-75 mx-auto">
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

      <div class="d-flex justify-content-center w-75">
        <button class="btn btn-primary w-100 py-2" @click="submit">
          Registrar
        </button>
      </div>

      <h3 class="h6 text-center fst-italic mt-3 mb-4">
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
  </main>
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

<style>
.formcontainer {
  width: content;
  height: content;
  max-width: 646px;
  max-height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 106px 42px rgba(0, 0, 0, 0.01),
    0px 59px 36px rgba(0, 0, 0, 0.05), 0px 26px 26px rgba(0, 0, 0, 0.09),
    0px 7px 15px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}
.title {
  font-size: 28px;
  color: royalblue;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
}
.title::before,.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: royalblue;
}

.title::before {
  width: 18px;
  height: 18px;
  background-color: royalblue;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}
@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>
