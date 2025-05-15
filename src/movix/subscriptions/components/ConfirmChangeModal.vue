<template>
  <div v-if="visible" class="overlay" role="dialog" aria-modal="true">
    <div class="modal">
      <h3>{{ $t('modal.changeTitle') }}</h3>
      <p>{{ $t('modal.changeDescription') }}</p>
      <div class="buttons">
        <button class="green" @click="$emit('confirm')">{{ $t('modal.confirm') }}</button>
        <button class="red" @click="$emit('close')">{{ $t('modal.cancel') }}</button>
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
  justify-content: center;
  align-items: center;
}
.modal {
  background-color: #d7d5e9;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
}
.buttons {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.green, .red {
  padding: 10px 20px;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}
.green {
  background-color: #61c66d;
}
.red {
  background-color: #ee5e7c;
}
</style>
