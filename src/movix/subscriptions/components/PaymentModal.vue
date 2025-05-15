<template>
  <div v-if="visible" class="overlay" role="dialog" aria-modal="true" aria-labelledby="payment-title">
    <div class="modal">
      <h3 id="payment-title">{{ $t('modal.successTitle') }}</h3>
      <p>{{ $t('modal.successDescription') }}</p>

      <form @submit.prevent="handlePay">
        <input :placeholder="$t('form.cardNumber')" required />
        <input :placeholder="$t('form.expiration')" required />
        <input :placeholder="$t('form.cvv')" required />
        <input :placeholder="$t('form.account')" required />

        <p>{{ $t('form.totalToPay') }}: <strong>S/. {{ plan.price }}</strong></p>

        <button class="green" type="submit">{{ $t('modal.pay') }}</button>
        <button class="red" type="button" @click="$emit('close')">{{ $t('modal.cancel') }}</button>
      </form>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['visible', 'plan'])
const emit = defineEmits(['close', 'paid'])

function handlePay() {
  emit('paid', props.plan)
}
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
}
input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
.green {
  background-color: #61c66d;
  color: white;
}
.red {
  background-color: #ee5e7c;
  color: white;
  margin-left: 10px;
}
</style>
