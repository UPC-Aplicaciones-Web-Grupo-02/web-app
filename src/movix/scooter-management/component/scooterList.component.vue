<script setup>
import { ref, onMounted } from 'vue';
import ScooterService from '../services/scooter.service.js';
import BrandService from '../services/brand.service.js';
import DistrictService from '../services/district.service.js';

const scooters = ref([]);
const brands = ref([]);
const districts = ref([]);
const loading = ref(false);

onMounted(async () => {
  try {
    [scooters.value, brands.value, districts.value] = await Promise.all([
      ScooterService.MostrarScooter(),
      BrandService.MostrarBrand(),
      DistrictService.MostrarDistrito()
    ]);
  } catch (error) {
    console.error('Error al cargar datos:', error);
  }
});

function getBrandName(brandId) {
  const brand = brands.value.find(b => b.id === brandId);
  return brand ? brand.name : '';
}

function getDistrictName(districtId) {
  const district = districts.value.find(d => d.id === districtId);
  return district ? district.name : '';
}
</script>

<template>
  <div style="padding: 20px">
    <h2>Lista de Scooters</h2> <br />
    <div v-if="loading">Cargando scooters...</div>
    <ul v-else class="cards-container">
      <li v-for="scooter in scooters" :key="scooter.id" class="card">
        <div style="text-align: center"><img :src="scooter.image" alt="Scooter" style="width: 60%;" /></div><br />
        <strong>{{ scooter.name }}</strong> <br />
        Marca: {{ getBrandName(scooter.brandId) }} <br />
        Distrito: {{ getDistrictName(scooter.districtId) }} <br /> <br/>
        <div style="text-align: center">
          <router-link :to="`scooter/${scooter.id}`"><pv-button label="Ver detalle" icon="pi pi-home"/></router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
.cards-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
}
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #f9f9f9;
  width: 300px;
}
ul {
  list-style: none;
}
</style>