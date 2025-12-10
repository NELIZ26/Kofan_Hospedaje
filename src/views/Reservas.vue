<script>
export default {
  name: "Reservas",
  data() {
    return {
      // Variables para los inputs de fecha (usando v-model)
      checkInDate: "",
      checkOutDate: "",
      // Datos de ejemplo para la tabla de reservas (usando v-for)
      reservas: [
        {
          id: 1,
          detalle: "Cabaña 2 personas",
          fechaReserva: "8/01/2025",
          checkIn: "8/20/2025",
          checkOut: "8/25/2025",
          estado: "ACEPTADA",
        },
        {
          id: 2,
          detalle: "Cabaña 2 personas",
          fechaReserva: "8/01/2025",
          checkIn: "8/20/2025",
          checkOut: "8/25/2025",
          estado: "PENDIENTE",
        },
        {
          id: 3,
          detalle: "Cabaña 2 personas",
          fechaReserva: "8/01/2025",
          checkIn: "8/20/2025",
          checkOut: "8/25/2025",
          estado: "CANCELADA",
        },
        {
          id: 4,
          detalle: "Cabaña 2 personas",
          fechaReserva: "8/01/2025",
          checkIn: "8/20/2025",
          checkOut: "8/25/2025",
          estado: "PENDIENTE",
        },
        {
          id: 5,
          detalle: "Cabaña 2 personas",
          fechaReserva: "8/01/2025",
          checkIn: "8/20/2025",
          checkOut: "8/25/2025",
          estado: "ACEPTADA",
        },
      ],
    };
  },
  methods: {
    // Función para obtener la clase de estilo para el estado
    getStatusBadgeClass(estado) {
      const baseClass = "badge rounded-pill";
      switch (estado) {
        case "ACEPTADA":
          return `${baseClass} bg-success-light`;
        case "PENDIENTE":
          return `${baseClass} bg-warning-light`;
        case "CANCELADA":
          return `${baseClass} bg-danger-light`;
        default:
          return baseClass;
      }
    },
  },
};
</script>

<template>
  <div class="page-wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-10 main-content">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h2>Reservas &bullet; Titular: Nelson Contreras</h2>
            <div class="d-flex align-items-center">
              <img
                src="https://images.icon-icons.com/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"
                alt="Imagen de perfil"
                class="rounded-circle"
                style="width: 50px; height: 50px"
              />
            </div>
          </div>

          <div class="search-form">
            <form class="row g-3 align-items-center mb-3"></form>
            <form>
              <div class="row g-2 align-items-end">
                <div class="col-auto">
                  <label for="check_in" class="form-label visually-hidden"
                    >Check In</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    id="check_in"
                    v-model="checkInDate"
                  />
                </div>
                <div class="col-auto">
                  <label for="check_out" class="form-label visually-hidden"
                    >Check Out</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    id="check_out"
                    v-model="checkOutDate"
                  />
                </div>

                <div class="col-auto d-flex ms-auto">
                  <button type="button" class="btn btn-limpiar me-2">
                    Limpiar
                  </button>
                  <button type="button" class="btn btn-filtrar me-2">
                    Filtrar lista
                  </button>
                  <button type="button" class="btn btn-reservar">
                    Reservar
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div class="table-responsive">
            <table class="table align-middle">
              <thead>
                <tr>
                  <th scope="col">Detalle</th>
                  <th scope="col">Fecha de reserva</th>
                  <th scope="col">
                    Check In / Check Out
                    <i class="fa-solid fa-calendar-days text-secondary"></i>
                  </th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="reserva in reservas" :key="reserva.id">
                  <td>
                    <div class="table-detalle">
                      <router-link :to="{ name: 'details' }"
                        ><i class="fa-solid fa-circle-plus me-2 text-info"></i
                      ></router-link>
                      <strong>{{ reserva.detalle }}</strong>
                      <span>Huespedes Adultos</span>
                    </div>
                  </td>
                  <td>{{ reserva.fechaReserva }}</td>
                  <td>{{ reserva.checkIn }} - {{ reserva.checkOut }}</td>
                  <td>
                    <span :class="getStatusBadgeClass(reserva.estado)">{{
                      reserva.estado
                    }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-content {
  padding: 30px;
  width: 100%;
}
</style>
