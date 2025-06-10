<template>
  <div class="center-containerlogin">
    <div class="login-box">
      <h2 style="text-align: center">Iniciar Sesión</h2><br />

      <pv-floatlabel variant="on" class="mb-5">
        <pv-inputtext
            id="email"
            v-model="email"
            class="w-full"
            :class="{'p-invalid': $v.email.$error}"
            type="email"
            required
        />
        <label for="email">Correo electrónico</label>
      </pv-floatlabel>
      <small v-if="$v.email.$error" class="text-red-500 text-sm">Correo válido requerido</small> <br />

      <pv-floatlabel variant="on" class="mb-5">
        <pv-inputtext
            id="password"
            type="password"
            v-model="password"
            class="w-full"
            :class="{'p-invalid': $v.password.$error}"
            required
        />
        <label for="password">Contraseña</label>
      </pv-floatlabel>
      <small v-if="$v.password.$error" class="text-red-500 text-sm">Contraseña requerida</small> <br />

      <div style="text-align: center; margin-top: 1rem;">
        <pv-button label="Iniciar Sesión" class="w-full mt-4" @click="signIn" />
      </div>

      <div style="text-align: center; margin-top: 1rem;">
        <span>¿No tienes cuenta? </span>
        <router-link to="/register" class="font-bold">Regístrate</router-link>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email as emailValidator } from '@vuelidate/validators';
import router from "../../../router/router.js";
import {UserService} from "../services/userService.js";

const db = new UserService();
const email = ref('');
const password = ref('');

const rules = reactive({
  email: { required, email: emailValidator },
  password: { required }
});


const state = reactive({ email, password });
const $v = useVuelidate(rules, state);

async function signIn() {
  $v.value.$touch();
  if ($v.value.$invalid) {
    return;
  }
  try {
    const users = await db.signIn(email.value, password.value);
    if (users.length > 0) {  // Si se encuentra un usuario Logeado

      localStorage.setItem('userId', users[0].id); // Guardar id
      localStorage.setItem('userRole', users[0].role_id); // Guardar rol
      console.log('ID de usuario:', users[0].id);
      console.log('Rol de usuario:', users[0].role_id);

      alert('Bienvenido ' + users[0].name);
      router.push('/view');
    } else {
      alert('Credenciales incorrectas');
    }
  } catch (error) {
    console.error('Error en login:', error);
    alert('Credenciales incorrectas');
  }
}
</script>

<style>
.center-containerlogin {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #ffffff;
}

.login-box {
  background-color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  max-width: 320px;
  border-radius: 12px;
  padding: 60px;
}

</style>
