<script>
import { Scooter } from "../model/scooter.entity.js";
import { ref } from "vue";
import {InputText as PvInputtext} from "primevue";

export default {
  name: "scooter-item",
  components: {PvInputtext},
  props: {
    scooter: {
      type: Scooter,
      required: true
    }
  },
  emits: ["update-scooter"],
  setup(props, { emit }) {
    const isEditing = ref(false);
    const edited = ref({ ...props.scooter });

    function startEdit() {
      isEditing.value = true;
      edited.value = { ...props.scooter };
    }
    function cancelEdit() {
      isEditing.value = false;
    }
    function saveEdit() {
      emit("update-scooter", edited.value);
      isEditing.value = false;
    }
    return { isEditing, edited, startEdit, cancelEdit, saveEdit };
  }
}
</script>

<template>
  <pv-card class="m-2">
    <template #header>
      <img :src="scooter.image" v-if="!isEditing" />
    </template>
    <template #title>
      <p v-if="!isEditing">Name: {{ scooter.name }}</p>
    </template>
    <template #subtitle>
      <div v-if="!isEditing">
        <p>Id: {{ scooter.id }}</p>
        <p>Brand: {{ scooter.brand }}</p>
        <p>Model: {{ scooter.model }}</p>
      </div>
    </template>
    <template #content>
      <div v-if="!isEditing">
        <p>Price: {{ scooter.price }}</p>
        <p>Direction: {{ scooter.direction }}</p>
        <p>Contact: {{ scooter.contact }}</p>
      </div>
      <div v-else class="flex flex-column gap-2" >
        <label>Nombre</label>
        <pv-inputtext v-model="edited.name" class="p-inputtext" />
        <label>Marca</label>
        <pv-inputtext v-model="edited.brand" class="p-inputtext" />
        <label>Modelo</label>
        <pv-inputtext v-model="edited.model" class="p-inputtext" />
        <label>Precio</label>
        <pv-inputtext v-model="edited.price" type="number" class="p-inputtext" />
        <label>Detalle</label>
        <pv-inputtext v-model="edited.detail" class="p-inputtext" />
      </div>
    </template>
    <template #footer>
      <div v-if="!isEditing">
        <p>Detail: {{ scooter.detail }}</p>
        <button class="p-button p-component mt-2" @click="startEdit">Editar</button>
      </div>
      <div v-else>
        <button class="p-button p-component mr-2" @click="saveEdit">Guardar</button>
        <button class="p-button p-component p-button-secondary" @click="cancelEdit">Cancelar</button>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
</style>
