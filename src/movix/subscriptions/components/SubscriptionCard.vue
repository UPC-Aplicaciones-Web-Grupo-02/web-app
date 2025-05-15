<template>
  <div class="card">
    <h3>{{ plan.name }}</h3>
    <p>{{ plan.description }}</p>
    <p><strong>S/. {{ plan.price }}</strong></p>
    <p>
      <span v-for="n in plan.stars" :key="n">⭐</span>
    </p>
    <button class="subscribe-btn" @click="$emit('subscribe', plan)">Suscribirte</button>
  </div>
</template>

<script setup>
defineProps(['plan'])
defineEmits(['subscribe'])
</script>

<style scoped>
.card {
  background-color: #e4def7;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 250px;
  margin: 1rem;
}
.subscribe-btn {
  background-color: #ee5e7c;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 6px;
}
</style>
