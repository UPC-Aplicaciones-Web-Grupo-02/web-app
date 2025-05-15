<template>
  <div class="page">
    <h2>Suscripción</h2>
    <p>En Movix contamos con tres planes de suscripción que te brindarán beneficios únicos.</p>
    <div class="plans">
      <SubscriptionCard
        v-for="plan in plans"
        :key="plan.id"
        :plan="plan"
        @subscribe="selectPlan"
      />
    </div>

    <PaymentModal :visible="showPayment" :plan="selectedPlan" @close="resetModal" @paid="confirmPayment" />
  </div>
</template>

<script setup>
import { PLANS } from '../model/subscription.entity'
import { SubscriptionService } from '../services/subscription.services'
import SubscriptionCard from '../components/SubscriptionCard.vue'
import PaymentModal from '../components/PaymentModal.vue'

import { ref } from 'vue'

const plans = ref(PLANS)
const selectedPlan = ref(null)
const showPayment = ref(false)

function selectPlan(plan) {
  selectedPlan.value = plan
  showPayment.value = true
}

function resetModal() {
  showPayment.value = false
  selectedPlan.value = null
}

function confirmPayment(plan) {
  SubscriptionService.subscribe(plan)
  alert('Pago realizado con éxito')
  resetModal()
}
</script>

<style scoped>
.page {
  padding: 2rem;
  text-align: center;
}
.plans {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
