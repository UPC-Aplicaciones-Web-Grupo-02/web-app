<template>
  <div class="scooter-list-container" aria-label="Lista de scooters disponibles">
    <h1 aria-label="Título: Tus Scooters">Tus Scooters</h1>

    <div class="scooter-grid" aria-label="Lista de tarjetas de scooters">
      <div v-for="scooter in scooters" :key="scooter.id" class="scooter-card" aria-label="Tarjeta de scooter">
        <img :src="scooter.image" :alt="`Imagen de ${scooter.name}`" class="scooter-image" aria-label="Imagen del scooter {{ scooter.name }}">
        <h3 class="scooter-name" aria-label="Nombre del scooter">{{ scooter.name }}</h3>
        <pv-button @click="viewDetails(scooter.id)" class="details-button" aria-label="Ver detalles del scooter {{ scooter.name }}">{{ $t('viewScooter.detalle') }}</pv-button>
      </div>
      <pv-button @click="createNewScooter" class="create-button" aria-label="Crear nuevo scooter">
        <i class="pi pi-plus" aria-hidden="true"></i>
      </pv-button>
    </div>

    <pv-button @click="searchScooter" class="search-scooter" aria-label="Buscar scooter">{{ $t('viewScooter.buscar') }}</pv-button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Db } from "@/movix/scooter-view/services/scooter.service.js";

const db = new Db();
const router = useRouter();
const scooters = ref([]);

onMounted(async () => {
  const result = await db.getAllScooters();
  if (Array.isArray(result.data)) {
    scooters.value = result.data;
  } else {
    console.error('getAllScooters did not return an array');
  }
});

const viewDetails = (scooterId) => {
  const selectedScooter = scooters.value.find(s => s.id === scooterId);
  sessionStorage.setItem("scooter", JSON.stringify(selectedScooter));
  router.push(`/scooter/${scooterId}`);
};

const createNewScooter = () => {
  router.push('/CreateScooter');
};

const searchScooter = () => {
  router.push('/SearchScooter');
};
</script>

<style scoped>
.scooter-list-container {
  padding: 20px;
}

h1 {
  color: #333;
  font-size: 2em;
  margin-bottom: 1rem;
}

.scooter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.scooter-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.scooter-image {
  width: 10vh;
  height: 15vh;
  border-radius: 4px;
}

.scooter-name {
  color: #333;
  font-size: 1.2em;
  margin-top: 0.5rem;
}

.details-button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #72D063;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}

.details-button:hover {
  background-color: #5cbf4b;
}

.create-button {
  width: 3rem;
  height: 3rem;
  color: black;
  background-color: #d7d7d7;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.create-button:hover {
  background-color: #bdbdbd;
}

.create-button i {
  font-size: 1.5em;
}

.search-scooter {
  margin-top: 20px;
  background-color: #72D063;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  padding: 10px 20px;
  margin-left: 50%;
  transform: translateX(-50%);
}

.search-scooter:hover {
  background-color: #5cbf4b;
}

@media (max-width: 768px) {
  .scooter-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  .search-scooter {
    margin-left: 35%;
  }
}
</style>
