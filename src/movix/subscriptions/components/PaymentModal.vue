<template>
  <div v-if="visible" class="overlay">
    <div class="modal">
      <h3>Medio de pago</h3>
      <p>Recuerda poner los datos reales o el pago será denegado</p>
      <form @submit.prevent="handlePay">
        <input placeholder="Número de tarjeta" required />
        <input placeholder="Fecha de vencimiento" required />
        <input placeholder="Números posteriores" required />
        <input placeholder="Cuenta destino" required />
        <p>Total a pagar: <strong>S/. {{ plan.price }}</strong></p>
        <button class="green" type="submit">Pagar</button>
        <button class="red" type="button" @click="$emit('close')">Cancelar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
defineProps(['visible', 'plan'])
const emit = defineEmits(['close', 'paid'])

function handlePay() {
  emit('paid', plan)
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
