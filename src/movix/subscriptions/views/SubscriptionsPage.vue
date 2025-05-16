<template>
  <div class="page">
    <!-- Encabezados dinámicos -->
    <div v-if="!selectedPlan">
      <h2>{{ $t('subscription.title') }}</h2>
      <p>{{ $t('subscription.description') }}</p>
    </div>
    <div v-else>
      <h2 class="payment-title">{{ $t('modal.paymentTitle') }}</h2>
    </div>

    <!-- Planes de suscripción -->
    <div v-if="!selectedPlan" class="plans" role="list" aria-label="Subscription plans">
      <SubscriptionCard
        v-for="plan in plans"
        :key="plan.id"
        :plan="plan"
        @subscribe="selectPlan"
      />
    </div>

    <!-- Formulario de pago -->
    <div v-if="selectedPlan" class="payment-box">
      <div class="payment-left">
        <h3>{{ $t('modal.successTitle') }}</h3>
        <div class="logo-container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" height="40" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" height="40" />
        </div>
        <p>{{ $t('modal.warningDescription') }}</p>
      </div>

      <form class="payment-form" @submit.prevent="confirmPayment">
        <input :placeholder="$t('form.cardNumber')" required />
        <input :placeholder="$t('form.expiration')" required />
        <input :placeholder="$t('form.cvv')" required />
        <input :placeholder="$t('form.account')" required />
        <p>{{ $t('form.totalToPay') }}: <strong>S/. {{ selectedPlan.price }}</strong></p>

        <button class="green" type="submit">{{ $t('modal.pay') }}</button>
        <button class="red" type="button" @click="resetModal">{{ $t('modal.cancel') }}</button>
      </form>
    </div>
    <PaymentSuccessModal
      v-if="showSuccessModal"
      @close="handleSuccessModalClose"
    />
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import { useI18n } from 'vue-i18n'
import { PLANS } from '../model/subscription.entity'
import { SubscriptionService } from '../services/subscription.services'
import SubscriptionCard from '../components/SubscriptionCard.vue'
import PaymentSuccessModal from '../components/PaymentSuccessModal.vue'

const { t } = useI18n()

const plans = ref(PLANS)
const selectedPlan = ref(null)
const showSuccessModal = ref(false)

function selectPlan(plan) {
  selectedPlan.value = plan
}

function resetModal() {
  selectedPlan.value = null
}

async function confirmPayment() {
  try {
    await SubscriptionService.create(selectedPlan.value)
    showSuccessModal.value = true
  } catch (e) {
    alert('Hubo un error al pagar')
  }
}

function handleSuccessModalClose() {
  showSuccessModal.value = false
  window.location.href = '/mi-suscripcion'
}

onMounted(async () => {
  const result = await SubscriptionService.getCurrent()

  if (result?.id) {
    const matched = PLANS.find(p => p.id === result.id)
    if (matched) plan.value = matched
    else console.warn('Plan no encontrado con ID:', result.id)
  }
})
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

.payment-box {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  border-radius: 12px;
  background-color: #ded6f2;
  max-width: 900px;
  margin: 2rem auto;
}

.payment-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.logo-container {
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
}

.payment-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: left;
}

.payment-form input {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #3a3a3a;
  color: white;
}

.payment-form input::placeholder {
  color: #ccc;
}

.payment-form p {
  margin-top: 10px;
  margin-bottom: 10px;
}

.green {
  background-color: #61c66d;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 5px;
}

.red {
  background-color: #ee5e7c;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 5px;
}
</style>
