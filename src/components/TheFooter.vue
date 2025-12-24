<script setup></script>

<template>
  <div class="container-fluid" id="piedepagina">
    <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5">
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
          <li class="nav-item">
            <router-link to="/contacto">
              <p>Contacto</p>
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

      <div class="col mb-3 flex-column" id="menu">
        <h5><strong>Ubicacion</strong></h5>
        <div class="nav flex-column"></div>
        <div id="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.521652611322!2d-76.5355120619749!3d0.5560764129741063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e287e6540874957%3A0x9a11032de2a63510!2sCentro%20Ecoturistico%20Kofan!5e0!3m2!1ses!2sco!4v1762307375610!5m2!1ses!2sco"
            width="100%"
            height="200"
            style="
              border: 1px solid #0000;
              border-radius: 15px;
              overflow: hidden;
            "
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <hr class="w-75 m-auto" />
      <div class="w-100">
        <small
          >© {{ new Date().getFullYear() }} Ecoturístico Kofan — Todos los
          derechos reservados</small
        >
      </div>
    </footer>
  </div>
</template>

<style scoped>
.row {
  padding-bottom: 1rem;
  padding-top: 3rem;
  padding-left: 1rem;
}
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
#menu {
  text-align: center;
  margin-right: 7rem;
  margin-bottom: 7rem;
}
small {
  display: block;
  text-align: center;
  padding-top: 1rem;
}
</style>
