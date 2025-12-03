<script setup>
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'


const auth = useAuthStore()
const router = useRouter()


// Hacemos reactivas las propiedades del store
const { isLogged, user } = storeToRefs(auth)
console.log(isLogged);
function logout() {
  auth.logout()
  router.push('/login')
}

</script>
<template>
  <nav class="navbar navbar-expand-sm sticky" id="barra">
    <div class="container-fluid">

      <router-link to="/" class="navbar-brand flex items-center gap-2">
        <img src="../images/Logo_Kofan.png" width="165" alt="Ecohotel Kofan" class="bi bi-leaf-fill" />
      </router-link>

      <button 
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Alternar Navegacion"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- El key asegura re-render cuando cambia isLogged -->
      <div class="d-flex gap-2" id="navbarNav">
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <router-link to="/home" class="nav-link">
              <i class="fa fa-house me-1"></i> Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/nosotros" class="nav-link">
              <i class="fa fa-users me-1"></i> Nosotros
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/servicios" class="nav-link">
              <i class="bi bi-house-gear-fill me-1"></i> Servicios
            </router-link>
          </li>
          <li class="nav-item text-white">
            <router-link to="/galeriafotos" class="nav-link">
              <i class="fa fa-images me-1"></i> Galeria de Fotos
            </router-link>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto">
          <!-- Si NO está logueado -->
          <li v-if="!isLogged" class="nav-item">
            <router-link to="/login" class="nav-link">
              <i class="fa fa-right-to-bracket"></i> Iniciar Sesion
            </router-link>
          </li>

          <!-- Si está logueado -->
          <li v-else class="nav-item d-flex align-items-center" @click="router.push('/account')" style="cursor: pointer;">
            <span class="text-white me-3">
              <i class="fa fa-user-circle"></i> {{ user?.email }}
            </span>

            <button class="btn btn-danger btn-sm text-white" @click="logout">
              <i class="fa fa-sign-out-alt"></i> Salir
            </button>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>



<style scoped>
.navbar-brand { font-weight: 700; }
#barra{
  background: #4CAF50 ;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1030;
  box-sizing: border-box;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.632);
  
}
</style>