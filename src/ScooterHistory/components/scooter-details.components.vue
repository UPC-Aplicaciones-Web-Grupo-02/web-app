<template>
  <div class="details-panel">
    <div class="details-header">
      <h3>{{ scooter.name }}</h3>
    </div>
    <div class="details-body">
      <img :src="scooter.image" :alt="scooter.name" class="scooter-image" />
      <p class="description">{{ scooter.description }}</p>
      <div class="info">
        <span class="price">Marca: {{ scooter.marca }}</span>
        <span class="price">Modelo: {{ scooter.modelo }}</span>
        <span class="price">Precio por hora: ${{ scooter.price }}</span>
        <span class="stock">Stock: {{ scooter.stock }}</span>
      </div>
    </div>
    <div class="button-group">
      <button class="btn back" @click="$emit('close')">Regresar</button>
      <button class="btn rent" @click="alquilarScooter">Alquilar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scooter: {
      type: Object,
      required: true
    }
  },
  methods: {
    alquilarScooter() {
      // Aquí puedes agregar la lógica para procesar el alquiler.
      alert(`Has alquilado el scooter: ${this.scooter.name}`);
    }
  }
};
</script>

<style scoped>
.details-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: linear-gradient(to bottom, #ffffff, #f0f0f0);
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  transition: transform 0.3s ease;
  z-index: 100;
  padding: 20px;
}

.details-header {
  background: linear-gradient(to right, #6a3fa0, #8a5fbf);
  color: #fff;
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}

.details-header h3 {
  margin: 0;
  font-size: 24px;
}

.details-body {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scooter-image {
  width: 100%;
  max-width: 350px; /* Aumenta el tamaño máximo */
  height: 250px; /* Más espacio para la imagen */
  object-fit: contain; /* Asegura que la imagen se ajuste sin recortes */
  border-radius: 10px;
  background-color: #fff; /* Fondo blanco para evitar vacíos */
  padding: 10px; /* Espaciado interno para dar más respiro */
}


.description {
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
  text-align: justify;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
}

.info .price,
.info .stock {
  font-weight: bold;
  color: #333;
}

.button-group {
  display: flex;
  gap: 15px;
}

.btn {
  flex: 1;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn.back {
  background-color: #ff0000;
  color: #ffffff;
}

.btn.back:hover {
  background-color: #b3b3b3;
}

.btn.rent {
  background-color: #28a745;
  color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.btn.rent:hover {
  background-color: #218c46;
}
</style>
