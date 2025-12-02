<template>
  <main>
    <div class="max-w-xl mx-auto mt-12">
      <div class="card shadow-sm p-5">
        <h2 class="mb-3">Iniciar sesión <i class="fa fa-right-to-bracket"></i></h2>

        <div class="mb-2">
          <label class="form-label">Email</label>
          <input v-model="email" class="form-control" placeholder="email@example.com" />
        </div>

        <div class="mb-3">
          <label class="form-label">Contraseña</label>
          <input v-model="password" type="password" class="form-control" placeholder="contraseña" />
        </div>

        <div class="d-flex gap-2">
          <button class="btn btn-primary btn-brand" @click="submit"><i class="fa fa-sign-in-alt me-2"></i>Entrar</button>
          <router-link to="/register" class="btn btn-outline-secondary">Registro</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { useAuthStore } from '../stores/auth'

const email = ref('')
const password = ref('')
const auth = useAuthStore()
const router = useRouter()

function submit(){
  if(!email.value || !password.value){
    return Swal.fire('Error','Completa los campos','warning')
  }
  const ok = auth.login(email.value, password.value)
  if(ok) router.push('/usuarios')
  else Swal.fire('Error','Credenciales inválidas. Usa registro temporal o crea usuario.','error')
}
</script>
