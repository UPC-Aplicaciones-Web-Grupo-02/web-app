<template>
  <aside class="sidebar">
    <div class="sidebar-top">
      <div style="text-align: center;">
        <img src="../public/Logo.png" height="80px" alt="Logo de Movix" />
      </div>
      <ul>
        <li>
          <RouterLink to="/Profile">
            <pv-button label="Profile" icon="pi pi-user" />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/suscripciones">
            <pv-button label="Mi suscripción" icon="pi pi-user" />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/ruta3">
            <pv-button label="Opción 3" icon="pi pi-user" />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/ruta4">
            <pv-button label="Opción 4" icon="pi pi-user" />
          </RouterLink>
        </li>
      </ul>
    </div>

    <div class="sidebar-bottom">
      <select v-model="$i18n.locale" aria-label="Language Switcher">
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>

      <RouterLink to="/logout">
        <pv-button label="Out Log" icon="pi pi-sign-out" />
      </RouterLink>
    </div>
  </aside>
</template>

<script setup>
// Nada que importar, $i18n está global por main.js 😄
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  width: 250px;
  border-right: 3px solid #419828;
  background: #fff;
  padding: 0 0 20px 0;
}

.sidebar-top {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar-top ul {
  padding: 0;
  margin: 40px 0 0 0;
  width: 100%;
}

.sidebar-top ul li {
  margin: 20px 0;
  text-align: center;
}

.sidebar-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.sidebar-bottom select {
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
}
</style>
