<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ScooterService from '../services/scooter.service.js';
import ModelService from '../services/model.service.js';
import BrandService from '../services/brand.service.js';
import DistrictService from '../services/district.service.js';

const route = useRoute();
const router = useRouter();
const scooter = ref(null);
const model = ref(null);
const brand = ref(null);
const district = ref(null);
const loading = ref(true);
const error = ref(null);

function reservarScooter() {
  localStorage.setItem('scooterId', route.params.id);
  router.push('/reservation');
}

onMounted(async () => {
  loading.value = true;
  error.value = null;
  try {
    const id = route.params.id;
    scooter.value = await ScooterService.MostrarScooterPorId(id);
    if (!scooter.value) {
      error.value = 'No se encontró el scooter.';
    } else {
      // Cargar datos relacionados
      [model.value] = await ModelService.MostrarModelo().then(list => list.filter(m => m.id === scooter.value.modelId));
      [brand.value] = await BrandService.MostrarBrand().then(list => list.filter(b => b.id === scooter.value.brandId));
      [district.value] = await DistrictService.MostrarDistrito().then(list => list.filter(d => d.id === scooter.value.districtId));
    }
  } catch (e) {
    error.value = 'Error al cargar los detalles del scooter.';
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div v-if="loading" style="text-align: center; padding: 20px;">
    Cargando detalle...
  </div>
  <div v-else>
    <div v-if="error" style="color: red; text-align: center;">
      {{ error }}
    </div>
    <div v-else-if="scooter" style="text-align: center; border: 1px solid green; border-radius: 12px; padding: 20px; max-width: 400px; margin: auto;">
      <img v-if="scooter.image" :src="scooter.image" alt="Scooter" style="width: 30%;" />
      <br />
      <strong>{{ scooter.name }}</strong><br />
      <span>Descripción: {{ scooter.description }}</span><br />
      <span>Modelo: {{ model?.name || scooter.modelId }}</span><br />
      <span>Marca: {{ brand?.name || scooter.brandId }}</span><br />
      <span>Distrito: {{ district?.name || scooter.districtId }}</span><br />
      <div style="text-align: center">
        <pv-button label="Reservar" icon="pi pi-home" @click="reservarScooter" />
      </div>
    </div>
    <div v-else style="text-align: center;">
      No se encontró el scooter.
    </div>
  </div>
</template>