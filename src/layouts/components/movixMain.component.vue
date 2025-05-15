<template>
  <div class="layout">
    <TheHeader />
    <main class="content">
      <Welcome v-if="isMainRoute" />
      <router-view></router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import TheHeader from './theHeader.component.vue';
import TheFooter from './theFooter.component.vue';
import Welcome from './welcomeMovix.component.vue';

const route = useRoute();


const isMainRoute = computed(() => {
  return route.path === '/main';
});
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
