<template>
  <div class="register-wrapper">
    <Card class="register-card">
      <template #title>
        <h4 class="font-bold text-center pv-txt" style="color: #706e6e" aria-label="Título de registro">
          Regístrate
        </h4> <br/>
      </template>

      <template #content>
        <div class="form-container">
          <pv-floatlabel>
            <pv-inputtext
              id="completeName"
              v-model="completeName"
              :class="{ 'is-invalid': $v.completeName.$error }"
              class="input-style"
              aria-label="Campo de nombre completo"
              type="text"
            />
            <label for="completeName">Nombre Completo</label>
          </pv-floatlabel>
          <span v-if="$v.completeName.$error" class="error-message">Nombre completo es requerido</span>

          <pv-floatlabel>
            <pv-inputtext
              id="password"
              v-model="password"
              :class="{ 'is-invalid': $v.password.$error }"
              class="input-style"
              type="password"
              aria-label="Campo de contraseña"
            />
            <label for="password">Contraseña</label>
          </pv-floatlabel>
          <span v-if="$v.password.$error" class="error-message">Contraseña de 8 caracteres mínimo</span>

          <pv-floatlabel>
            <pv-inputtext
              id="phone"
              v-model="phone"
              :class="{ 'is-invalid': $v.phone.$error }"
              class="input-style"
              type="text"
              aria-label="Campo de número de celular"
            />
            <label for="phone">Celular</label>
          </pv-floatlabel>
          <span v-if="$v.phone.$error" class="error-message">Teléfono de 9 dígitos requerido</span>

          <pv-floatlabel>
            <pv-inputtext
              id="email"
              v-model="email"
              :class="{ 'is-invalid': $v.email.$error }"
              class="input-style"
              type="text"
              aria-label="Campo de correo electrónico"
            />
            <label for="email">Correo</label>
          </pv-floatlabel>
          <span v-if="$v.email.$error" class="error-message">Email válido es requerido</span>

          <pv-floatlabel>
            <pv-inputtext
              id="dni"
              v-model="dni"
              :class="{ 'is-invalid': $v.dni.$error }"
              class="input-style"
              type="text"
              aria-label="Campo de DNI"
            />
            <label for="dni">DNI</label>
          </pv-floatlabel>
          <span v-if="$v.dni.$error" class="error-message">DNI válido requerido</span>

          <Dropdown
            id="user_role"
            v-model="user_role_id"
            :options="roles"
            optionLabel="name"
            optionValue="id"
            placeholder="Rol de Usuario"
            class="dropdown-style"
            aria-label="Campo de rol de usuario"
          />
          <span v-if="$v.user_role_id.$error" class="error-message">Rol de Usuario es requerido</span>

          <pv-floatlabel>
            <pv-inputtext
              id="photo"
              v-model="photo"
              :class="{ 'is-invalid': $v.photo.$error }"
              class="input-style"
              type="text"
              aria-label="Campo de URL de la foto"
            />
            <label for="photo">URL de tu foto</label>
          </pv-floatlabel>
          <span v-if="$v.photo.$error" class="error-message">URL de la foto es requerida</span>

          <pv-floatlabel>
            <pv-inputtext
              id="address"
              v-model="address"
              :class="{ 'is-invalid': $v.address.$error }"
              class="input-style"
              type="text"
              aria-label="Campo de dirección"
            />
            <label for="address">Dirección</label>
          </pv-floatlabel>
          <span v-if="$v.address.$error" class="error-message">Dirección es requerida</span>

          <pv-button
            @click="signUp"
            class="mt-4 sign-up-btn"
            label="Regístrate"
            aria-label="Botón para registrarse"
          />

          <div class="sign-in-redirect">
            <h3 class="mb-0 pv-txt">¿Ya tienes una cuenta?</h3>
            <router-link to="/login" class="sign-in-link" aria-label="Enlace para iniciar sesión">Inicia Sesión</router-link>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { Db } from "@/movix/profile-management/services/user.service.js";
import { v4 as uuidv4 } from 'uuid';
import router from "../../../../../web-appv23/src/routes/routes.js";
import { ref, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, email as emailValidator } from '@vuelidate/validators';
import Dropdown from 'primevue/dropdown';
import Card from 'primevue/card';

let id = uuidv4();
let completeName = ref('');
let password = ref('');
let phone = ref('');
let email = ref('');
let dni = ref('');
let user_role_id = ref('');
let photo = ref('');
let address = ref('');
let roles = [
  { name: 'Owner', id: 1 },
  { name: 'Client', id: 2 }
];

const rules = reactive({
  completeName: { required },
  password: { required, minLength: minLength(8) },
  email: { required, emailValidator },
  phone: { required, minLength: minLength(9) },
  dni: { required, minLength: minLength(8) },
  user_role_id: { required },
  photo: { required },
  address: { required }
});

const $v = useVuelidate(rules, { completeName, password, email, phone, dni, user_role_id, photo, address });

async function signUp() {
  $v.value.$touch();
  if ($v.value.$error) return;

  const user = {
    id: id,
    email: email.value,
    password: password.value,
    completeName: completeName.value,
    phone: phone.value,
    dni: dni.value,
    user_roles_id: user_role_id.value,
    photo: photo.value,
    address: address.value
  };

  try {
    const response = await Db.prototype.signUp(user);
    if (response.status === 201) {
      alert("Registro exitoso");
      router.push("/login");
    }
  } catch (e) {
    alert("Hubo un error al registrarse");
  }
}
</script>

<style scoped>
.register-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
}
.register-card {
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.form-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.input-style {
  width: 100%;
  padding: 0.5rem;
}
.dropdown-style {
  width: 100%;
}
.sign-up-btn {
  background-color: #419828;
  border: none;
}
.sign-up-btn:hover {
  background-color: #5cbf4b;
}
.is-invalid {
  border-color: red !important;
}
.error-message {
  color: red;
  font-size: 0.8rem;
}
.pv-txt {
  color: black;
}
.sign-in-redirect {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}
.sign-in-link {
  text-decoration: none;
  font-weight: bold;
  color: black;
}
</style>
