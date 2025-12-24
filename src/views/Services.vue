<template>
  <main>
    <section>
      <div class="cardp">
        <div class="card__shine"></div>
        <div class="card__glow"></div>
        <div class="card__content">
          <div class="card__badge">NEW</div>
          <div style="--bg-color: #a78bfa" class="card__image">
            <img src="../images/Servicios.jpg" alt="">
          </div>
          <div class="card__text">
            <p class="card__title">Hospedaje</p>
            <p class="card__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, rem. Vero ducimus optio velit temporibus laudantium modi error tenetur explicabo. Sapiente vel, laboriosam voluptate saepe ad voluptates obcaecati exercitationem voluptas?</p>
          </div>
          <div class="card__footer">
            <div class="card__price">Reserva ahora</div>
            <div class="card__button" @click="reserva.openModal()">
              <svg height="16" width="16" viewBox="0 0 24 24">
                <path
                  stroke-width="2"
                  stroke="currentColor"
                  d="M4 12H20M12 4V20"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useReservaStore } from "../stores/reserva.js";

const reserva = useReservaStore();
</script>

<style>
section{
    display: grid;
    justify-content: center;
    height: auto;
}
.cardp {
  --card-bg: #ffffff;
  --card-accent: #7c3aed;
  --card-text: #1e293b;
  --card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);

  max-width: 563px;
  height: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background: var(--card-bg);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: var(--card-shadow);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-family: 'Forum';
}

.card__shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0) 60%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card__glow {
  position: absolute;
  inset: -10px;
  background: radial-gradient(
    circle at 50% 0%,
    rgba(124, 58, 237, 0.3) 0%,
    rgba(124, 58, 237, 0) 70%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
}

.card__content {
  padding: 1.25em;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  position: relative;
  z-index: 2;
}

.card__badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #10b981;
  color: white;
  padding: 0.25em 0.5em;
  border-radius: 999px;
  font-size: 0.7em;
  font-weight: 600;
  transform: scale(0.8);
  opacity: 0;
  transition: all 0.4s ease 0.1s;
}

.card__image {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #a78bfa, #8b5cf6);
  border-radius: 12px;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.card__image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
      circle at 30% 30%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 30%
    ),
    repeating-linear-gradient(
      45deg,
      rgba(139, 92, 246, 0.1) 0px,
      rgba(139, 92, 246, 0.1) 2px,
      transparent 2px,
      transparent 4px
    );
  opacity: 0.5;
}

.card__text {
  display: flex;
  flex-direction: column;
  gap: 0.25em;
}

.card__title {
  color: var(--card-text);
  font-size: 28px;
  margin: 0;
  font-weight: 700;
  transition: all 0.3s ease;
}

.card__description {
  color: var(--card-text);
  font-size: 18px;
  margin: 0;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.card__price {
  color: var(--card-text);
  font-weight: 700;
  font-size: 1em;
  transition: all 0.3s ease;
}

.card__button {
  width: 28px;
  height: 28px;
  background: var(--card-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: scale(0.9);
}

/* Hover Effects */
.cardp:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-color: rgba(124, 58, 237, 0.2);
}

.cardp:hover .card__shine {
  opacity: 1;
  animation: shine 3s infinite;
}

.cardp:hover .card__glow {
  opacity: 1;
}

.cardp:hover .card__badge {
  transform: scale(1);
  opacity: 1;
  z-index: 1;
}

.cardp:hover .card__image {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.cardp:hover .card__title {
  color: var(--card-accent);
  transform: translateX(2px);
}

.cardp:hover .card__description {
  opacity: 1;
  transform: translateX(2px);
}

.cardp:hover .card__price {
  color: var(--card-accent);
  transform: translateX(2px);
}

.cardp:hover .card__button {
  transform: scale(1);
  box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.2);
}

.cardp:hover .card__button svg {
  animation: pulse 1.5s infinite;
}

/* Active State */
.cardp:active {
  transform: translateY(-5px) scale(0.98);
}

/* Animations */
@keyframes shine {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
