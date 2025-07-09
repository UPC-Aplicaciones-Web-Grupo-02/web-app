<template>
  <div>
    <pv-toolbar style="border-radius: 0rem; padding: 1rem 1rem 1rem 1.5rem; background-color: #ffffff; border: 0px">
      <template #start>
        <div class="flex items-center gap-2">
          <img src="https://i.ibb.co/fYLGJVK/Logo-Movi.jpg" alt="Logo del MoviRent" style="height: 80px" />
        </div>
        <select @change="changeLanguage($event)" class="language-selector"
                style="margin-left: 50px; background-color: white; color: #222222; padding: 5px; border-radius: 5px"
                aria-label="Selector de idioma">
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
        <div v-if="userId" style="margin-left: 20px">
          <span>Rol:
            <template v-if="userRole === '1'">Administrador</template>
            <template v-else-if="userRole === '2'">Usuario</template>
            <template v-else-if="userRole === '3'">Universitario</template>
            <template v-else>Desconocido</template>
          </span>
        </div>
      </template>

      <template #end>
        <div class="menu-container">
          <button @click="toggleMenu" class="hamburger-button" aria-label="Abrir menú">
            <i class="pi pi-bars pi-2x"></i>
          </button>
          <div :class="['menu', { 'menu-open': isMenuOpen }]">
            <router-link to="/view" class="pv-btn" aria-label="Perfil">
              <pv-button :label="$t('buttons.profile')" icon="pi pi-user"
                         style="background-color: white; color: black; border: none"/>
            </router-link>

            <router-link
              v-if="userRole !== '1'"
              to="/suscription"
              class="pv-btn"
              aria-label="Suscripción"
            >
              <pv-button :label="$t('buttons.subscription')" icon="pi pi-credit-card"
                         style="background-color: white; color: black; border: none"/>
            </router-link>

            <router-link
              v-if="userRole === '1'"
              to="/admin/list"
              class="pv-btn"
              aria-label="Scooter Admin"
            >
              <pv-button :label="$t('buttons.scooter')" icon="pi pi-shop"
                         style="background-color: white; color: black; border: none"/>
            </router-link>

            <router-link
              v-else
              to="/scooter"
              class="pv-btn"
              aria-label="Scooter"
            >
              <pv-button :label="$t('buttons.scooter')" icon="pi pi-shop"
                         style="background-color: white; color: black; border: none"/>
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

<script setup>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import router from "../router/router.js";

const { locale } = useI18n();
const isMenuOpen = ref(false);

const userId = ref('');
const userRole = ref('');

onMounted(() => {
  userId.value = localStorage.getItem('userId') || '';
  userRole.value = localStorage.getItem('userRole') || '';
});

function changeLanguage(event) {
  locale.value = event.target.value;
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function logout() {
  sessionStorage.removeItem('user');
  localStorage.removeItem('userId');
  localStorage.removeItem('userRole');
  localStorage.removeItem('token');
  router.push('/login');
}
</script>

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
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
