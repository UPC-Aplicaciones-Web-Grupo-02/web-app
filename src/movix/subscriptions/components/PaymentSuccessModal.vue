<template>
  <div class="overlay">
    <div class="modal">
      <h2>{{ $t('subscription.successTitle') }}</h2>
      <p>{{ $t('subscription.successMessage') }}</p>
      <div class="actions">
        <button class="green" @click="$emit('close')">{{ $t('modal.ok') }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6); /* oscurece fondo */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal {
  background-color: #ded6f2;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.actions {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
}

.green {
  background-color: #61c66d;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}
</style>
