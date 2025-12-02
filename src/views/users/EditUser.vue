<template>
  <div class="max-w-xl mx-auto">
    <h3>Editar usuario</h3>
    <div class="card p-4">
      <div class="mb-2"><input v-model="name" class="form-control" /></div>
      <div class="mb-2"><input v-model="email" class="form-control" /></div>
      <button class="btn btn-primary" @click="submit"><i class="fa fa-save"></i> Actualizar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const name = ref('')
const email = ref('')
onMounted(async ()=>{
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
  name.value = data.name
  email.value = data.email
})
async function submit(){
  await axios.put(`https://jsonplaceholder.typicode.com/users/${route.params.id}`,{name:name.value,email:email.value})
  Swal.fire('OK','Usuario actualizado (simulado)','success')
  router.push('/usuarios')
}
</script>
