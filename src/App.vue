<script setup lang="ts">
import { RouterView } from 'vue-router';
import BottomBar from "./components/core/BottomBar.vue";
import NavBar from "./components/core/NavBar.vue";
</script>

<template>
  <div id="app">
    <NavBar />
    <div class="content">
      <RouterView />
    </div>
    <BottomBar class="bottom-bar" />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}

.bottom-bar {
  position: relative;
  width: 100%;
  z-index: 10;
}
</style>
