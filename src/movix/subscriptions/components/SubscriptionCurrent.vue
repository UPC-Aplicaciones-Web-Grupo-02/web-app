<template>
  <div class="current-subscription-box">
    <h2>{{ $t('subscription.title') }}</h2>
    <p>{{ $t('subscription.descriptionCurrent') }}</p>

    <div v-if="plan" class="subscription-card">
      <div class="subscription-details">
        <i class="pi pi-globe" style="font-size: 2rem"></i>
        <h3>{{ $t(plan.name) }}</h3>
        <p><span v-for="n in plan.stars" :key="n">⭐</span></p>
        <p class="description">{{ $t(plan.description) }}</p>
        <p><strong>S/. {{ plan.price }}</strong></p>
      </div>

      <div class="button-group">
        <button class="green" @click="showChange = true">{{ $t('modal.change') }}</button>
        <button class="red" @click="showConfirm = true">{{ $t('modal.cancel') }}</button>
      </div>
    </div>

    <ConfirmCancelModal
      :visible="showConfirm"
      @close="showConfirm = false"
      @confirm="cancelSub"
    />

    <ConfirmChangeModal
      :visible="showChange"
      @close="showChange = false"
      @confirm="goToChange"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { SubscriptionService } from '../services/subscription.services'
import { PLANS } from '../model/subscription.entity'
import ConfirmCancelModal from './ConfirmCancelModal.vue'
import ConfirmChangeModal from './ConfirmChangeModal.vue'

const { t } = useI18n()
const plan = ref(null)
const showConfirm = ref(false)
const showChange = ref(false)

onMounted(async () => {
  try {
    const latestSub = await SubscriptionService.getCurrent()
    if (latestSub?.id) {
      const matched = PLANS.find(p => p.id === latestSub.id)
      if (matched) {
        plan.value = matched
      } else {
        console.warn('No se encontró el plan:', latestSub.id)
      }
    }
  } catch (e) {
    console.error('Error obteniendo la suscripción actual', e)
  }
})

async function cancelSub() {
  if (plan.value?.id) {
    await SubscriptionService.cancel(plan.value.id)
    plan.value = null
    showConfirm.value = false
    alert(t('subscription.canceled'))
  }
}

function goToChange() {
  window.location.href = '/suscripciones'
}
</script>

<style scoped>
.current-subscription-box {
  background-color: #d7d5e9;
  border-radius: 16px;
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  text-align: center;
}
.subscription-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.subscription-details {
  margin-bottom: 1rem;
}
.description {
  max-width: 300px;
  font-size: 0.85rem;
  margin: 0 auto;
  color: #333;
}
.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.green {
  background-color: #61c66d;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.red {
  background-color: #ee5e7c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
