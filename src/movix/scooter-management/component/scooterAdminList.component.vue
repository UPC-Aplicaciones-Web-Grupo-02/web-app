<script setup>
import {ref, onMounted} from 'vue';
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

async function eliminarScooter(id) {
  if (confirm('¿Seguro que deseas eliminar este scooter?')) {
    await ScooterService.EliminarScooter(id);
    scooters.value = scooters.value.filter(s => s.id !== id);
  }
}
</script>

<template>
  <div style="padding: 20px">
    <h2 style="text-align: center">Lista de Scooters</h2> <br/>
    <div style="text-align: center; margin: 1rem 1rem; font-size: 17px">
      <span>¿Quieres agregar mas scooter?: </span>
      <router-link to="/admin/create" class="font-bold">Agregar</router-link>
    </div>
    <div v-if="loading">Cargando scooters...</div>
    <ul v-else class="cards-container">
      <li v-for="scooter in scooters" :key="scooter.id" class="card">
        <div style="text-align: center"><img :src="scooter.image" alt="Scooter" style="width: 60%;"/></div>
        <br/>
        <strong>{{ scooter.name }}</strong> <br/>
        Marca: {{ getBrandName(scooter.brandId) }} <br/>
        Distrito: {{ getDistrictName(scooter.districtId) }} <br/> <br/>
        <div style="text-align: center">
          <router-link :to="`/admin/detalle/${scooter.id}`">
            <pv-button label="Ver detalle" icon="pi pi-home"/>
          </router-link>
          <pv-button
              label="Eliminar"
              icon="pi pi-trash"
              class="p-button-danger"
              style="margin-left: 8px"
              @click="eliminarScooter(scooter.id)"
          />
        </div>
      </li>
    </ul>
    <div style="text-align: center; margin-top: 1rem;">
      <span>¿Deseas agregar mas Scooter) </span> <br/><br/>
      <router-link :to="`/admin/create`">
        <pv-button label="Crear" icon="pi pi-cog"/>
      </router-link>
    </div>
  </div>
</template>

<style>

ul {
  list-style: none;
}
</style>