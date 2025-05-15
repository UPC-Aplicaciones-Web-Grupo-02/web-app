<template>
  <div class="card">
    <pv-toolbar style="border-radius: 0rem; padding: 1rem 1rem 1rem 1.5rem; background-color: #ffffff; border: 0px">
      <template #start>
        <div class="flex items-center gap-2">
          <img src="https://i.ibb.co/fYLGJVK/Logo-Movi.jpg" alt="Logo del MoviRent" style="height: 80px" />
        </div>
        <select @change="changeLanguage($event)" class="language-selector" style="margin-left: 50px; background-color: white; color: #222222; padding: 5px; border-radius: 5px" aria-label="Selector de idioma">
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </template>
      <template #end>
        <div class="menu-container">
          <button @click="toggleMenu" class="hamburger-button" aria-label="Abrir menú">
            <i class="pi pi-bars pi-2x"></i>
          </button>
          <div :class="['menu', { 'menu-open': isMenuOpen }]">

            <router-link to="/profile" class="pv-btn" aria-label="Perfil">
              <pv-button :label="$t('buttons.profile')" icon="pi pi-user" style="background-color: white; color: black; border: none"/>
            </router-link>
            <router-link to="/suscriptions" class="pv-btn" aria-label="Suscripción">
              <pv-button :label="$t('buttons.subscription')" icon="pi pi-credit-card" style="background-color: white; color: black; border: none"/>
            </router-link>
            <router-link to="/scooter" class="pv-btn" aria-label="Scooter">
              <pv-button :label="$t('buttons.scooter')" icon="pi pi-shop" style="background-color: white; color: black; border: none"/>
            </router-link>
            <router-link to="/login" @click="logout" class="pv-btn" aria-label="Logout">
              <pv-button :label="$t('buttons.logout')" style="background-color: white; color: black; border: none"/>
            </router-link>
          </div>
        </div>
      </template>
    </pv-toolbar>
  </div>
</template>

<style scoped>
.pv-btn {
  margin-left: 12px;
  margin-right: 12px;
  font-weight: bold;
  background-color: transparent;
  border: none;
}
.hamburger-button {
  display: none;
}
.menu {
  display: flex;
}
.menu-container {
  position: relative;
}

@media (max-width: 990px) {
  .hamburger-button {
    display: block;
    background-color: white;
    border: none;
    color: #72D063;
    padding: 1.5rem;
  }

  .menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    z-index: 1000;
    min-width: 200px;
  }
  .pv-btn {
    margin: 0.5rem 0;
  }
}

@media (min-width: 991px) {
  .menu {
    display: flex;
  }

  .hamburger-button {
    display: none;
    background-color: white;
    border: none;
    color: #72D063;
  }
}
</style>

<script setup>
import { useI18n } from "vue-i18n";
import router from "@/routes/routes.js";
import { ref } from "vue";

const { locale } = useI18n();
const isMenuOpen = ref(false);

function changeLanguage(event) {
  locale.value = event.target.value;
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

const logout = () => {
  sessionStorage.removeItem('user');
  router.push('/login');
}
</script>
