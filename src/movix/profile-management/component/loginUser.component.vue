<template>
  <div class="flex flex-column justify-center align-items-center min-h-screen mt-8">
    <div class="card p-5 shadow-4 surface-card border-round w-full sm:w-20rem">
      <h2 class="text-center text-900 mb-4">Iniciar Sesión</h2>

      <pv-floatlabel class="mb-5">
        <pv-inputtext id="email" v-model="email" class="w-full" :class="{'p-invalid': $v.email.$error}"/>
        <label for="email">Correo electrónico</label>
      </pv-floatlabel>
      <small v-if="$v.email.$error" class="text-red-500 text-sm">Correo válido requerido</small>

      <pv-floatlabel class="mb-1">
        <pv-inputtext id="password" type="password" v-model="password" class="w-full"
                      :class="{'p-invalid': $v.password.$error}"/>
        <label for="password">Contraseña</label>
      </pv-floatlabel>
      <small v-if="$v.password.$error" class="text-red-500 text-sm">Contraseña requerida</small>

      <pv-button label="Iniciar Sesión" class="w-full mt-4" @click="signIn"/>

      <div class="text-center mt-3">
        <span>¿No tienes cuenta? </span>
        <router-link to="/register" class="font-bold text-primary">Regístrate</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue';
import {useVuelidate} from '@vuelidate/core';
import {required, email as emailValidator} from '@vuelidate/validators';
import {Db} from "@/movix/profile-management/services/user.service.js";
import router from "@/routes/routes.js";

const db = new Db();
const email = ref('');
const password = ref('');

const rules = reactive({
  email: {required, email: emailValidator},
  password: {required}
});
const $v = useVuelidate(rules, {email, password});

const signIn = async () => {
  $v.value.$touch();
  if ($v.value.$error) return;

  try {
    const response = await db.signIn(email.value, password.value);
    if (!response || !response.data) {
      alert("Respuesta inválida del servidor.");
      return;
    }

    if (response.data.length > 0) {
      alert("Satisfactorio");
      const user = response.data[0];
      sessionStorage.setItem("user", JSON.stringify(user));
      router.push("/profile");
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  } catch (err) {
    console.error("Error en signIn:", err);
    alert(`Ocurrió un error al iniciar sesión: ${err.message || err}`);
  }
};
</script>
<style scoped>
.p-invalid {
  border: 1px solid red !important;
}

.text-red-500 {
  color: red;
}
</style>
