<template>
  <div class="layout">
    <div class="main-content">
      <the-sidebar />
      <main class="content">
        <router-view></router-view>
      </main>
    </div>
    <the-footer />
  </div>
</template>

<script setup>
import TheFooter from './the-foother.component.vue'
import TheSidebar from './the-siderbar.component.vue'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  width: 100%;
  display: flex;
  flex: 1;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
