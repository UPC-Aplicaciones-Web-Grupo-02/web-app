<script setup>
import { ref, onMounted, computed } from 'vue';
import typeService from '../services/type.service.js';
import router from "../../../router/router.js";

const userId = localStorage.getItem('userId');
const nuevaSuscripcion = ref({
  number: '',
  date: '',
  cvv: '',
  typeId: ''
});
const tipos = ref([]);
const error = ref(null);
const errorNumber = ref('');
const errorDate = ref('');
const errorCvv = ref('');
const errorType = ref('');

onMounted(async () => {
  tipos.value = await typeService.MostrarSuscription();
});

const precioSeleccionado = computed(() => {
  const tipo = tipos.value.find(t => t.id === nuevaSuscripcion.value.typeId);
  return tipo ? tipo.costo : '';
});

async function registrarSuscripcion() {
  error.value = '';
  errorNumber.value = '';
  errorDate.value = '';
  errorCvv.value = '';
  errorType.value = '';

  if (!userId) {
    error.value = 'No se encontró usuario autenticado.';
    return;
  }
  if (!/^\d{16}$/.test(nuevaSuscripcion.value.number)) {
    errorNumber.value = 'El número de tarjeta debe tener exactamente 16 dígitos.';
  }
  if (!/^[\w\d]{8}$/.test(nuevaSuscripcion.value.date)) {
    errorDate.value = 'La fecha debe tener exactamente 8 caracteres.';
  }
  if (!/^\d{3}$/.test(nuevaSuscripcion.value.cvv)) {
    errorCvv.value = 'El CVV debe tener exactamente 3 dígitos.';
  }
  if (!nuevaSuscripcion.value.typeId) {
    errorType.value = 'Debe seleccionar un tipo de suscripción.';
  }
  if (errorNumber.value || errorDate.value || errorCvv.value || errorType.value) {
    return;
  }
  try {
    await typeService.RegistrarSuscription({
      ...nuevaSuscripcion.value,
      userId
    });
    nuevaSuscripcion.value = { number: '', date: '', cvv: '', typeId: '' };
    router.push('/view');
  } catch (e) {
    error.value = 'Error al registrar suscripción';
  }
}
</script>

<template>
  <div class="center-containerSuscription">
    <div class="suscription">
      <h2>Registrar Suscripción</h2>
      <div v-if="error" style="color: #b00; text-align: center;">{{ error }}</div>
      <form v-else @submit.prevent="registrarSuscripcion">
        <br />
        <div>
          <pv-floatlabel variant="on">
            <pv-inputtext id="number" v-model="nuevaSuscripcion.number" type="number" required/>
            <label for="number">Número de Tarjeta</label>
          </pv-floatlabel>
          <div v-if="errorNumber" style="color: #b00; font-size: 0.9em;">{{ errorNumber }}</div>
        </div> <br />
        <div>
          <pv-floatlabel variant="on">
            <pv-inputtext id="date" v-model="nuevaSuscripcion.date" type="text" maxlength="8" required/>
            <label for="date">Fecha de experación</label>
          </pv-floatlabel>
          <div v-if="errorDate" style="color: #b00; font-size: 0.9em;">{{ errorDate }}</div>
        </div> <br />
        <div>
          <pv-floatlabel variant="on">
            <pv-inputtext id="cvv" v-model="nuevaSuscripcion.cvv" type="number" required maxlength="3"/>
            <label for="cvv">CVV</label>
          </pv-floatlabel>
          <div v-if="errorCvv" style="color: #b00; font-size: 0.9em;">{{ errorCvv }}</div>
        </div> <br />
        <div>
          <pv-floatlabel class="w-full md:w-56" variant="on">
            <pv-select
                v-model="nuevaSuscripcion.typeId"
                inputId="type_select"
                :options="tipos"
                optionLabel="name"
                optionValue="id"
                placeholder=" "
                class="w-full select"
                required
            />
            <label for="type_select">Tipo de Suscripción</label>
          </pv-floatlabel>
          <div v-if="errorType" style="color: #b00; font-size: 0.9em;">{{ errorType }}</div>
        </div> <br />
        <div v-if="precioSeleccionado" style="margin: 10px 0; text-align: center;">
          <strong>Precio: S/. {{ precioSeleccionado }}</strong>
        </div>
        <br />
        <div style="margin-top: 16px; text-align: center;">
          <pv-button type="submit">Guardar</pv-button>
          <pv-button type="button" severity="secondary" @click="router.push('/suscription')">Cancelar</pv-button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.select {
  width: 100%;
  height: 35px !important;
  padding: 8px 12px !important;
  max-width: 220px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.center-containerSuscription {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #ffffff;
}
.suscription {
  background-color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  max-width: 620px;
  border-radius: 12px;
  padding: 60px;
}
</style>