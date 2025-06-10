<template>
  <div class="center-containercreate">
    <div class="register">
      <h2>Crear Scooter</h2>
      <form @submit.prevent="crearScooter"> <br />
        <div>
          <pv-floatlabel variant="on">
            <pv-inputtext id="on_label" v-model="nuevaScooter.name" type="text" required/>
            <label for="on_label">Nombre</label>
          </pv-floatlabel>
        </div> <br />
        <div>
          <pv-floatlabel variant="on">
            <pv-inputtext id="on_label" v-model="nuevaScooter.description" type="text" required/>
            <label for="on_label">Descripción</label>
          </pv-floatlabel>
        </div> <br />
        <div>
          <pv-floatlabel class="w-full md:w-56" variant="on">
            <pv-select
                v-model="nuevaScooter.modelId"
                inputId="modelo_select"
                :options="modelos"
                optionLabel="name"
                optionValue="id"
                placeholder=" "
                class="w-full select"
                required
            />
            <label for="modelo_select">Modelo</label>
          </pv-floatlabel>
        </div> <br />
        <div>
          <pv-floatlabel class="w-full md:w-56" variant="on">
            <pv-select
                v-model="nuevaScooter.brandId"
                inputId="brand_select"
                :options="marcas"
                optionLabel="name"
                optionValue="id"
                placeholder=" "
                class="w-full select"
                required
            />
            <label for="brand_select">Marca</label>
          </pv-floatlabel>
        </div>
        <br />
        <div>
          <pv-floatlabel class="w-full md:w-56" variant="on">
            <pv-select
                v-model="nuevaScooter.districtId"
                inputId="district_select"
                :options="distritos"
                optionLabel="name"
                optionValue="id"
                placeholder=" "
                class="w-full select"
                required
            />
            <label for="district_select">Distrito</label>
          </pv-floatlabel>
        </div> <br />
        <div>
          <pv-floatlabel variant="on">
            <pv-inputtext id="on_label" v-model="nuevaScooter.image" type="text" required/>
            <label for="on_label">Imagen (URL)</label>
          </pv-floatlabel>
        </div> <br />
        <div style="margin-top: 16px; text-align: center;">
          <pv-button type="submit">Guardar</pv-button>
        </div>

        <div style="text-align: center; margin-top: 1rem;">
          <router-link to="/admin/list" class="font-bold">Lista de Scooter</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ScooterService from '../services/scooter.service.js';
import ModelService from '../services/model.service.js';
import BrandService from '../services/brand.service.js';
import DistrictService from '../services/district.service.js';

const nuevaScooter = ref({
  name: '',
  description: '',
  modelId: '',
  brandId: '',
  districtId: '',
  image: ''
});
const modelos = ref([]);
const marcas = ref([]);
const distritos = ref([]);

onMounted(async () => {
  modelos.value = await ModelService.MostrarModelo();
  marcas.value = await BrandService.MostrarBrand();
  distritos.value = await DistrictService.MostrarDistrito();
});

async function crearScooter() {
  try {
    await ScooterService.CrearScooter(nuevaScooter.value);
    alert('Scooter creada correctamente');
    nuevaScooter.value = { name: '', description: '', modelId: '', brandId: '', districtId: '', image: '' };
  } catch (error) {
    alert('Error al crear scooter');
  }
}
</script>

<style>
.select {
  width: 100%;
  height: 35px !important;
  padding: 8px 12px !important;
  max-width: 220px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.center-containercreate {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #ffffff;
}
.register {
  background-color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  max-width: 320px;
  border-radius: 12px;
  padding: 60px;
}
</style>