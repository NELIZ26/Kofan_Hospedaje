<template>
  <div class="max-w-xl mx-auto">
    <h3>Crear usuario</h3>
    <div class="card p-4">
      <div class="mb-2"><input v-model="name" class="form-control" placeholder="Nombre" /></div>
      <div class="mb-2"><input v-model="email" class="form-control" placeholder="Email" /></div>
      <button class="btn btn-success" @click="submit"><i class="fa fa-check"></i> Guardar</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
const name = ref('')
const email = ref('')
const router = useRouter()
async function submit(){
  await axios.post('https://jsonplaceholder.typicode.com/users',{name:name.value,email:email.value})
  Swal.fire('Creado','Usuario creado (simulado)','success')
  router.push('/usuarios')
}
</script>
