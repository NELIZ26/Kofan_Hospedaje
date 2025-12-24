<template>
  <div id="contenido1">
    <section class="container" id="catalogoH">
      <h1>Cabañas</h1>
      <p>Elige una de nuestras cabañas y reserva tu estancia fácilmente.</p>

      <div id="navbtn">
        <button type="button" class="btn btn-limpiar me-2">Cabañas</button>
        <button type="button" class="btn btn-filtrar me-2">
          Habitaciones
        </button>
      </div>

      <div class="cards">
        <div v-for="c in cabins" :key="c.id" id="card-cat">
          <h3>{{ c.name }}</h3>
          <p>{{ c.description }}</p>
          <div id="columnas">
            <div id="desc">
              <span>👥 {{ c.capacity }} personas</span>
              <span>${{ c.price }}/noche</span>
            </div>
            <button class="btn-1" @click="reserva.openModal()">Reservar</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useReservaStore } from "../stores/reserva.js";
const reserva = useReservaStore();

const cabins = [
  {
    id: 1,
    name: "Cabaña 1",
    capacity: 2,
    price: 120,
    description:
      "Acogedora cabaña doble con mosquitero, baño privado y acceso a senderos.",
  },
  {
    id: 2,
    name: "Cabaña 2",
    capacity: 3,
    price: 140,
    description:
      "Cabaña familiar pequeña con vistas al jardín y mobiliario rústico.",
  },
  {
    id: 3,
    name: "Cabaña 3",
    capacity: 4,
    price: 160,
    description: "Espaciosa cabaña para grupos, cerca de la piscina natural.",
  },
  {
    id: 4,
    name: "Cabaña 4",
    capacity: 2,
    price: 130,
    description: "Cabaña íntima con terraza y acceso rápido a senderos.",
  },
  {
    id: 5,
    name: "Cabaña 5",
    capacity: 5,
    price: 200,
    description: "Cabaña familiar con varias camas, ideal para grupos grandes.",
  },
  {
    id: 6,
    name: "Cabaña 6",
    capacity: 3,
    price: 150,
    description:
      "Cabaña cómoda con materiales ancestrales y buena ventilación.",
  },
  {
    id: 7,
    name: "Cabaña 7",
    capacity: 4,
    price: 170,
    description: "Cabaña amplia, cerca de zonas comunes y del restaurante.",
  },
  {
    id: 8,
    name: "Cabaña 8",
    capacity: 2,
    price: 110,
    description: "Cabaña económica, ideal para escapadas cortas.",
  },
  {
    id: 9,
    name: "Cabaña 9",
    capacity: 6,
    price: 230,
    description:
      "Cabaña grande con espacio para familias, cercana a la piscina.",
  },
];
</script>

<style scoped>
#contenido1 {
  justify-items: center;
}

#catalogoH {
  margin: 2rem;
  border-radius: 0.75rem;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  background-color: #e3f2fd;
  box-shadow: 0 10px 15px -3px rgba(0 0 0 / 0.1),
    0 4px 6px -4px rgba(0 0 0 / 0.1), 0 20px 25px -5px rgba(0 0 0 / 0.1),
    0 8px 10px -6px rgba(0 0 0 / 0.1);
}

#catalogoH h1 {
  font-size: 38px;
}

#catalogoH p {
  font-size: 18px;
}

.cards {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

#card-cat {
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #d0fdd7;
  box-shadow: 0 10px 15px -3px rgba(0 0 0 / 0.1),
    0 4px 6px -4px rgba(0 0 0 / 0.1), 0 20px 25px -5px rgba(0 0 0 / 0.1),
    0 8px 10px -6px rgba(0 0 0 / 0.1);
}

#card-cat h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

#card-cat p {
  margin-bottom: 1rem;
  font-size: 18px;
}

#card-cat span {
  margin-right: 1rem;
  display: inline-block;
}

#card-cat .btn-1 {
  background-color: green;
  color: white;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.5rem;
}

#columnas {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#navbtn{
  padding-top: 1rem;
}
</style>
