<script setup>

import { useReserva } from '../composables/useReserva.js';

const {
  isModalOpen,
  showSuccess,
  personType,
  form,
  errors,
  minDate,
  labelNombres,
  placeholderNombres,
  labelNumDoc,
  openModal,
  closeModal,
  setPersonType,
  handleSubmit,
  closeSuccessMessage
} = useReserva();

</script>

<template>

  <div class="booking-container">

    <div class="modal-overlay" :class="{ active: isModalOpen }" @click.self="closeModal">
      <div class="modal-content">
        <span class="close-modal" @click="closeModal">&times;</span>

        <div class="modal-header">

          <h2>Reserva tu Estadía</h2>

        </div>

        <div class="tabs-container">

          <button 
            type="button" 
            class="tab" 
            :class="{ active: personType === 'natural' }" 
            @click="setPersonType('natural')">
            Persona Natural
          </button>
          <button 
            type="button" 
            class="tab" 
            :class="{ active: personType === 'juridica' }" 
            @click="setPersonType('juridica')">
            Persona Jurídica
          </button>
        </div>

        <form @submit.prevent="handleSubmit" novalidate>

          <div class="form-grid">
            <div class="form-group">
              <label for="nombres">{{ labelNombres }}</label>
              <input 
                type="text" 
                id="nombres" 
                v-model="form.nombres" 
                :placeholder="placeholderNombres" 
                :class="{ 'input-error': errors.nombres }"
              >
              <span class="error-message" v-if="errors.nombres">Campo obligatorio.</span>

            </div>

            <div class="form-group" v-if="personType === 'natural'">
              <label for="tipoDocumento">Tipo de Documento</label>
              <select 
                id="tipoDocumento" 
                v-model="form.tipoDocumento"
                :class="{ 'input-error': errors.tipoDocumento }"
              >

                <option value="" disabled>Seleccione...</option>
                <option value="CC">Cédula de Ciudadanía</option>
                <option value="CE">Cédula de Extranjería</option>
                <option value="PA">Pasaporte</option>
              </select>

              <span class="error-message" v-if="errors.tipoDocumento">Seleccione uno.</span>
            </div>

            <div class="form-group">
              <label for="correo">Correo Electrónico</label>
              <input 
                type="email" 
                id="correo" 
                v-model="form.correo" 
                placeholder="email@ejemplo.com"
                :class="{ 'input-error': errors.correo }"
              >

              <span class="error-message" v-if="errors.correo">Correo inválido.</span>
            </div>

            <div class="form-group" v-if="personType === 'natural'">
              <label for="fechaNacimiento">Fecha de Nacimiento</label>
              <input 
                type="date" 
                id="fechaNacimiento" 
                v-model="form.fechaNacimiento"
                :class="{ 'input-error': errors.fechaNacimiento }"
              >

              <span class="error-message" v-if="errors.fechaNacimiento">Requerido.</span>
            </div>
            <div class="form-group">
              <label for="numDocumento">{{ labelNumDoc }}</label>
              <input 
                type="number" 
                id="numDocumento" 
                v-model="form.numDocumento" 
                placeholder="Ej: 123456789"
                :class="{ 'input-error': errors.numDocumento }"
              >

              <span class="error-message" v-if="errors.numDocumento">Ingrese número válido.</span>
            </div>

            <div class="form-group">
              <label for="telefono">Teléfono</label>
              <input 
                type="tel" 
                id="telefono" 
                v-model="form.telefono" 
                placeholder="300 123 4567"
                :class="{ 'input-error': errors.telefono }"
              >

              <span class="error-message" v-if="errors.telefono">Requerido.</span>
            </div>

            <div class="form-group">
              <label for="cantidadPersonas">Cantidad Personas</label>
              <select id="cantidadPersonas" v-model="form.cantidadPersonas">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">Más de 5</option>
              </select>
            </div>

            <div class="form-group">
              <label for="habitacion">Habitación</label>
              <select id="habitacion" v-model="form.habitacion">
                <option value="Cabana2">Cabaña (2 per)</option>
                <option value="CabanaFamilia">Cabaña Familiar</option>
                <option value="Camping">Camping</option>
              </select>

            </div>
            <div class="form-group">
              <label for="fechaReserva">Fecha de Reserva</label>
              <input 
                type="date" 
                id="fechaReserva" 
                v-model="form.fechaReserva"
                :min="minDate"
                :class="{ 'input-error': errors.fechaReserva }"
              >

              <span class="error-message" v-if="errors.fechaReserva">Fecha inválida.</span>
            </div>
          </div>

          <div class="button-container">
            <button type="submit" class="btn-submit">Confirmar Reserva</button>
          </div>
        </form>

        <div class="success-overlay" :class="{ active: showSuccess }">
          <div class="success-card">
            <div class="icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3>¡Solicitud Enviada!</h3>
            <p>Tu reserva ha sido registrada correctamente. Te contactaremos pronto.</p>
            <button class="btn-submit btn-small" @click="closeSuccessMessage">Aceptar</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<style scoped src="../styles/styleform.css"></style>
