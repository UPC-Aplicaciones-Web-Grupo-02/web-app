<template>
  <div class="p-d-flex p-flex-column p-ai-center p-jc-center user-view-container" aria-label="Contenedor de vista de usuario">
    <h1 class="font-bold center-title pv-txt">{{ $t('userview.titleView') }}</h1>

    <div class="content mt-6" aria-label="Contenido de usuario">

      <div class="left">
        <img :src="photo" class="profile-img" alt="Imagen de perfil" />
      </div>

      <div class="right">
        <div class="data-row" aria-label="Nombre completo">
          <strong class="label">{{ $t('userview.name') }}:</strong>
          <span class="value">{{ completeName }}</span>
        </div>
        <div class="data-row" aria-label="Correo">
          <strong class="label">{{ $t('userview.email') }}:</strong>
          <span class="value">{{ email }}</span>
        </div>
        <div class="data-row" aria-label="Teléfono">
          <strong class="label">{{ $t('userview.celular') }}:</strong>
          <span class="value">{{ phone }}</span>
        </div>
        <div class="data-row" aria-label="DNI">
          <strong class="label">{{ $t('userview.dni') }}:</strong>
          <span class="value">{{ dni }}</span>
        </div>
        <div class="data-row" aria-label="Dirección">
          <strong class="label">{{ $t('userview.dirrecion') }}:</strong>
          <span class="value">{{ address }}</span>
        </div>
      </div>
    </div>
    <router-link to="/editor" class="pv-btn" aria-label="Vista de datos del usuario">
      <pv-button :label="$t('Editar perfil')" style="background-color: #55bd37; color: #ffffff; border: none"/>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";

let user = JSON.parse(sessionStorage.getItem("user"));
let completeName = ref(user?.completeName);
let phone = ref(user?.phone);
let email = ref(user?.email);
let dni = ref(user?.dni);
let photo = ref(user?.photo);
let address = ref(user?.address);
</script>

<style scoped>
.user-view-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-top: 0 !important;
}

.content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
}

.left {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.profile-img {
  border-radius: 100%;
  width: 16rem;
  height: 16rem;
}

.data-row {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.label {
  text-align: right;
  font-weight: bold;
}

.value {
  padding-left: 1rem;
  text-align: left;
}

@media (max-width: 568px) {
  .content {
    flex-direction: column;
    align-items: center;
  }

  .profile-img {
    width: 10rem;
    height: 10rem;
  }

  .data-row {
    grid-template-columns: 1fr 1fr;
  }

  .label, .value {
    text-align: center;
  }
}
</style>
