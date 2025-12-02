<script setup>
import {routeLocationKey, useRouter} from 'vue-router'

const handleLogout = () => {
  // Lógica de cierre de sesión: limpiar datos de usuario y redirigir al inicio
  console.log('Cerrando sesión y redirigiendo...');
  // Aquí se usaría Vue Router para la redirección
};
const router = useRouter()
</script>
<template>
    <aside class=" sidebar">
        <nav>
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <router-link :to="{name: 'account-datos'}"> <i class="fa-solid fa-circle-user" style="color: #74C0FC;"></i> Datos </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'account-reservas'}"><i class="fa-solid fa-envelope" style="color: #329bec;"></i> Reservas </router-link>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link text-dark"><i class="fa-solid fa-envelope" style="color: #329bec;"></i> Avisos </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link text-dark" @click.prevent="handleLogout"><i class="fa-solid fa-right-from-bracket" style="color: #ec3232;"></i> Salir </a>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<style scoped>
.sidebar {
    background-color: #F8F8F8; /* Gris claro para el sidebar */
    padding-top: 20px;
    /*min-height: 200%; /* Para que ocupe toda la altura */
    width: 200px;
    flex-shrink: 0;
    flex-grow: 0;
}

.sidebar a,
.sidebar .router-link-active { /* Aplica estilo a <a> y a router-link */
    display: block; /*  Hace que ocupe todo el espacio y permite padding */
    padding: 10px 15px; /* Añade espacio alrededor del texto */
    text-decoration: none;
    color: #333; /* Color de texto oscuro (ajusta si es necesario) */
    white-space: nowrap; /* Evita que el texto se salte de línea */
    
}
.sidebar li {
  margin-bottom: 5px;
}

</style>