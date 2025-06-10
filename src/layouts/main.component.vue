<template>
  <div class="layout">
    <TheHeader />
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import TheHeader from './header.component.vue';
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0px !important;
}

.content {
  flex: 1;
  padding: 10px;
}
</style>