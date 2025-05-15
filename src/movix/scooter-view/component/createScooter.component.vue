<template>
  <div class="p-d-flex p-flex-column p-ai-center p-jc-center scooter-create-container" aria-label="Contenedor de vista de creacion de scooter">
    <div class="p-d-flex p-jc-between content" aria-label="Contenido de scooter">
      <div class="p-d-flex p-flex-column p-ai-center p-jc-center left pv-card" aria-label="Sección izquierda de contenido de scooter">
        <h1 id="scooter-create-heading" class="font-bold center-title pv-txt" aria-label="Título de creacion de scooter">{{ $t('createScooter.title') }}</h1>
        <img :src="image" class="w-20 p-3 profile-img" alt="Imagen de scooter" aria-label="Imagen de perfil del scooter"/>
      </div>
      <div class="p-d-flex p-flex-column p-ai-center right" aria-label="Sección derecha de contenido de scooter">
        <div class="p-d-flex p-flex-column p-ai-center inputs" aria-label="Entradas de datos del scooter">
          <pv-inputtext v-model="name" :class="{ 'is-invalid': $v.name.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="Nombre Scooter" aria-label="Entrada de nombre del scooter"/>
          <span v-if="$v.name.$error" class="error-message" aria-label="Mensaje de error para el nombre">{{ $t('createScooter.nombre') }}</span>
          <pv-inputtext v-model="brand" :class="{ 'is-invalid': $v.brand.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="Marca" aria-label="Entrada de marca del scooter"/>
          <span v-if="$v.brand.$error" class="error-message" aria-label="Mensaje de error para la marca">{{ $t('createScooter.marca') }}</span>
          <pv-inputtext v-model="model" :class="{ 'is-invalid': $v.model.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="Modelo" aria-label="Entrada de modelo del scooter"/>
          <span v-if="$v.model.$error" class="error-message" aria-label="Mensaje de error para el modelo">{{ $t('createScooter.modelo') }}</span>
          <pv-inputtext v-model="image" :class="{ 'is-invalid': $v.image.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="URL de tu foto" aria-label="Entrada de URL de la foto del usuario"/>
          <span v-if="$v.image.$error" class="error-message" aria-label="Mensaje de error para la URL de la foto">{{ $t('createScooter.url') }}</span>
          <pv-inputnumber v-model="price_per_hour" :class="{ 'is-invalid': $v.price_per_hour.$error }" class="p-3 pv-text input-number" type="number" placeholder="Precio por hora" aria-label="Entrada de precio por hora del scooter"/>
          <span v-if="$v.price_per_hour.$error" class="error-message" aria-label="Mensaje de error para el precio por hora">{{ $t('createScooter.precio') }}</span>
          <Select v-model="district" :options="districts" optionLabel="name" optionValue="id" placeholder="Distrito" :inputStyle="{ backgroundColor: '#ffffff', color: 'black' }" class="w-15rem lg:w-25rem p-3 pv-text" aria-label="Campo de distrito"/>
          <span v-if="$v.district.$error" class="error-message" aria-label="Mensaje de error para el distrito">{{ $t('createScooter.distrito') }}</span>
          <pv-inputtext v-model="phone" :class="{ 'is-invalid': $v.phone.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="Celular" aria-label="Entrada de número de celular del usuario"/>
          <span v-if="$v.phone.$error" class="error-message" aria-label="Mensaje de error para el número de celular">{{ $t('createScooter.telefono') }}</span>
          <div class="p-d-flex p-jc-center p-ai-center p-mt-3 button-container">
            <pv-button class="p-button-create green-button p-mr-2" :label="$t('createScooter.btnGuardar')" @click="createScooter" />
            <pv-button class="p-button-cancel-edit pink-button" :label="$t('createScooter.btnCancelar')" @click="cancelCreation"/>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup>
import {Db} from "@/movix/scooter-view/services/scooter.service.js";
import router from "@/routes/routes.js";
import { ref, reactive } from 'vue'
import {required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
import Select from "primevue/select";

let id = 0
let name = ref('')
let brand = ref('')
let model = ref('')
let image = ref('')
let price_per_hour = ref(0)
let district = ref('')
let phone = ref('')
let districts = ref([
  {name: 'San Miguel', id: 'San Miguel'},
  {name: 'Pueblo Libre', id: 'Pueblo Libre'},
  {name: 'Magdalena', id: 'Magdalena'},
  {name: 'San Isidro', id: 'San Isidro'},
  {name: 'Miraflores', id: 'Miraflores'},
  {name: 'Barranco', id: 'Barranco'},
  {name: 'Chorrillos', id: 'Chorrillos'},
  {name: 'Surco', id: 'Surco'},
  {name: 'San Borja', id: 'San Borja'},
  {name: 'San Luis', id: 'San Luis'},
  {name: 'La Molina', id: 'La Molina'},
  {name: 'Jesus Maria', id: 'Jesus Maria'},
  {name: 'Lince', id: 'Lince'},
  {name: 'Breña', id: 'Breña'},
  {name: 'Cercado de Lima', id: 'Cercado de Lima'},
  {name: 'La Victoria', id: 'La Victoria'},
  {name: 'San Juan de Lurigancho', id: 'San Juan de Lurigancho'},
  {name: 'San Juan de Miraflores', id: 'San Juan de Miraflores'},
  {name: 'Villa el Salvador', id: 'Villa el Salvador'},
  {name: 'Villa Maria del Triunfo', id: 'Villa Maria del Triunfo'},
  {name: 'Los Olivos', id: 'Los Olivos'},
  {name: 'Independencia', id: 'Independencia'},
  {name: 'Comas', id: 'Comas'},
  {name: 'Carabayllo', id: 'Carabayllo'},
  {name: 'Puente Piedra', id: 'Puente Piedra'},
  {name: 'Ancón', id: 'Ancón'},
  {name: 'Santa Rosa', id: 'Santa Rosa'},
  {name: 'Chosica', id: 'Chosica'},
  {name: 'Cieneguilla', id: 'Cieneguilla'},
  {name: 'Pachacamac', id: 'Pachacamac'},
  {name: 'Santa Anita', id: 'Santa Anita'},
  {name: 'Ate', id: 'Ate'},
  {name: 'El Agustino', id: 'El Agustino'},
  {name: 'San Martin de Porres', id: 'San Martin de Porres'},
  {name: 'Callao', id: 'Callao'}
])

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

async function createScooter() {
  $v.value.$touch()
  if ($v.value.$error) {
    return -1;
  } else {
    let scooter = {
      id: id,
      name: name.value,
      brand: brand.value,
      model: model.value,
      image: image.value,
      price_per_hour: price_per_hour.value,
      district: district.value,
      phone: phone.value
    }
    await Db.prototype.createScooter(scooter).then((response) => {
      if (response.status === 200) {
        alert("Scooter Create Success");
        router.push("/scooter")
      }
    }).catch(() => {
      alert("Error");
    });
  }
}
function cancelCreation() {
  $v.value.$touch()
  router.push("/scooter")
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

.pv-text {
  background-color: #ffffff;
  color: black;
  margin-bottom: 20px;
}

.profile-img{
  margin-left: 0;
  width: 20rem;
  height: 25rem;
}
.is-invalid {
  border-color: red;
}

.error-message {
  color: red;
  font-size: small;
}

.pv-txt {
  color: black;
}

.center-title {
  text-align: center;
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

.p-button-create {
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
    margin-left: 2rem;
  }
}

</style>
