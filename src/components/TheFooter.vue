<script setup>
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const auth = useAuthStore();
const router = useRouter();

// Hacemos reactivas las propiedades del store
const { isLogged, user } = storeToRefs(auth);
console.log(isLogged);
function logout() {
  auth.logout();
  router.push("/login");
}
</script>
<template>
  <div class="container-fluid" id="piedepagina">
    <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
      <div class="col mb-3" id="info">
        <h5><strong>Ecohotel Kofan · Has tu reserva</strong></h5>
        <ul class="nav flex-column">
          <li class="nav-item">
            Gracias por preferirnos, nuestro equipo esta dispuesto a ayudarte.
          </li>
          <li>Tel: (+57) xxx-xxx-xxxx</li>
          <li>E-mail: loreamimpusn@gmail.com</li>
          <li>Kilometro 3 Vereda Negras | Puerto Asis | Putumayo</li>
        </ul>
        <p class="text-body-secondary">© 2025</p>
      </div>

      <div class="col" id="blanco"></div>

      <div class="col mb-3 mx-auto" id="rutas">
        <h5><strong>Menu</strong></h5>
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link to="/Home">
              <p>Inicio</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/nosotros">
              <p>Nosotros</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/servicios">
              <p>Servicios</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/galeriafotos">
              <p>Galeria de Fotos</p>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="col mb-3 mx-auto" id="rutas">
        <h5><strong>Servicios</strong></h5>
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link to="/galeriafotos">
              <p>Hospedaje</p>
            </router-link>
          </li>
          <li class="nav-item">Restaurante</li>
          <li class="nav-item">Parqueadero</li>
          <li class="nav-item">
            <router-link to="/galeriafotos">
              <p>Salon de Eventos</p>
            </router-link>
          </li>
          <li class="nav-item">Piscina</li>
          <li class="nav-item">Senderismo</li>
        </ul>
      </div>

      <div class="col mb-3 flex-column mx-auto" id="menu">
        <h5><strong>Ubicacion</strong></h5>
        <div class="nav flex-column"></div>
        <div id="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.521652611322!2d-76.5355120619749!3d0.5560764129741063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e287e6540874957%3A0x9a11032de2a63510!2sCentro%20Ecoturistico%20Kofan!5e0!3m2!1ses!2sco!4v1762307375610!5m2!1ses!2sco"
            width="100%"
            height="200"
            style="border: 10"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.navbar-brand {
  font-weight: 700;
}
#blanco {
  width: auto;
  max-width: 140px;
}
#info {
  margin-left: 1%;
}
#rutas {
  width: auto;
  text-align: center;
}
#menu{
  text-align: center;
}
</style>
