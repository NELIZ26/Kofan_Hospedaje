<template>
  <div id="cardContacto">
    <section class="contact-container">
      <h1 class="contact-title">Contacto</h1>

      <div class="contact-grid">
        <div class="contact-info">
          <h3 class="contact-subtitle">Ubicación</h3>
          <p class="contact-text">
            Vereda Agua Negra, Kilómetro 8 — Puerto Asís, Putumayo, Colombia
          </p>

          <p class="contact-text">
            <strong>Teléfono:</strong>
            <a class="contact-link" href="tel:+573224225925">+57 322 422 5925</a>
          </p>

          <p class="contact-text">
            <strong>Email:</strong>
            <a class="contact-link" href="mailto:Kofancentroecoturistico@gmail.com">Kofancentroecoturistico@gmail.com</a>
          </p>

          <div class="contact-actions">
            <a
              class="btn btn-outline"
              href="https://www.google.com/maps/search/?api=1&query=0.556460,-76.535432"
              target="_blank"
              rel="noopener"
            >
              Ver en Google Maps
            </a>

            <a
              class="btn btn-primary"
              href="https://wa.me/573224225925"
              target="_blank"
              rel="noopener"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div class="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.521652611322!2d-76.5355120619749!3d0.5560764129741063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e287e6540874957%3A0x9a11032de2a63510!2sCentro%20Ecoturistico%20Kofan!5e0!3m2!1ses!2sco!4v1762307375610!5m2!1ses!2sco"
            width="100%"
            height="200"
            style="border: 0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>

.contact-container {
  max-width: 1100px;
  margin-bottom: 1000px;
  margin-bottom: 2rem;
  padding: 4rem;
  box-sizing: border-box;
}


.contact-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #047857;
}


.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;
}


.contact-info {
  display: block;
}

.contact-subtitle {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.contact-text {
  margin-bottom: 0.75rem;
  line-height: 1.5;
  color: #374151;
}

.contact-link {
  color: #2563eb;
  text-decoration: none;
}

.contact-link:hover {
  text-decoration: underline;
}


.contact-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
}


.btn-outline {
  border: 1px solid #d1d5db;
  color: #374151;
  background: #ffffff;
}

.btn-outline:hover {
  background: #f3f4f6;
}


.btn-primary {
  background: #16a34a; 
  color: #ffffff;
  border: 1px solid #16a34a;
}

.btn-primary:hover {
  background: #15803d;
  border-color: #15803d;
}


.contact-map {
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  background: #fff;
}

#cardContacto {
  max-width: 1100px;
  margin: auto;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  background-color: #e3f2fd;
  box-shadow: 0px 106px 42px rgba(0, 0, 0, 0.01),
    0px 59px 36px rgba(0, 0, 0, 0.05), 0px 26px 26px rgba(0, 0, 0, 0.09),
    0px 7px 15px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr 1fr;
  }

  .contact-title {
    font-size: 2rem;
  }
}


@media (max-width: 420px) {
  .btn {
    padding: 0.45rem 0.8rem;
    font-size: 0.8125rem;
  }
}
</style>