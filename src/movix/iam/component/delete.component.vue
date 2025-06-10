<script setup>
import { UserService } from '../services/userService';
import router from '../../../router/router';

const userService = new UserService();

async function eliminarUsuarioRegistrado() {
  const userId = localStorage.getItem('userId');
  console.log(localStorage.getItem('userId'));
  if (!userId) {
    alert('No hay usuario registrado.');
    return;
  }
  try {
    await userService.deleteUser(userId);
    localStorage.removeItem('userId'); // o cualquier clave que uses
    alert('Usuario eliminado correctamente.');
    router.push('/login');
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    alert('No se pudo eliminar el usuario.');
  }
}
</script>

<template>
  <div class="carddelete">
    <div class="delete">
      <p>¿Estás seguro de que deseas eliminar tu cuenta?</p> <br />
      <pv-button label="Eliminar cuenta" @click="eliminarUsuarioRegistrado" />
    </div>
  </div>
</template>

<style>
.carddelete {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  padding: 1rem;
  box-sizing: border-box;
}
.delete {
  background-color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  max-width: 420px;
  border-radius: 12px;
  padding: 60px;
  text-align: center;
}
</style>
