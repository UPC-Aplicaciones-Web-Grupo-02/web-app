<script setup>
import {ref, onMounted, computed} from 'vue';
import SuscriptionService from '../services/type.service.js';
import BaseService from "@/shared/BaseService.js";

const userId = localStorage.getItem('userId');
const suscriptions = ref([]);
const loading = ref(true);
const userSuscription = ref(null);

onMounted(async () => {
  try {
    suscriptions.value = await SuscriptionService.MostrarSuscription();
    userSuscription.value = await BaseService.http.get('/api/v1/Suscriptions/me').then(r => r.data);
    console.log("ID actual:", userId);
  } catch (error) {
    console.error('Error al cargar datos:', error);
  } finally {
    loading.value = false;
  }
});

const tipoSuscripcion = computed(() => {
  if (!userSuscription.value) return null;
  return suscriptions.value.find(t => t.id == userSuscription.value.typeId);
});
</script>

<template>
  <div class="center-container1">
    <h2 style="width: 100%; text-align: center;">Nuestras suscripción</h2> <br/> <br/>
    <div v-if="loading">Cargando suscripción...</div>
    <div v-else>


      <div v-if="userSuscription && tipoSuscripcion">
        <div class="cardDetalle" style="margin: auto;">
          <strong>ID: {{ tipoSuscripcion.id }} - {{ tipoSuscripcion.name }}</strong>
          <p>{{ tipoSuscripcion.description || 'Plan activo' }}</p>
          <p>Precio: S/. {{ tipoSuscripcion.costo }}</p>
        </div>
        <div style="text-align: center; margin-top: 1rem;">
          <span>¡Ya estás suscrito a este plan!</span>
        </div>
      </div>


      <div v-else>
        <div class="cards-row">
          <div class="cardDetalle" v-if="suscriptions.length > 0">
            <strong>ID: {{ suscriptions[0].id }} - {{ suscriptions[0].name }}</strong>
            <p>Acceso de lunes a domingo, Scooters 100% garantizados.</p>
            <p>Precio: S/. {{ suscriptions[0].costo }}</p>
          </div>
          <div class="cardDetalle" v-if="suscriptions.length > 1">
            <strong>ID: {{ suscriptions[1].id }} - {{ suscriptions[1].name }}</strong>
            <p>30 días de acceso con beneficios de recojo preferencial.</p>
            <p>Precio: S/. {{ suscriptions[1].costo }}</p>
          </div>
          <div class="cardDetalle" v-if="suscriptions.length > 2">
            <strong>ID: {{ suscriptions[2].id }} - {{ suscriptions[2].name }}</strong>
            <p>Acceso total a los beneficios durante 1 año.</p>
            <p>Precio: S/. {{ suscriptions[2].costo }}</p>
          </div>
        </div>
        <div style="text-align: center; margin-top: 1rem;">
          <br/><br/>
          <span>Aun no estas suscrito a nuestros planes </span> <br/> <br/>
          <router-link :to="`/newsuscription`">
            <pv-button label="Suscríbete" icon="pi pi-home"/>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.center-container1 {
  display: flex;
  flex-direction: column;
  height: 60vh;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #ffffff;
}

.cards-row {
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}

.cardDetalle {
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  max-width: 320px;
  border-radius: 12px;
  padding: 30px;
  box-sizing: border-box;
}

</style>
