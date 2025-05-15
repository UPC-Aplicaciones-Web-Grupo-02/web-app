<script>

import ScooterItem from "./scooter-item.component.vue";
import {onMounted, ref} from "vue";
import {ScooterApiService} from "../services/scooter.services";

export default {
  name: "scooter-list",
  components:{ScooterItem},
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
    return {scooters};
  }
}
</script>

<template>
  <div>
    <scooter-item v-for="scooter in scooters" :key="scooter.id" :scooter="scooter"></scooter-item>
  </div>
</template>

<style scoped>

</style>
