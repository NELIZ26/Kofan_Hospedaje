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
            <button class="btn btn-success btn-lg" @click="reserva.openModal()">
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

      <div class="container-fluid justify-content-center row pb-5" id="cardCarrusel">
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h2 class="text-center"><strong>Hospedaje</strong></h2>
            </div>
            <div
              id="carruselHabitaciones"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img
                    src="../images/habitacion1.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="../images/habitacion2.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../images/habitacion3.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="../images/habitacion4.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../images/habitacion5.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="../images/habitacion6.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carruselHabitaciones"
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
                data-bs-target="#carruselHabitaciones"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div class="card-body">
              <p class="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                iusto dolorum omnis nemo culpa eius. Nostrum necessitatibus eum,
                autem omnis, esse impedit sed eaque dolor reiciendis, libero in
                repudiandae ullam.
              </p>
              <button class="btn btn-outline-primary col-6" type="button">
                Ver mas...
              </button>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h2 class="text-center"><strong>Eventos</strong></h2>
            </div>
            <div
              id="carruselEventos"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img
                    src="../images/eventos1.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="../images/eventos2.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../images/eventos3.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="../images/eventos4.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../images/eventos5.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="../images/eventos6.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
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
            <div class="card-body">
              <p class="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                iusto dolorum omnis nemo culpa eius. Nostrum necessitatibus eum,
                autem omnis, esse impedit sed eaque dolor reiciendis, libero in
                repudiandae ullam.
              </p>
              <p>
                  <a class="btn btn-outline-primary col-6" type="button">
                    Ver mas...
                  </a>
                </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup> 
import { useReservaStore } from '../stores/reserva.js';

const reserva = useReservaStore();
</script>

<style></style>
