<template>
  <aside class="sidebar">
    <div class="sidebar-top">
      <center>
        <img src="../public/Logo.png" height="80px" alt="Logo de Movix" />
      </center>
      <ul>
        <li>
          <RouterLink to="/">
            <pv-button label="Profile" icon="pi pi-user" />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/ruta2">
            <pv-button label="Opción 2" icon="pi pi-user" />
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
      <RouterLink to="/logout">
        <pv-button label="Out Log" icon="pi pi-user" />
      </RouterLink>
    </div>
  </aside>
</template>

<script setup>

</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 250px;
  border-right: 3px solid #16ac72;
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
  justify-content: center;
  margin-bottom: 20px;
}
</style>
