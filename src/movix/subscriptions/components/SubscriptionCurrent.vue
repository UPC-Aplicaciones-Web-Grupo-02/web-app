<template>
  <div class="page">
    <h2>Mi Suscripción</h2>
    <p>Esta es tu suscripción actual, puedes cambiarla cuando gustes</p>

    <div v-if="plan" class="card">
      <h3>{{ plan.name }}</h3>
      <p>{{ plan.description }}</p>
      <p><strong>S/. {{ plan.price }}</strong></p>
      <p>
        <span v-for="n in plan.stars" :key="n">⭐</span>
      </p>
      <button class="green" @click="goToChange">Cambiar</button>
      <button class="red" @click="showConfirm = true">Cancelar</button>
    </div>
    <ConfirmCancelModal :visible="showConfirm" @close="showConfirm = false" @confirm="cancelSub" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { SubscriptionService } from '../services/subscription.services'
import ConfirmCancelModal from './ConfirmCancelModal.vue'

const plan = ref(SubscriptionService.getCurrent())
const showConfirm = ref(false)

function cancelSub() {
  SubscriptionService.cancel()
  showConfirm.value = false
  plan.value = null
  alert('Suscripción cancelada')
}

function goToChange() {
  window.location.href = '/suscripciones'
}
</script>

<style scoped>
.page {
  padding: 2rem;
  text-align: center;
}
.card {
  background-color: #e4def7;
  border-radius: 10px;
  padding: 20px;
  margin: 0 auto;
  width: 300px;
}
.green, .red {
  padding: 8px 12px;
  border: none;
  margin: 10px;
  color: white;
  cursor: pointer;
}
.green { background-color: #61c66d; }
.red { background-color: #ee5e7c; }
</style>
