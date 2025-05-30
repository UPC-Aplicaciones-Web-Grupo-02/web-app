<template>
  <div class="scooter-detail-container">
    <h2 class="section-title">Scooter Details</h2>
    <div class="scooter-detail-card">
      <div class="left-section">
        <img :src="scooter.image" class="scooter-img" alt="Scooter" />
        <p class="note-text">
          Always remember to bring your <br />
          ID to identify yourself to <br />
          the owner before picking <br />
          up the scooter.
        </p>
        <pv-button label="Reseñas" severity="danger" @click="goToReviews(scooter.id)" class="mb-4" />
        <div class="hours-input">
          <label>Hours to rent:</label>
          <pv-input-number v-model="form.duration" class="hours-field" />
        </div>
      </div>

      <div class="right-section">
        <div class="info-group" v-if="scooter.name">
          <label>Name:</label>
          <pv-input-text :value="scooter.name" disabled />
        </div>
        <div class="info-group">
          <label>Brand:</label>
          <pv-input-text :value="scooter.brand" disabled />
        </div>
        <div class="info-group">
          <label>Model:</label>
          <pv-input-text :value="scooter.model" disabled />
        </div>
        <div class="info-group">
          <label>Price per hour:</label>
          <pv-input-text :value="'S/. ' + scooter.price" disabled />
        </div>
        <div class="info-group">
          <label>Adress:</label>
          <pv-input-text :value="scooter.region" disabled />
        </div>
        <div class="info-group">
          <label>Contact:</label>
          <pv-input-text :value="scooter.contact" disabled />
        </div>
      </div>
    </div>

    <div class="button-group">
      <pv-button label="Rent" severity="success" class="action-btn" />
      <pv-button label="Go Back" severity="danger" outlined class="action-btn" @click="goBack"/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import PvInputText from 'primevue/inputtext';
import PvInputNumber from 'primevue/inputnumber';
import PvButton from 'primevue/button';
import scooterService from '../services/scooter.service';
import router from "@/routes/route.js";


const route = useRoute();
const scooter = ref({});
const form = ref({ duration: 0 });

const goToReviews = (id) => {
  router.push({ name: 'ScooterReviews', params: { id } });
};
const goBack = () => {
  router.back()
}

onMounted(async () => {
  if (route.params.id) {
    scooter.value = await scooterService.getById(route.params.id);
  } else {
    console.warn("No se recibió el ID del scooter en la ruta.");
  }
});
</script>

<style scoped>
.scooter-detail-container {
  background-color: #d9d6f6;
  padding: 2rem;
  border-radius: 16px;
  max-width: 960px;
  margin: 2rem auto;
}

.section-title {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.scooter-detail-card {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.left-section {
  flex: 1 1 40%;
  text-align: center;
}

.scooter-img {
  width: 100%;
  max-height: 220px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.note-text {
  font-size: 0.95rem;
  margin-bottom: 1rem;
  color: #333;
}

.hours-input {
  margin-top: 1rem;
}

.hours-field {
  margin-left: 0.5rem;
  width: 4rem;
}

.right-section {
  flex: 1 1 55%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-group label {
  display: block;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.info-group input {
  width: 100%;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.action-btn {
  width: 150px;
}
</style>
