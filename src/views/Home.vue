<template>
  <div class="page-wrapper">
    <main>
      <div class="px-5 text-right" id="presentacion">
        <h1 class="display-5 fw-bold text-body-emphasis">
          Vive la experiencia <br />Kofán en medio de la <br />
          naturaleza
        </h1>
        <div class="col-lg-6 mx-right">
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-right">
            <button class="btn btn-primary resevabutton" @click="reserva.openModal()">
              Reserva Ahora
            </button>
          </div>
        </div>
      </div>

      <div class="container" id="seccionS">
        <h3 class="display-5 mt-40 px-5 text-right">Sobre Nosotros</h3>
        <p class="px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo,
          recusandae deleniti blanditiis distinctio natus maxime ut quia!
          Nostrum, ullam. Magnam eum dolore nobis quia voluptatem asperiores
          inventore aliquid animi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Esse dolorem tenetur magni dicta voluptate
          repudiandae omnis, iure, iusto cumque temporibus sequi debitis
          mollitia totam sunt, optio pariatur nobis facilis quaerat!
        </p>
      </div>

      <div id="sectionMV">
        <div class="container" id="seccionOb">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <h3 class="display-5 mt-40 px-5 text-right">Misión</h3>
              <p class="px-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                quo, recusandae deleniti blanditiis distinctio natus maxime ut
                quia! Nostrum, ullam. Magnam eum dolore nobis quia voluptatem
                asperiores inventore aliquid animi. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Esse dolorem tenetur magni dicta
                voluptate repudiandae omnis, iure, iusto cumque temporibus sequi
                debitis mollitia totam sunt, optio pariatur nobis facilis
                quaerat!
              </p>
            </div>
            <div class="col-lg-4 d-flex justify-content-center">
              <img src="../images/mision.png" alt="Misión" id="imgMision" />
            </div>
          </div>
        </div>

        <div class="container" id="seccionOb1">
          <div class="row align-items-center">
            <div class="col-lg-4 d-flex justify-content-center">
              <img src="../images/vision.png" alt="Visión" id="imgMision" />
            </div>

            <div class="col-lg-8">
              <h3 class="display-5 mt-40 px-5 text-left">Visión</h3>
              <p class="px-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                quo, recusandae deleniti blanditiis distinctio natus maxime ut
                quia! Nostrum, ullam. Magnam eum dolore nobis quia voluptatem
                asperiores inventore aliquid animi. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Esse dolorem tenetur magni dicta
                voluptate repudiandae omnis, iure, iusto cumque temporibus sequi
                debitis mollitia totam sunt, optio pariatur nobis facilis
                quaerat!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container" id="seccionNS">
        <h3 class="display-5 px-5"><strong>Nuestros Servicios</strong></h3>
        <p class="px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo,
          recusandae deleniti blanditiis distinctio natus maxime ut quia!
          Nostrum, ullam. Magnam eum dolore nobis quia voluptatem asperiores
          inventore aliquid animi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Esse dolorem tenetur magni dicta voluptate
          repudiandae omnis, iure, iusto cumque temporibus sequi debitis
          mollitia totam sunt, optio pariatur nobis facilis quaerat!
        </p>
      </div>
      <div
        class="container"
        id="sect_card"
      >
        <div id="card" class="col-md-4">
          <div id="picture">
            <div
              id="carruselHospedaje"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                  <img src="../images/habitacion1.jpg" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="../images/habitacion2.jpg" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="../images/habitacion3.jpg" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="../images/habitacion4.jpg" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="../images/habitacion5.jpg" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="../images/habitacion6.jpg" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carruselHospedaje"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carruselHospedaje"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div>
            <h5 id="titulo">Hospedaje</h5>
            <p id="contenid">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              sed odio aliquam nesciunt rerum vero qui, laudantium, amet hic
              libero, corporis minima exercitationem magni commodi possimus
              suscipit perferendis reiciendis tempore.
            </p>
          </div>
          <div class="p-6 pt-0">
            <router-link :to="{ name: 'Cabanas' }">
              <button class="btn-card" type="button">
                Ver mas...
              </button>
            </router-link>
          </div>
        </div>

        <div class="mx-3 mx-md-5"></div>

        <div id="card" class="col-md-4">
          <div id="picture">
            <div
              id="carruselEventos"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                  <img src="../images/eventos1.jpg" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="../images/eventos2.jpg" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="../images/eventos3.jpg" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="../images/eventos4.jpg" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="../images/eventos5.jpg" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="../images/eventos6.jpg" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carruselEventos"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carruselEventos"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div>
            <h5 id="titulo">Eventos</h5>
            <p id="contenid">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              sed odio aliquam nesciunt rerum vero qui, laudantium, amet hic
              libero, corporis minima exercitationem magni commodi possimus
              suscipit perferendis reiciendis tempore.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button class="btn-card" data-ripple-light="true" type="button">
              Ver mas...
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useReservaStore } from "../stores/reserva.js";

const reserva = useReservaStore();
</script>

<style>
#sect_card {
  display: flex;
  justify-content: center;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
}
#card {
  margin: auto;
  max-width: 563px;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  background-color: #E3F2FD;
  background-clip: border-box;
  color: rgb(55 65 81);
  box-shadow: 0 4px 6px -1px rgba(0 0 0 / 0.1), 0 2px 4px -2px rgba(0 0 0 / 0.1);
}
#picture {
  position: relative;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: -1.5rem;
  min-height: 208px;
  min-width: 260px;
  border-radius: 0.75rem;
  background-color: #3b82f6;
  background-clip: border-box;
  color: rgb(255 255 255);
  box-shadow: 0 10px 15px -3px rgba(0 0 0 / 0.1),
    0 4px 6px -4px rgba(0 0 0 / 0.1), 0 20px 25px -5px rgba(0 0 0 / 0.1),
    0 8px 10px -6px rgba(0 0 0 / 0.1);
  overflow: hidden;
}
#card h5 {
  display: block;
  font-size: 28px;
  padding: 3rem;
  padding-bottom: 0%;
  font-weight: bold !important;
  line-height: 1.625;
}
#card p {
  display: block;
  font-size: 18px;
  padding: 2rem;
  padding-top: 0%;
  padding-bottom: 0%;
}
.btn-card {
  display: block;
  margin: auto;
  background-color: #1E88E5;
  border-radius: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.reservabutton{
  background-color: #1E88E5;
  width: 1rem;
  height: 1rem;
}
#carruselEventos {
  width: 100%;
  height: 100%;
  border-radius: inherit;
}
#carruselEventos .carousel-inner,
#carruselEventos .carousel-item,
#carruselEventos img {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
}
</style>
