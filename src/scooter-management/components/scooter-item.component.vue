<script>
import { ref } from "vue";

export default {
  name: "scooter-item",
  props: {
    scooter: {
      type: Object,
      required: true
    }
  },
  emits: ["update-scooter", "delete-scooter"],
  setup(props, { emit }) {
    const isEditing = ref(false);
    const edited = ref({ ...props.scooter });
    const showDeleteDialog = ref(false);

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
    function confirmDelete() {
      console.log("Abriendo diálogo de confirmación");
      showDeleteDialog.value = true;
    }
    function deleteScooter() {
      emit("delete-scooter", props.scooter.id);
      showDeleteDialog.value = false;
    }
    function cancelDelete() {
      showDeleteDialog.value = false;
    }
    return { isEditing, edited, startEdit, cancelEdit, saveEdit, showDeleteDialog, confirmDelete, deleteScooter, cancelDelete };
  }
}
</script>

<template>
  <pv-card class="m-2">
    <template #header>
      <img :src="scooter.image" v-if="!isEditing" class="scooter-img"/>
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
        <p>Price: {{ scooter.pricePerHour }}</p>
        <p>Direction: {{ scooter.direction }}</p>
        <p>Contact: {{ scooter.contact }}</p>
      </div>
      <div v-else class="flex flex-column gap-2">
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
      <div v-if="!isEditing" class="flex gap-2 align-items-center">
        <p>Detail: {{ scooter.detail }}</p>
        <pv-button class="p-button p-component mt-2" @click="startEdit">Editar</pv-button>
        <pv-button class="p-button p-button-danger p-component mt-2" @click="confirmDelete">
          <i class="pi pi-trash"></i>
        </pv-button>
      </div>
      <div v-else>
        <pv-button class="p-button p-component mr-2" @click="saveEdit">Guardar</pv-button>
        <pv-button class="p-button p-component p-button-secondary" @click="cancelEdit">Cancelar</pv-button>
      </div>
    </template>
    <pv-dialog v-model:visible="showDeleteDialog" header="Confirmar eliminación" :modal="true" :closable="false">
      <span>¿Seguro que deseas eliminar este scooter?</span>
      <template>
        <pv-button class="p-button p-button-danger mr-2" @click="deleteScooter">Eliminar</pv-button>
        <pv-button class="p-button p-button-secondary" @click="cancelDelete">Cancelar</pv-button>
      </template>
    </pv-dialog>
  </pv-card>
</template>

<style scoped>
.scooter-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
