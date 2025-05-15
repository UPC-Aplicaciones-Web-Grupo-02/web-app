<script>

import ScooterItem from "./scooter-item.component.vue";
import ScooterAdd from "./scooter-add.component.vue";
import {onMounted, ref} from "vue";
import {ScooterApiService} from "../services/scooter.services";


export default {
  name: "scooter-list",
  components:{ScooterItem, ScooterAdd},
  setup(){
    const scooters = ref([]);
    const scooterApiService = new ScooterApiService();

    onMounted(async ()=>{
      try {
        const response = await scooterApiService.getScooters();
        console.log(response.data);
        scooters.value = response.data;
      } catch (error) {
        console.error('Error when looking for scooters', error);
      }
    });
    async function updateScooter(updated) {
      try {
        await scooterApiService.updateScooter(updated.id, updated);
        const idx = scooters.value.findIndex(s => s.id === updated.id);
        if (idx !== -1) scooters.value[idx] = { ...updated };
      } catch (error) {
        console.error('Error updating scooter', error);
      }
    }
    async function addScooter(newScooter) {
      try {
        const response = await scooterApiService.createScooter(newScooter);
        scooters.value.push(response.data);
      } catch (error) {
        console.error('Error adding scooter', error);
      }
    }
    async function deleteScooter(id) {
      try {
        await scooterApiService.deleteScooter(id);
        scooters.value = scooters.value.filter(s => s.id !== id);
      } catch (error) {
        console.error('Error eliminando scooter', error);
      }
    }
    return { scooters, updateScooter, addScooter, deleteScooter };
  }
}
</script>

<template>
  <div class="grid grid-nogutter justify-content-center">
    <div v-for="scooter in scooters" :key="scooter.id" class="col-12 md:col-4 flex justify-content-center">
      <scooter-item :scooter="scooter" @update-scooter="updateScooter" @delete-scooter="deleteScooter" />
    </div>
    <div class="col-12 md:col-4 flex justify-content-center">
      <scooter-add @add-scooter="addScooter" />
    </div>
  </div>
</template>

<style scoped>

</style>
