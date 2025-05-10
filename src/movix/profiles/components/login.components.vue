<template>
  <div id="sign-in-heading" aria-label="Contenedor de inicio de sesión">
    <div class="flex justify-content-center align-items-center h-screen"
         aria-label="Contenedor de inicio de sesión">
      <div class="border-round border-1 p-7 surface-0 border-green-700">
        <div>
          <h1 class="mt-0" style="text-align: center; color: #808081;">Login</h1>
        </div>
        <pv-floatlabel variant="on">
          <pv-inputtext
            id="on_label1"
            v-model="email"
            type="email"
            aria-label="Campo de correo electrónico"
          />
          <label for="on_label1">User</label>
        </pv-floatlabel>
        <br/>
        <pv-floatlabel variant="on">
          <pv-inputtext
            id="on_label2"
            v-model="password"
            type="password"
            aria-label="Campo de contraseña"
          />
          <label for="on_label2">Password</label>
        </pv-floatlabel>
        <br/>
        <div class="button-container text-center">
          <pv-button @click="signIn" type="submit" label="Iniciar Sesión"
                     aria-label="Botón para iniciar sesión"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import {Db} from '@/movix/profiles/services/users.services.js'
//import router from '@/router.js'
import {ref} from 'vue';

let email = ref(null);
let password = ref(null);

const signIn = async () => {
  try {
    const response = await Db.signIn(email.value, password.value);

    if (response.data && response.data.length > 0) {
      alert("Sign In Success");
      sessionStorage.setItem("user", JSON.stringify(response.data[0]));
      router.push("/https://github.com/UPC-AppWeb-CiberMach/movirent-frontend/blob/main/.eslintrc.cjs");
    } else {
      alert("User Not Found");
    }
  } catch (error) {
    console.error("SignIn Error:", error);
    alert("Error");
  }
};

</script>
