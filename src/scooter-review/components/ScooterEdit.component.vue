<template>
  <div class="p-5">
    <h2 class="text-center text-2xl font-bold mb-5">Detalle del Scooter</h2>

    <div class="grid">
     
      <div class="col-12 md:col-6 mb-4">
        <img :src="scooter.image" class="w-full h-18rem object-contain border rounded" alt="Scooter" />
      </div>

     
      <div class="col-12 md:col-6">
        <p><strong>Nombre:</strong> {{ scooter.name }}</p>
        <p><strong>Marca:</strong> {{ scooter.brand }}</p>
        <p><strong>Modelo:</strong> {{ scooter.model }}</p>
        <p><strong>Precio por hora:</strong> S/. {{ scooter.pricePerHour }}</p>
        <p><strong>Dirección:</strong> {{ scooter.address }}</p>
        <p><strong>Contacto:</strong> {{ scooter.contact }}</p>
        <p><strong>Región:</strong> {{ scooter.region }}</p>

        <!-- Alquiler -->
        <div class="mt-4">
          <pv-inputNumber
              v-model="hours"
              placeholder="Cantidad de horas"
              :min="1"
              class="mb-2 w-full"
              input-id="horas"
          />
          <p><strong>Total a pagar:</strong> S/. {{ total.toFixed(2) }}</p>

          <div class="flex gap-3 mt-4">
            <pv-button label="Alquilar" severity="success" @click="rent" />
            <pv-button label="Regresar" severity="secondary" outlined @click="goBack" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import scooterService from '../services/scooter.service';

const route = useRoute();
const router = useRouter();

const scooter = ref({});
const hours = ref(1);

onMounted(async () => {
  const id = route.params.id;
  scooter.value = await scooterService.getById(id);
});

const total = computed(() => {
  return scooter.value.pricePerHour * (hours.value || 0);
});

const rent = () => {
  if (!hours.value || hours.value <= 0) {
    alert('Por favor, ingresa una cantidad válida de horas.');
    return;
  }
  alert(`Has alquilado el scooter por ${hours.value} hora(s).\n💰 Total a pagar: S/. ${total.value.toFixed(2)}`);
};

const goBack = () => {
  router.back();
};
</script>
