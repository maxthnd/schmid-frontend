<script setup lang="ts">
defineProps({
  title: String,
  backgroundImage: String
});
</script>

<template>
  <div class="background-container">
    <img :src="backgroundImage" alt="Background" class="background-image" />
    <div class="blacksetter"></div>
    <div class="content">
      <img :src="'assets/images/core/schmid-website-logo.png'" alt="Logo" class="logo" />
      <h1 class="title">{{ title }}</h1>
    </div>
  </div>
</template>

<style scoped>
.background-container {
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.blacksetter {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.logo {
  height: 58px;
}

.title {
  color: white;
  font-size: 2em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
}
</style>
