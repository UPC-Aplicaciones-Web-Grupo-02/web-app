<script setup>
import { ref } from 'vue';
import {Button as PvButton} from "primevue";

const showDialog = ref(false);
const newScooter = ref({
  image: '',
  name: '',
  brand: '',
  model: '',
  price: '',
  direction: '',
  contact: '',
  detail: ''
});

const emit = defineEmits(['add-scooter']);

function openDialog() {
  showDialog.value = true;
}
function closeDialog() {
  showDialog.value = false;
  Object.keys(newScooter.value).forEach(k => newScooter.value[k] = '');
}
function saveScooter() {
  emit('add-scooter', { ...newScooter.value });
  closeDialog();
}
</script>

<template>
  <div>
    <pv-button class="p-button p-button-rounded p-button-success add-btn" @click="openDialog">
      <i class="pi pi-plus"></i>
    </pv-button>
    <pv-dialog v-model:visible="showDialog" header="Nuevo Scooter" :modal="true" :closable="false">
      <div class="flex flex-column gap-2">
        <label>Imagen (URL)</label>
        <pv-inputtext v-model="newScooter.image" />
        <label>Nombre</label>
        <pv-inputtext v-model="newScooter.name" />
        <label>Marca</label>
        <pv-inputtext v-model="newScooter.brand" />
        <label>Modelo</label>
        <pv-inputtext v-model="newScooter.model" />
        <label>Precio</label>
        <pv-inputtext v-model="newScooter.price" type="number" />
        <label>Dirección</label>
        <pv-inputtext v-model="newScooter.direction" />
        <label>Contacto</label>
        <pv-inputtext v-model="newScooter.contact" />
        <label>Detalle</label>
        <pv-inputtext v-model="newScooter.detail" />
      </div>
      <template #footer>
        <pv-button class="p-button p-component mr-2" @click="saveScooter">Guardar</pv-button>
        <pv-button class="p-button p-component p-button-secondary" @click="closeDialog">Cancelar</pv-button>
      </template>
    </pv-dialog>
  </div>
</template>

<style scoped>
.add-btn {
  position: relative;
  top: 0;
  right: 0;
  margin-left: 1rem;
}
</style>
