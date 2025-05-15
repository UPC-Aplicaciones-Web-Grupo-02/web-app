<script setup>
import TheSidebar from './layouts/the-siderbar.component.vue'
import TheFoother from './layouts/the-foother.component.vue'
</script>

<template>
  <div>
  <the-sidebar></the-sidebar>
  <router-view></router-view>
  <div>
  <the-foother></the-foother>
</template>

