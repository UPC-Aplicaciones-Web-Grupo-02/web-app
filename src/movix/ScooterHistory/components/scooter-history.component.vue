<template>
  <div class="history-container">
    <div class="card">
      <h2>Historial de reservas de scooters</h2>
      <div class="scooter-list">
        <div v-for="scooter in scooters" :key="scooter.id" class="scooter-item">
          <img :src="scooter.image" :alt="scooter.name" class="scooter-image" />
          <p class="scooter-name">{{ scooter.name }}</p>
          <div class="actions">
            <button class="details" @click="showDetails(scooter)">Ver detalles</button>
          </div>
        </div>
      </div>
      <div class="actions">
        <button class="delete" @click="confirmDelete">Eliminar historial</button>
        <button class="back">Regresar</button>
      </div>
    </div>

    <!-- MODAL DE CONFIRMACIÓN -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <h3>¿Estás segur@ de que quieres borrar el historial?</h3>
        <p>Tus datos no podran ser recuperados</p>
        <div class="modal-actions">
          <button class="cancel" @click="showModal = false">Cancelar</button>
          <button class="confirm-delete" @click="deleteHistory">Borrar historial</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    scooters: Array
  },
  data() {
    return {
      showModal: false // Estado inicial del modal (cerrado)
    };
  },
  methods: {
    showDetails(scooter) {
      this.$emit("selectScooter", scooter);
    },
    confirmDelete() {
      this.showModal = true; // Abre el modal
    },
    deleteHistory() {
      alert("El historial ha sido borrado."); // Solo muestra la alerta, no elimina datos aún
      this.showModal = false; // Cierra el modal
    }
  }
};
</script>
<style scoped>
.history-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80%;
  margin: auto;
  padding: 20px;
}

.card {
  background-color: #b6a1f2; /* Azul claro */
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  text-align: center;
}

.card {
  background-color: #b6a1f2; /* Morado */
  padding: 30px; /* Mayor espacio interno */
  border-radius: 10px;
  width: 90%; /* Ampliar el ancho */
  max-width: 2000px; /* Para que sea más grande en pantallas grandes */
  text-align: center;
}


.scooter-list {
  display: flex;
  justify-content: space-evenly; /* Distribuir los scooters uniformemente */
  flex-wrap: wrap; /* Permitir ajuste en pantallas pequeñas */
  gap: 20px; /* Espacio uniforme entre ellos */
}


.scooter-item {
  background: white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  width: 250px;
}

.scooter-image {
  width: 200px; /* Todas tendrán el mismo ancho */
  height: 150px; /* Todas tendrán la misma altura */
  object-fit: contain; /* Mantiene la proporción de la imagen sin recortes */
  border-radius: 8px; /* Bordes suaves para mejorar el diseño */
  background-color: #fff; /* Fondo blanco para evitar espacios vacíos si la imagen es más pequeña */
}
.scooter-name {
  font-weight: bold;
  margin: 10px 0;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

}

.actions button {
  padding: 12px 20px;
  border-radius: 8px; /* Bordes redondeados */
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: 180px;
  height: 45px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

.details {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}


.delete {
  background-color: #ff4d4d;
  color: white;
}

.delete:hover {
  background-color: #cc0000;
}

.back {
  background-color: #35c759;
  color: white;
}

.back:hover {
  background-color: #28a745;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

.modal-actions {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
}

.modal-actions button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.cancel {
  background-color: #0db30a;
  color: white;
}

.confirm-delete {
  background-color: red;
  color: white;
}
</style>
