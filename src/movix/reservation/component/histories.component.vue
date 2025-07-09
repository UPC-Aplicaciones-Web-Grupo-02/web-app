<script setup>
import { ref, onMounted } from 'vue';
import BaseService from "@/shared/BaseService.js";

const userId = Number(localStorage.getItem('userId'));
const loading = ref(true);
const error = ref(null);
const reservas = ref([]);
const scooters = ref([]);
const suscripciones = ref([]);
const tipos = ref([]);

onMounted(async () => {
  if (!userId) {
    error.value = 'Usuario no autenticado.';
    loading.value = false;
    return;
  }
  try {
    const [allReservas, allScooters, allSuscripciones, allTipos] = await Promise.all([
      BaseService.http.get('/api/v1/Reservations').then(r => r.data),
      BaseService.http.get('/api/v1/Scooter/').then(r => r.data),
      BaseService.http.get('/api/v1/Suscriptions').then(r => r.data),
      BaseService.http.get('/api/v1/TypeSuscriptions').then(r => r.data)
    ]);

    reservas.value = allReservas.filter(r => r.userId === userId);
    scooters.value = allScooters;
    suscripciones.value = allSuscripciones;
    tipos.value = allTipos;

  } catch (e) {
    error.value = 'Error al cargar los datos.';
  } finally {
    loading.value = false;
  }
});

function getScooter(id) {
  return scooters.value.find(s => s.id === id) || {};
}

function getSuscripcion(id) {
  return suscripciones.value.find(s => s.id === id) || {};
}

function getTipo(id) {
  return tipos.value.find(t => t.id === id) || {};
}
</script>

<template>
  <div class="center-container2">
    <div class="card-history">
      <h2>Historial de Reservas</h2>
      <div v-if="loading">Cargando...</div>
      <div v-else-if="error" class="text-red-600">{{ error }}</div>
      <div v-else>
        <div v-if="reservas.length === 0">No tienes reservas confirmadas.</div>
        <div v-else>
          <div v-for="reserva in reservas" :key="reserva.id" class="history-item">
            <img :src="getScooter(reserva.scooterId).image" alt="Scooter" style="width:80px;">
            <div>
              <p><strong>Scooter:</strong> {{ getScooter(reserva.scooterId).name }}</p>
              <p><strong>Suscripción:</strong>
                {{ getTipo(getSuscripcion(reserva.suscriptionId).typeId).name }}
                (S/. {{ getTipo(getSuscripcion(reserva.suscriptionId).typeId).costo }})
              </p>
              <p><strong>Mensaje:</strong> {{ reserva.cantDate }}</p>
              <p><strong>ID Reserva:</strong> {{ reserva.id }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.center-container2 {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 70vh;
  background: #fff;
}

.card-history {
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  max-width: 600px;
  width: 100%;
}

.history-item {
  display: flex;
  gap: 16px;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 16px 0;
}

.text-red-600 {
  color: #b00;
}
</style>
