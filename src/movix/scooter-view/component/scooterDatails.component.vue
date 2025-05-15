<template>
  <div class="p-d-flex p-flex-column p-ai-center p-jc-center scooter-create-container" aria-label="Contenedor de vista de scooter">
    <div class="p-d-flex p-jc-between content" aria-label="Contenido de scooter">
      <div class="p-d-flex p-flex-column p-ai-center p-jc-center left pv-card" aria-label="Sección izquierda de contenido de scooter">
        <img :src="image" class="w-20 p-3 profile-img" alt="Imagen de scooter" aria-label="Imagen de perfil del scooter"/>
        <h3 class="font-bold reminder" aria-label="Recordatorio para el usuario">{{ $t('scooterDetails.recordatorio') }}</h3>
      </div>
      <div class="p-d-flex p-flex-column p-ai-center right" aria-label="Sección derecha de contenido de scooter">
        <div class="p-d-flex p-flex-column p-ai-center inputs" aria-label="Entradas de datos del scooter">
          <pv-floatlabel variant="on" style="margin-bottom: 6%">
            <pv-inputtext
              v-model="name"
              :class="{ 'is-invalid': $v.name.$error }"
              class="w-15rem lg:w-25rem p-2 pv-text"
              aria-label="Entrada de nombre del scooter"
              type="text"
            />
            <label for="name">{{ $t('scooterDetails.nombre') }}</label>
          </pv-floatlabel>
          <span v-if="$v.name.$error" class="error-message" aria-label="Mensaje de error para el nombre">Nombre es requerido</span>

          <pv-floatlabel variant="on" style="margin-bottom: 6%">
            <pv-inputtext
              v-model="brand"
              :class="{ 'is-invalid': $v.brand.$error }"
              class="w-15rem lg:w-25rem p-2 pv-text"
              aria-label="Entrada de marca del scooter"
              type="text"
            />
            <label for="brand">{{ $t('scooterDetails.marca') }}</label>
          </pv-floatlabel>
          <span v-if="$v.brand.$error" class="error-message" aria-label="Mensaje de error para la marca">Marca es requerida</span>

          <pv-floatlabel variant="on" style="margin-bottom: 6%">
            <pv-inputtext
              v-model="model"
              :class="{ 'is-invalid': $v.model.$error }"
              class="w-15rem lg:w-25rem p-2 pv-text"
              aria-label="Entrada de modelo del scooter"
              type="text"
            />
            <label for="model">{{ $t('scooterDetails.modelo') }}</label>
          </pv-floatlabel>
          <span v-if="$v.model.$error" class="error-message" aria-label="Mensaje de error para el modelo">Modelo es requerido</span>

          <pv-floatlabel variant="on" style="margin-bottom: 6%">
            <pv-inputtext
              v-model="image"
              :class="{ 'is-invalid': $v.image.$error }"
              class="w-15rem lg:w-25rem p-2 pv-text"
              aria-label="Entrada de URL de la foto del usuario"
              type="text"
            />
            <label for="image">{{ $t('scooterDetails.url') }}</label>
          </pv-floatlabel>
          <span v-if="$v.image.$error" class="error-message" aria-label="Mensaje de error para la URL de la foto">URL de la foto es requerido</span>
          <pv-inputnumber v-model="price_per_hour" :class="{ 'is-invalid': $v.price_per_hour.$error }" class="p-3 w-15rem lg:w-25rem pv-text input-number" type="number" placeholder="Precio por hora" aria-label="Entrada de precio por hora del scooter"/>
          <span v-if="$v.price_per_hour.$error" class="error-message" aria-label="Mensaje de error para el precio por hora">Precio por hora es requerido</span>
          <pv-floatlabel variant="on" style="margin-bottom: 6%">
            <pv-inputtext
              v-model="district"
              style="background-color: #ffffff; color: black;"
              class="w-15rem lg:w-25rem p-2 pv-text"
              aria-label="Campo de distrito"
              type="text"
            />
            <label for="district">{{ $t('scooterDetails.distrito') }}</label>
          </pv-floatlabel>
          <span v-if="$v.district.$error" class="error-message" aria-label="Mensaje de error para el distrito">Distrito es requerido</span>

          <pv-floatlabel variant="on" style="margin-bottom: 6%">
            <pv-inputtext
              v-model="phone"
              :class="{ 'is-invalid': $v.phone.$error }"
              class="w-15rem lg:w-25rem p-2 pv-text"
              type="text"
              placeholder="Celular"
              aria-label="Entrada de número de celular del usuario"
            />
            <label for="phone">{{ $t('scooterDetails.celular') }}</label>
          </pv-floatlabel>
          <span v-if="$v.phone.$error" class="error-message" aria-label="Mensaje de error para el número de celular">Teléfono es requerido</span>
        </div>
        <pv-dialog v-model:visible="showEditDialog" header="¿Estas segur@ de editar tu scooter?" :modal="true" :closable="false">
          <p class="center-title">{{ $t('scooterDetails.message') }}</p>

          <div class="p-d-flex p-jc-center p-ai-center p-mt-3 button-container">
            <pv-button class="p-button-edit green-button p-mr-2" :label="$t('scooterDetails.btnEditar')" @click="confirmEditScooter" />
            <pv-button class="p-button-cancel-edit pink-button" :label="$t('scooterDetails.btnCancelar')" @click="showEditDialog = false" />
          </div>
        </pv-dialog>

        <pv-dialog v-model:visible="showDeleteDialog" header="¿Estas segur@ de eliminar tu scooter? " :modal="true" :closable="false">
          <p class="center-title">{{ $t('scooterDetails.noRecuperable') }}</p>

          <div class="p-d-flex p-mt-3 button-container">
            <pv-button class="p-button-delete green-button p-mr-2" :label="$t('scooterDetails.btnEliminar')" @click="confirmDeleteScooter" />
            <pv-button class="p-button-cancel-delete pink-button" :label="$t('scooterDetails.btnCancelar')" @click="showDeleteDialog = false" />
          </div>
        </pv-dialog>

        <pv-button @click="showEditDialog = true" class="mt-5 p-4 w-10rem edit-btn" type="submit" :label="$t('scooterDetails.btnEditar')" aria-label="Botón para editar los datos del scooter"/>
        <pv-button @click="showDeleteDialog = true" class="mt-5 p-4 w-10rem delete-btn" type="submit" :label="$t('scooterDetails.btnEliminar')" aria-label="Botón para borrar los datos del scooter"/>

      </div>
    </div>
  </div>

</template>
<script setup>
import {Db} from "@/movix/scooter-view/services/scooter.service.js";
import router from "@/routes/routes.js";
import { ref, reactive, onMounted } from 'vue'
import {required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

let scooter = ref(null)

let id = JSON.parse(sessionStorage.getItem("scooter"))?.id;
console.log(id)
let name = JSON.parse(sessionStorage.getItem("scooter"))?.name;
let brand = JSON.parse(sessionStorage.getItem("scooter"))?.brand;
let model = JSON.parse(sessionStorage.getItem("scooter"))?.model;
let image = JSON.parse(sessionStorage.getItem("scooter"))?.image;
let price_per_hour = JSON.parse(sessionStorage.getItem("scooter"))?.price_per_hour;
let district = JSON.parse(sessionStorage.getItem("scooter"))?.district;
let phone = JSON.parse(sessionStorage.getItem("scooter"))?.phone;
let showEditDialog = ref(false)
let showDeleteDialog = ref(false)


onMounted(()=> {
  scooter.value = JSON.parse(sessionStorage.getItem("scooter"));
  if (!scooter.value || !scooter.value.id){
    console.error("ID del scooter no esta definido.");
  }
});


const rules = reactive({
  name: { required },
  brand: { required },
  model: { required },
  image: { required },
  price_per_hour: { required },
  district: { required },
  phone: { required }
})

const $v = useVuelidate(rules, { name, brand, model, image, price_per_hour, district, phone })

async function confirmEditScooter() {
  showEditDialog.value = false
  $v.value.$touch()
  if ($v.value.$error) {
    return -1;
  } else {
    let scooter = {
      id: id,
      name: name,
      brand: brand,
      model: model,
      image: image,
      price_per_hour: price_per_hour,
      district: district,
      phone: phone
    }
    await Db.prototype.editScooter(id, scooter).then((response) => {
      if (response.status === 200) {
        alert("Edit Scooter Success");
        sessionStorage.setItem("user", JSON.stringify(scooter));
      }
    }).catch(() => {
      alert("Error");
    });
  }
}

async function confirmDeleteScooter() {
  if (scooter.value && scooter.value.id) {
    try {
      await Db.prototype.deleteScooter(scooter.value.id);
      sessionStorage.removeItem("scooter");
      router.push("/ScooterList");
      alert("Scooter eliminado con éxito");
    } catch (error) {
      console.error("Error al eliminar el scooter:", error);
      alert("Error al eliminar el scooter");
    }
  } else {
    alert("El ID del scooter no está definido.");
  }
}

</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.scooter-create-container {
  margin-top: 2rem;
}

.left {
  width: 50%;
  margin-left: 15%;
}

.right {
  width: 50%;
  margin-left: 5%;
}

.inputs {
  width: 50%;
  gap: 20px;
  max-width: none;
}
.input-number{
  width: 17rem;
  height: 6rem;
  margin-left: -17px;
}
.pv-card {
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-right: 20%;
}
.profile-img {
  margin-left: 0;
  width: 20rem;
  height: 25rem;
}
.pv-text {
  background-color: #ffffff;
  color: black;
  margin-bottom: 20px;
}

.is-invalid {
  border-color: red;
}

.error-message {
  color: red;
  font-size: small;
}

.pv-txt {
  background-color: #ffffff;
  color: black;
  margin-bottom: 20px;
}

.reminder {
  color: #000000;
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
}

.center-title {
  text-align: center;
}
.edit-btn{
  background-color: #72D063;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 10px;
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
  background-color: #5cbf4b;
}

.delete-btn:hover{
  background-color: #FD6C6C;
}
.green-button {
  background-color: #72D063;
  border: none;
  margin-right: 20px;
}
.pink-button {
  background-color: #FD6C6C;
  border: none;
  height: 3rem;
  width: 7rem;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
}

.p-button-edit {
  background-color: #72D063;
  border: none;
  height: 3rem;
  width: 7rem;
}

@media (max-width: 568px){
  .content {
    flex-direction: column;
  }

  .right {
    margin-left: 5rem;
  }
  .left h1 {
    margin-left: 0;
  }
  .left{
    padding-right: 0;
    margin-left: 7rem;
  }

  .profile-img {
    margin-left: 0;
    width: 10rem;
    height: 15rem;
  }
  .inputs {
    width: 100%;
    gap: 20px;
  }
  .button-container{
  }
}

</style>
