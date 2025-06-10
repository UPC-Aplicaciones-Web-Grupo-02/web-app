<script setup>
import { ref, onMounted } from 'vue';
import { UserService } from '../services/userService.js';

const user = ref(null);
const role = ref(null);
const loading = ref(true);
const error = ref(null);
const userService = new UserService();

onMounted(async () => {
  loading.value = true;
  error.value = null;
  try {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert('No hay usuario autenticado.');
      error.value = 'No hay usuario autenticado.';
      loading.value = false;
      return;
    }
    user.value = await userService.getUserById(userId);
    if (user.value) {
      const roles = await userService.getRoles();
      role.value = roles.find(r => r.id === user.value.role_id);
    }
  } catch (e) {
    error.value = 'Error al cargar datos del usuario.';
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="center-containerView">
    <div class="profile">
      <div v-if="loading">Cargando datos...</div>
      <div v-else-if="error" style="color: red;">{{ error }}</div>
      <div v-else-if="user">
        <div style="text-align: center">
          <img v-if="user.photo" :src="user.photo" alt="Foto usuario" style="width: 200px; height: 100px; border-radius: 8%;" />
        </div>
        <h2 style="text-align: center">{{ user.name }}</h2>
        <p><strong>Teléfono:</strong> {{ user.phone }}</p>
        <p><strong>DNI:</strong> {{ user.dni }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Dirección:</strong> {{ user.address }}</p>
        <p><strong>Rol ID:</strong> {{ user.role_id }}</p>
        <p><strong>Rol:</strong> {{ role ? role.role : 'Desconocido' }}</p>
      </div>
      <div v-else>No se encontró el usuario.</div>
    </div>
  </div>
  <div v-if="user && (user.role_id == 2 || user.role_id == 3)">
    <div style="text-align: center;"><br /> <br />
      <span>¿Deseas eliminar tu cuenta? </span>
      <router-link to="/delete" class="font-bold">Eliminar</router-link>
      <br /><br />
      <router-link :to="`/histories`"><pv-button label="Mis historias de reservas" icon="pi pi-home"/></router-link>
    </div>
  </div>
  <div v-else-if="user && user.role_id == 1">
    <div style="text-align: center;">
      <span>¿Deseas eliminar tu cuenta? </span>
      <router-link to="/delete" class="font-bold">Eliminar</router-link>
      <br /><br />
      <router-link :to="`/admin/list`">
        <pv-button label="Gestionar Scooters" icon="pi pi-cog"/>
      </router-link>

      <div style="text-align: center; margin-top: 1rem;">
        <router-link :to="`/admin/create`">
          <pv-button label="Crear nuevo scooter" icon="pi pi-cog"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.center-containerView{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #ffffff;
}
.profile {
  background-color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  max-width: 320px;
  border-radius: 12px;
  padding: 60px;
}
</style>
