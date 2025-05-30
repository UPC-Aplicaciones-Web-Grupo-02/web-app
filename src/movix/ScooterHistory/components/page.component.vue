<script setup>
import { ref } from "vue";
import ScooterHistory from "@/movix/ScooterHistory/components/scooter-history.component.vue";
import ScooterDetails from "@/movix/ScooterHistory/components/scooter-details.components.vue";
import scooterData from "../../../../server/db.json";

const scooters = ref(scooterData.scooters.filter(p => p.region === "Miraflores"));
const selectedScooter = ref(null);

const showScooterDetails = (scooter) => {
  selectedScooter.value = scooter;
};
const closeScooterDetails = () => {
  selectedScooter.value = null;
};

</script>

<template>
  <div class="">
    <ScooterHistory :scooters="scooters" @selectScooter="showScooterDetails" />
    <ScooterDetails v-if="selectedScooter" :scooter="selectedScooter" @close="closeScooterDetails" />
  </div>
</template>
