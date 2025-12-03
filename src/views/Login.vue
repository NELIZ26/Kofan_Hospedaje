<template>
   <main class="form-signin m-auto my-5 mx-5 text-center" id="login">
      <form @submit.prevent="submit">

        <img class="mb-4 mx-auto" src="../images/login.png" alt="" width="75" height="75">
        <h1 class="h3 mb-3 fw-normal" id="titulo 1">Iniciar Sesión</h1>

        <div class="form-floating w-50 mx-auto">
          <input 
            v-model="email" 
            type="email" 
            class="form-control" 
            id="floatingInput" 
            placeholder="name@example.com"
          >
          <label for="floatingInput">Dirección de correo Electrónico</label>
          <h3 class="h6 text-end fst-italic">Olvidaste tu Correo</h3>
        </div>

        <div class="form-floating w-50 mx-auto">
          <input 
            v-model="password" 
            type="password" 
            class="form-control" 
            id="floatingPassword" 
            placeholder="Password"
          >
          <label for="floatingPassword">Contraseña</label>
          <h3 class="h6 text-end fst-italic">Olvidaste tu Contraseña</h3>
        </div>

        <div class="form-check text-start my-3 mx-auto w-50">
          <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Recuérdame
          </label>
        </div>

        <button class="btn btn-primary w-50 py-2" type="submit">
          Iniciar Sesión
        </button>

        
        <h3 class="h6 text-center fst-italic mt-3">
          ¿No tienes una cuenta?
          <router-link to="/Register">
             <span 
            class="text-primary" 
            style="cursor:pointer; text-decoration:underline;" 
           
          >
            Regístrate
          </span>
          </router-link> 
       
        </h3>

      </form>
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

// 👉 FUNCIÓN QUE LLEVA AL REGISTRO
function irARegistro(){
  router.push('/registro')
}
</script>
<style>
img{
  display: flex;
  align-items: center;
}
</style>
