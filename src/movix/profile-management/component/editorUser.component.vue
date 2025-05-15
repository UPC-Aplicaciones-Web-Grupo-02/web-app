<template>
  <div class="p-d-flex p-flex-column p-ai-center p-jc-center user-view-container" aria-label="Contenedor de vista de usuario">
    <h1 id="user-edit-heading" class="font-bold center-title pv-txt" aria-label="Título de edición de usuario">{{ $t('userview.title') }}</h1>
    <div class="p-d-flex p-jc-between content" aria-label="Contenido de usuario">
      <div class="p-d-flex p-flex-column p-ai-center p-jc-center left pv-card" aria-label="Sección izquierda de contenido de usuario">
        <img :src="photo" class="w-20 p-3 profile-img" alt="Imagen de perfil" aria-label="Imagen de perfil del usuario"/>

        <h3 class="font-bold" style="color: #575656;" aria-label="Recordatorio para el usuario">{{ $t('userview.info') }}</h3>

        <div class="historial-button" aria-label="Botón de historial">
          <pv-button @click="verHistorial" class="mt-5 p-4 w-10rem edit-btn" type="submit" :label="$t('userview.btnHistorial')" aria-label="Botón para ver el historial del usuario"/>
        </div>
      </div>
      <div class="p-d-flex p-flex-column p-ai-center right" aria-label="Sección derecha de contenido de usuario">

        <div class="p-d-flex p-flex-column p-ai-center inputs" aria-label="Entradas de datos del usuario">
          <pv-floatlabel variant="on">
            <pv-inputtext
              id="complete_name"
              v-model="completeName"
              :class="{ 'is-invalid': $v.completeName.$error }"
              class="w-15rem lg:w-25rem p-1.5 pv-text"
              type="text"
              placeholder=" "
              aria-label="Entrada de nombre completo del usuario"
            />
            <label for="complete_name">{{ $t('userview.name') }}</label>
          </pv-floatlabel>
          <span v-if="$v.completeName.$error" class="error-message" aria-label="Mensaje de error para el nombre completo">Nombre completo es requerido</span>

          <pv-floatlabel variant="on" style="margin-top: 5%">
            <pv-inputtext
              id="password"
              v-model="password"
              :class="{ 'is-invalid': $v.password.$error }"
              class="w-15rem lg:w-25rem p-1.5 pv-text"
              type="password"
              placeholder=" "
              aria-label="Entrada de contraseña del usuario"
            />
            <label for="password">{{ $t('userview.contrasena') }}</label>
          </pv-floatlabel>
          <span v-if="$v.password.$error" class="error-message" aria-label="Mensaje de error para la contraseña">Contraseña es requerida</span>

          <pv-floatlabel variant="on" style="margin-top: 5%">
            <pv-inputtext
              id="phone"
              v-model="phone"
              :class="{ 'is-invalid': $v.phone.$error }"
              class="w-15rem lg:w-25rem p-1.5 pv-text"
              type="text"
              placeholder=" "
              aria-label="Entrada de número de celular del usuario"
            />
            <label for="phone">{{ $t('userview.celular') }}</label>
          </pv-floatlabel>
          <span v-if="$v.phone.$error" class="error-message" aria-label="Mensaje de error para el número de celular">Telefono es requerido</span>

          <pv-floatlabel variant="on" style="margin-top: 5%">
            <pv-inputtext
              id="email"
              v-model="email"
              :class="{ 'is-invalid': $v.email.$error }"
              class="w-15rem lg:w-25rem p-1.5 pv-text"
              type="text"
              placeholder=" "
              aria-label="Entrada de correo electrónico del usuario"
            />
            <label for="email">{{ $t('userview.email') }}</label>
          </pv-floatlabel>
          <span v-if="$v.email.$error" class="error-message" aria-label="Mensaje de error para el correo electrónico">Email en formato 'email@gmail.com' es requerido</span>

          <pv-floatlabel variant="on" style="margin-top: 5%">
            <pv-inputtext
              id="dni"
              v-model="dni"
              :class="{ 'is-invalid': $v.dni.$error }"
              class="w-15rem lg:w-25rem p-1.5 pv-text"
              type="text"
              placeholder=" "
              aria-label="Entrada de DNI del usuario"
            />
            <label for="dni">{{ $t('userview.dni') }}</label>
          </pv-floatlabel>
          <span v-if="$v.dni.$error" class="error-message" aria-label="Mensaje de error para el DNI">DNI es requerido</span>

          <pv-floatlabel variant="on" style="margin-top: 5%">
            <pv-inputtext
              id="photo"
              v-model="photo"
              :class="{ 'is-invalid': $v.photo.$error }"
              class="w-15rem lg:w-25rem p-1.5 pv-text"
              type="text"
              placeholder=" "
              aria-label="Entrada de URL de la foto del usuario"
            />
            <label for="photo">{{ $t('userview.URL') }}</label>
          </pv-floatlabel>
          <span v-if="$v.photo.$error" class="error-message" aria-label="Mensaje de error para la URL de la foto">URL de la foto es requerido</span>

          <pv-floatlabel variant="on" style="margin-top: 5%">
            <pv-inputtext
              id="address"
              v-model="address"
              :class="{ 'is-invalid': $v.address.$error }"
              class="w-15rem lg:w-25rem p-1.5 pv-text"
              type="text"
              placeholder=""
              aria-label="Entrada de dirección del usuario"
            />
            <label for="address">{{ $t('userview.dirrecion') }}</label>
          </pv-floatlabel>
          <span v-if="$v.address.$error" class="error-message" aria-label="Mensaje de error para la dirección">Dirección es requerida</span>
        </div>

        <pv-dialog v-model:visible="showEditDialog" header="¿Estas segur@ de editar tu cuenta?" :modal="true" :closable="false">
          <p class="center-title">{{ $t('userview.confMessage') }}</p>
          <div class="p-d-flex p-jc-center p-ai-center p-mt-3 button-container">
            <pv-button class="p-button-edit green-button p-mr-2" :label="$t('userview.btnEditar')" @click="confirmEditUser" />
            <pv-button class="p-button-cancel-edit pink-button" :label="$t('userview.btnCancelar')" @click="showEditDialog = false" />
          </div>
        </pv-dialog>

        <pv-dialog v-model:visible="showDeleteDialog" header="¿Estas segur@ de eliminar tu cuenta? " :modal="true" :closable="false">
          <p class="center-title">{{ $t('userview.confDelete') }}</p>
          <div class="p-d-flex p-jc-center p-ai-center p-mt-3 button-container">
            <pv-button class="p-button-delete green-button p-mr-2" :label="$t('userview.btnEliminar')" @click="confirmDeleteUser" />
            <pv-button class="p-button-cancel-delete pink-button" :label="$t('userview.btnCancelar')" @click="showDeleteDialog = false" />
          </div>
        </pv-dialog>

        <pv-button @click="showEditDialog = true" class="mt-5 p-4 w-10rem edit-btn" type="submit" :label="$t('userview.btnGuardar')" aria-label="Botón para editar los datos del usuario"/>
        <pv-button @click="showDeleteDialog = true" class="mt-5 p-4 w-10rem delete-btn" type="submit" :label="$t('userview.btnBorrar')" aria-label="Botón para borrar los datos del usuario"/>
      </div>
    </div>
  </div>

</template>

<script setup>
import {Db} from "@/movix/profile-management/services/user.service.js";
import router from "@/routes/routes.js";
import { ref, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email as emailValidator } from '@vuelidate/validators'

let id = JSON.parse(sessionStorage.getItem("user"))?.id;
let completeName = ref(JSON.parse(sessionStorage.getItem("user"))?.completeName);
let password = ref(JSON.parse(sessionStorage.getItem("user"))?.password);
let phone = ref(JSON.parse(sessionStorage.getItem("user"))?.phone);
let email = ref(JSON.parse(sessionStorage.getItem("user"))?.email);
let dni = ref(JSON.parse(sessionStorage.getItem("user"))?.dni);
let photo = ref(JSON.parse(sessionStorage.getItem("user"))?.photo);
let address = ref(JSON.parse(sessionStorage.getItem("user"))?.address);
let showEditDialog = ref(false)
let showDeleteDialog = ref(false)

const rules = reactive({
  completeName: { required },
  password: { required, minLength: minLength(8) },
  email: { required, emailValidator },
  phone: { required, minLength: minLength(9), type: Number },
  dni: { required, minLength: minLength(8) },
  photo: { required },
  address: { required }
})

const $v = useVuelidate(rules, { completeName, password, email, phone, dni, photo, address})

async function confirmEditUser() {
  showEditDialog.value = false
  $v.value.$touch()
  if ($v.value.$error) {
    return -1;
  } else {
    let user = {
      id: id,
      email: email.value,
      password: password.value,
      completeName: completeName.value,
      phone: phone.value,
      dni: dni.value,
      photo: photo.value,
      address: address.value
    }
    await Db.prototype.editUser(id, user).then((response) => {
      if (response.status === 200) {
        alert("Edit User Success");
        sessionStorage.setItem("user", JSON.stringify(user));
      }
    }).catch(() => {
      alert("Error");
    });
  }
}

async function confirmDeleteUser() {
  showDeleteDialog.value = false
  await Db.prototype.deleteUser(id).then((response) => {
    if (response.status === 200) {
      alert("Delete User Success");
      sessionStorage.removeItem("user")
      router.push("/login")
    }
  }).catch(() => {
    alert("Error");
  });
}

function verHistorial(){
  router.push("/ReservationHistory")
}
</script>

<style scoped>
.pv-card{
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-right: 20%
}
.pv-text{
  background-color: #ffffff;
  color: #333333;
}
.pv-txt{
  color: #717171;
}
.is-invalid {
  border-color: red;
}
.error-message{
  color: red;
  font-size: small;
}
.edit-btn{
  background-color: #419828;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  width: 7rem;
  height: 2rem;
}

.delete-btn{
  background-color: #FD6C6C;
  border: none;
  width: 5rem;
  height: 2rem;
}
.edit-btn:hover{
  background-color: #419828;
}

.delete-btn:hover{
  background-color: #FD6C6C;
}

.user-view-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  padding-top: 0px !important;
  margin-top: 0px !important;
}

.center-title {
  text-align: center;
  margin-bottom: 20px;
}

.content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 20px;
  margin-right: 10%;
}

.right .inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.left h3 {
  margin-top: 20px;
  margin-left: 50%;
  text-align: center;
  color: #333;
  line-height: 1.5;
}
.profile-img {
  border-radius: 100%;
  margin-left: 50%;
  width: 20rem;
  height: 20rem;
}

.right pv-inputtext {
  margin-top: 20px;
}

.green-button {
  background-color: #72D063;
  border: none;
  margin-right: 20px;
}
.pink-button {
  background-color: #FD6C6C;
  border: none;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
}
.historial-button{
  margin-left: 50%;
}
@media (max-width: 568px) {
  .content {
    flex-direction: column;
  }

  .right {
    margin-right: 0;
  }
  .left h3 {
    margin-left: 0;
  }
  .left{
    padding-right: 0;
  }

  .profile-img {
    margin-left: 0;
    width: 10rem;
    height: 10rem;
  }
  .historial-button{
    margin-left: 0;
  }
}
</style>
