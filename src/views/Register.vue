<template>
  <div class="max-w-xl mx-auto mt-12">
    <div class="card shadow-sm p-5">
      <h2 class="mb-3"><i class="fa fa-user-plus"></i> Registro temporal</h2>
      <div class="mb-2">
        <label class="form-label">Email</label>
        <input v-model="email" class="form-control" placeholder="email@example.com" />
      </div>
      <div class="mb-3">
        <label class="form-label">Contraseña</label>
        <input v-model="password" type="password" class="form-control" />
      </div>
      <button class="btn btn-success btn-brand" @click="submit"><i class="fa fa-check me-2"></i>Registrar</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'
const email = ref('')
const password = ref('')
const submit = () => {
  if(!email.value || !password.value) return Swal.fire('Error','Completa los campos','error')
  localStorage.setItem('tempUser', JSON.stringify({ email: email.value, password: password.value }))
  Swal.fire('OK','Usuario temporal creado','success')
}
</script>
