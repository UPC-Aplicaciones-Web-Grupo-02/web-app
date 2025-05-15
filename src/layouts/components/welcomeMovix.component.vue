<template>
  <div class="welcome-message">
    <h1 aria-label="Mensaje de bienvenida">{{ $t('movirent.welcome') }}</h1> <br><br>
    <img src="https://i.ibb.co/ssQXys9/immges.jpg" alt="Bienvenido" class="welcome-image" height="300px" aria-label="Imagen de bienvenida" />
  </div>
</template>

<script setup>
</script>

<style scoped>
.welcome-message {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
