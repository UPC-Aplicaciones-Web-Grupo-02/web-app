<template>
  <div v-if="visible" class="overlay" role="dialog" aria-modal="true" aria-labelledby="cancel-title">
    <div class="modal">
      <h3 id="cancel-title">{{ $t('modal.confirmCancel') }}</h3>
      <p>{{ $t('modal.noRefund') }}</p>
      <div class="buttons">
        <button class="green" @click="$emit('close')">{{ $t('modal.back') }}</button>
        <button class="red" @click="$emit('confirm')">{{ $t('modal.cancel') }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['visible'])
defineEmits(['close', 'confirm'])
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal {
  background-color: #d7d5e9; /* color morado pastel */
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  max-width: 400px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.green,
.red {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}

.green {
  background-color: #61c66d;
}

.red {
  background-color: #ee5e7c;
}
</style>
