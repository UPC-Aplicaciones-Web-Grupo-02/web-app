<script setup>
import { ref, onMounted } from 'vue';
import reservationService from '../services/reservation.services.js';
import router from "../../../router/router.js";
import BaseService from "@/shared/BaseService.js";

// Obtener userId y scooterId desde el localStorage
const userId = Number(localStorage.getItem('userId'));
const scooterId = Number(localStorage.getItem('scooterId'));

const loading = ref(true);
const error = ref(null);

const suscripcion = ref(null);
const tipoSuscripcion = ref(null);
const scooter = ref(null);

onMounted(async () => {
  if (!userId) {
    error.value = 'Usuario no autenticado.';
    loading.value = false;
    return;
  }

  if (!scooterId) {
    error.value = 'No se seleccionó un scooter.';
    loading.value = false;
    return;
  }

  try {
    // Cargar todos los datos necesarios al mismo tiempo
    const [suscripciones, tipos, scooters] = await Promise.all([
      BaseService.http.get('/api/v1/Suscriptions').then(r => r.data),
      BaseService.http.get('/api/v1/TypeSuscriptions').then(r => r.data),
      BaseService.http.get('/api/v1/Scooter').then(r => r.data)
    ]);

    // Buscar la suscripción activa del usuario
    suscripcion.value = suscripciones.find(s => s.userId === userId);
    if (!suscripcion.value) {
      error.value = 'No tienes una suscripción activa.';
      return;
    }

    // Buscar tipo de suscripción
    tipoSuscripcion.value = tipos.find(t => t.id === suscripcion.value.typeId);

    // Buscar scooter seleccionado
    scooter.value = scooters.find(s => s.id === scooterId);

    if (!scooter.value) {
      error.value = 'No se encontró el scooter seleccionado.';
    }

  } catch (e) {
    console.error(e);
    error.value = 'Error al cargar los datos.';
  } finally {
    loading.value = false;
  }
});

// Mensaje dinámico según el tipo de suscripción
function mensajeReserva() {
  if (!tipoSuscripcion.value) return '';
  switch (tipoSuscripcion.value.id) {
    case 1: return "Esta reserva es válida por 7 días (Plan Semanal).";
    case 2: return "Esta reserva es válida por 30 días (Plan Mensual).";
    case 3: return "Esta reserva es válida por 90 días (Plan Trimestral).";
    default: return "";
  }
}

// Confirmar reserva
async function confirmarReserva() {
  try {
    await reservationService.createReservation({
      cantDate: mensajeReserva(),
      scooterId,
      userId,
      suscriptionId: suscripcion.value.id
    });
    alert('Reserva realizada con éxito');
    router.push('/histories');
  } catch (e) {
    console.error(e);
    alert('Error al realizar la reserva');
  }
}
</script>

<template>
  <div class="center-container2">
    <div class="card-confirm">
      <h2>Confirmación de Reserva</h2>

      <div v-if="loading">Cargando...</div>

      <div v-else-if="error" class="text-red-600">{{ error }}</div>

      <div v-else>
        <div v-if="suscripcion && tipoSuscripcion && scooter">
          <img :src="scooter.image" alt="Scooter" style="width:120px; margin-bottom:1rem;">
          <p><strong>Scooter:</strong> {{ scooter.name }}</p>
          <p><strong>Suscripción:</strong> {{ tipoSuscripcion.name }} (S/. {{ tipoSuscripcion.costo }})</p>
          <p>{{ mensajeReserva() }}</p>
          <pv-button label="Confirmar Reserva" class="mt-4" @click="confirmarReserva" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.center-container2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background: #ffffff;
}

.card-confirm {
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  max-width: 350px;
  width: 100%;
  text-align: center;
}

.text-red-600 {
  color: #b00;
}
</style>
