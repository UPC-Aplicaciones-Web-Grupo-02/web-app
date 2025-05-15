<template>
  <div class="p-5">
    <div class="cards-container">
      <div class="header">
        <h2 class="title">Available Scooters</h2>
        <pv-select
            v-model="selectedRegion"
            :options="regions"
            option-label="label"
            option-value="value"
            placeholder="Select District"
            class="w-60"
        />
      </div>

      <div class="cards">
        <pv-card
            v-for="scooter in scooters"
            :key="scooter.id"
            class="scooter-card"
        >
          <template #header>
            <img
                :src="scooter.image"
                alt="Scooter"
                class="scooter-image"
            />
          </template>
          <template #footer>
            <pv-button
                label="Ver detalle"
                severity="success"
                @click="goToDetails(scooter.id)"
                class="w-full"
            />
          </template>
          <p><strong>{{ scooter.name }}</strong> - {{ scooter.brand }} {{ scooter.model }}</p>
          <p><small>{{ scooter.region }}</small></p>
        </pv-card>
      </div>
    </div>

    <div class="bottom-button">
      <pv-button label="See my Scooters" severity="success" class="main-button" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import scooterService from '../services/scooter.service';
import { useRouter } from 'vue-router';
import PvSelect from 'primevue/select'
import PvButton from 'primevue/button';
import PvCard from 'primevue/card';


const router = useRouter();
const scooters = ref([]);
const selectedRegion = ref(null);
const regions = ref([
  { label: 'All Districts', value: null },
  { label: 'Miraflores', value: 'Miraflores' },
]);

onMounted(async () => {
  scooters.value = await scooterService.getAll();
});

watch(selectedRegion, async (newRegion) => {
  scooters.value = newRegion
      ? await scooterService.getByRegion(newRegion)
      : await scooterService.getAll();
});

const goToDetails = (id) => {
  router.push({ name: 'ScooterDetails', params: { id } });
};
</script>

<style scoped>
.cards-container {
  background-color: #d9d6f6;
  padding: 2rem;
  border-radius: 12px;
  max-width: 960px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.title {
  margin: 0;
  font-weight: bold;
  font-size: 1.5rem;
}

.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.scooter-card {
  width: 15rem;
}

.scooter-image {
  width: 100%;
  height: 10rem;
  object-fit: contain;
}

.bottom-button {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.main-button {
  padding: 0.75rem 2rem;
  font-size: 1rem;
}
</style>
