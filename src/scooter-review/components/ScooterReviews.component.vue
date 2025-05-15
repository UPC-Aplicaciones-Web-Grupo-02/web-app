<template>
  <div class="p-5">
    <h2 class="mb-4">Reviews</h2>
    <div class="grid">
      <div class="col-12 md:col-4">
        <img :src="scooter.image" class="w-full h-18rem object-contain"  alt=""/>
      </div>
      <div class="col-12 md:col-8">
        <pv-card v-for="review in reviews" :key="review.id" class="mb-3">
          <p><strong>{{ review.user }}</strong></p>
          <p>{{ review.comment }}</p>
        </pv-card>
        <div class="flex gap-2 mt-3">
          <pv-button label="Comment" severity="success" />
          <pv-button label="Back" severity="danger" outlined />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import scooterService from '../services/scooter.service';

const scooter = ref({});
const reviews = ref([]);
const route = useRoute();

onMounted(async () => {
  scooter.value = await scooterService.getById(route.params.id);
  reviews.value = await scooterService.getReviews(route.params.id);
});
</script>
