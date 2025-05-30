<template>
  <div class="container">
    <h2 class="title">Review</h2>

    <div class="content">

      <div class="image-section">
        <img :src="scooter.image" alt="Scooter" class="scooter-image" />
        <p class="note">Always remember to be respectful with comments and opinions</p>
      </div>


      <div class="reviews-section">
        <div v-for="(review, index) in reviews" :key="index" class="review-card">
          <p><strong>Usuario:</strong> {{ review.reviewer }}</p>
          <p><strong>Puntuación:</strong> {{ review.rating }}</p>
          <p>{{ review.comment }}</p>
        </div>
      </div>
    </div>


    <div class="button-group">
      <pv-button label="Comment" icon="pi pi-comment" class="comment-button" />
      <pv-button label="Go Back" icon="pi pi-arrow-left" class="return-button" @click="goBack" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import scooterService from '../services/scooter.service'

const route = useRoute()
const router = useRouter()
const reviews = ref([])
const scooter = ref({})

onMounted(async () => {
  const id = route.params.id
  reviews.value = await scooterService.getReviews(id)
})

const goBack = () => {
  router.back()
}
</script>

<style scoped>
.container {
  background-color: #d9d6f6;
  padding: 2rem;
  border-radius: 20px;
  max-width: 900px;
  margin: 2rem auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  color: #333;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 768px) {
  .content {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
}

.image-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 200px;
}

.scooter-image {
  width: 100px;
  height: auto;
  margin-bottom: 0.5rem;
  border-radius: 10px;
}

.note {
  font-size: 14px;
  color: #555;
}

.reviews-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.review-card {
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  font-size: 14px;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.comment-button {
  background-color: #4caf50;
  border: none;
  color: white;
}

.comment-button:hover {
  background-color: #43a047;
}

.return-button {
  background-color: #f44336;
  border: none;
  color: white;
}

.return-button:hover {
  background-color: #e53935;
}
</style>
