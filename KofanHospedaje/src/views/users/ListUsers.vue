<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3><i class="fa fa-users"></i> Usuarios</h3>
      <router-link to="/usuarios/crear" class="btn btn-success"><i class="fa fa-plus"></i> Nuevo</router-link>
    </div>

    <div class="card p-3">
      <table class="table table-hover">
        <thead><tr><th>ID</th><th>Nombre</th><th>Email</th><th>Acciones</th></tr></thead>
        <tbody>
          <tr v-for="u in users" :key="u.id">
            <td>{{ u.id }}</td>
            <td>{{ u.name }}</td>
            <td>{{ u.email }}</td>
            <td>
              <router-link :to="`/usuarios/${u.id}/editar`" class="btn btn-sm btn-primary me-1"><i class="fa fa-edit"></i></router-link>
              <button class="btn btn-sm btn-danger" @click="remove(u.id)"><i class="fa fa-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
const users = ref([])
onMounted(async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  users.value = data
})
function remove(id){
  Swal.fire({title:'Eliminar',text:'Eliminar usuario (simulado)?',icon:'warning',showCancelButton:true}).then(res=>{
    if(res.isConfirmed){
      users.value = users.value.filter(u=>u.id!==id)
      Swal.fire('Eliminado','Usuario eliminado (simulado)','success')
    }
  })
}
</script>
