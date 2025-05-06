<template>
  <aside class="sidebar">
    <center><img src="../public/Logo.png" height="80px" alt="Logo de Movix"></center>
    <div style="margin: 100px 0 0 0">
      <nav>
        <ul>
          <li><RouterLink class="pv-button" to="/">Profile</RouterLink></li>
          <li><RouterLink class="pv-button" to="/">Suscription</RouterLink></li>
          <li><RouterLink class="pv-button" to="/">Reservation</RouterLink></li>
        </ul>
      </nav>
    </div>
    <div style="margin: 300px 0 0 0">
      <nav>
        <ul>
          <li><RouterLink class="pv-button" to="/">Go out</RouterLink></li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script setup>
</script>

<style scoped>
.sidebar {
  width: 200px;
  border-right: 3px solid green;
  padding: 15px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  margin: 40px 0;
  text-align: center;
}

.sidebar ul li a {
  text-decoration: none;
}

.pv-button {
  background-color: #55bd37;
  color: #fff;
  padding: 10px;
  border-radius: 9px;
}
</style>
