<script setup>
import { ref, reactive, onMounted } from 'vue';
import { UserService } from '../services/userService.js';
import router from "../../../router/router.js";

const userService = new UserService();

const nuevoUsuario = reactive({
  name: '',
  phone: '',
  dni: '',
  email: '',
  password: '',
  photo: '',
  address: '',
  roleId: ''
});

const roles = ref([]);
const loading = ref(false);
const success = ref(false);
const error = ref(null);

onMounted(async () => {
  try {
    roles.value = await userService.getRoles();
  } catch (e) {
    error.value = 'No se pudieron cargar los roles.';
  }
});

async function crearUsuario() {
  if (
      !nuevoUsuario.name ||
      !nuevoUsuario.phone ||
      !nuevoUsuario.dni ||
      !nuevoUsuario.email ||
      !nuevoUsuario.password ||
      !nuevoUsuario.photo ||
      !nuevoUsuario.address ||
      !nuevoUsuario.roleId
  ) {
    error.value = 'Todos los campos son obligatorios.';
    return;
  }
  if (!/^\d{8}$/.test(nuevoUsuario.dni)) {
    error.value = 'El DNI debe tener exactamente 8 dígitos.';
    return;
  }
  if (!/^\d{9}$/.test(nuevoUsuario.phone)) {
    error.value = 'El teléfono debe tener exactamente 9 dígitos.';
    return;
  }
  if (!/^\d{6,}$/.test(nuevoUsuario.password)) {
    error.value = 'La contraseña debe tener mínimo 6 dígitos.';
    return;
  }


  loading.value = true;
  error.value = null;
  success.value = false;
  try {
    await userService.signUp({ ...nuevoUsuario });
    success.value = true;
    Object.keys(nuevoUsuario).forEach(key => nuevoUsuario[key] = '');
    alert('Usuario creado correctamente.');
    router.push('/login');
  } catch (e) {
    // Muestra el mensaje real del backend si existe
    if (e.response && e.response.data && e.response.data.message) {  // response significa que hubo una respuesta del servidor, data significa que hay datos y message es el mensaje de error
      error.value = e.response.data.message;
    } else {
      error.value = 'Error al crear usuario.';
    }
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="center-containerRegister">
    <div class="card-register">
      <h2 style="text-align: center">Crear Usuario</h2>
      <form @submit.prevent="crearUsuario">
        <br />
        <div>
          <pv-floatlabel variant="on">
            <pv-inputtext id="name" v-model="nuevoUsuario.name" type="text" required />
            <label for="name">Nombre completo</label>
          </pv-floatlabel>
        </div>
        <br />
        <div>
          <pv-floatlabel variant="on">
            <pv-inputtext id="phone" v-model="nuevoUsuario.phone" type="number" required />
            <label for="phone">Teléfono</label>
          </pv-floatlabel>
        </div>
        <br />
        <div>
          <pv-floatlabel variant="on">
            <pv-inputtext id="dni" v-model="nuevoUsuario.dni" type="number" required />
            <label for="dni">DNI</label>
          </pv-floatlabel>
        </div>
        <br />
        <div>
          <pv-floatlabel variant="on">
            <pv-inputtext id="email" v-model="nuevoUsuario.email" type="email" required />
            <label for="email">Correo electrónico</label>
          </pv-floatlabel>
        </div>
        <br />
        <div>
          <pv-floatlabel variant="on">
            <pv-inputtext id="password" v-model="nuevoUsuario.password" type="password" required />
            <label for="password">Contraseña</label>
          </pv-floatlabel>
        </div>
        <br />
        <div>
          <pv-floatlabel variant="on">
            <pv-inputtext id="photo" v-model="nuevoUsuario.photo" type="text" required />
            <label for="photo">Foto (URL)</label>
          </pv-floatlabel>
        </div>
        <br />
        <div>
          <pv-floatlabel variant="on">
            <pv-inputtext id="address" v-model="nuevoUsuario.address" type="text" required />
            <label for="address">Dirección</label>
          </pv-floatlabel>
        </div>
        <br />
        <div>
          <pv-floatlabel class="w-full" variant="on">
            <pv-select
                v-model="nuevoUsuario.roleId"
                inputId="role_select"
                :options="roles"
                optionLabel="role"
                optionValue="id"
                placeholder=" "
                class="w-full select"
                required
            />
            <label for="role_select">Rol</label>
          </pv-floatlabel>
        </div>
        <br />
        <div style="margin-top: 16px; text-align: center;">
          <pv-button type="submit" :loading="loading">Guardar</pv-button>
        </div>
        <div style="text-align: center; margin-top: 1rem;">
          <span style="margin-right: 12px;">Iniciar sesión</span>
          <router-link to="/login" class="font-bold">Login</router-link>
        </div>
        <div v-if="success" style="color: green; text-align: center; margin-top: 10px;">
          Usuario creado correctamente.
        </div>
        <div v-if="error" style="color: red; text-align: center; margin-top: 10px;">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.select {
  width: 100%;
  padding: 8px 12px !important;
  max-width: 220px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.center-containerRegister {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem;
  background-color: #ffffff;
}

.card-register {
  border-radius: 12px;
  padding: 30px;
  max-width: 350px;
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
</style>
