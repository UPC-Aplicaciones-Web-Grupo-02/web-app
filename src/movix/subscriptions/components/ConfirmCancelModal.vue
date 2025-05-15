<template>
  <div v-if="visible" class="overlay">
    <div class="modal">
      <h3>¿Estás segur@ de cancelar tu membresía?</h3>
      <p>No habrá reembolso del dinero</p>
      <button class="green" @click="$emit('close')">Regresar</button>
      <button class="red" @click="$emit('confirm')">Cancelar</button>
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
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
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
