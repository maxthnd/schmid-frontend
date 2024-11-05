<script setup lang="ts">
defineProps({
  title: String,
  image: String,
});
</script>

<template>
  <div class="card-ms">
    <div class="blur-background" :style="{ backgroundImage: `url(${image})` }"></div>
    <div class="content">
      <h5>{{ title }}</h5>
    </div>
  </div>
</template>

<style scoped>
.card-ms {
  position: relative;
  width: 175px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: white;
  border-radius: 10px;
  overflow: hidden;
}

.blur-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  filter: blur(8px); /* Blur-Effekt */
  z-index: 0; /* Hinter dem Inhalt */
  border-radius: 10px;
}

.content {
  position: relative;
  z-index: 1; /* Über dem Hintergrund */
  text-align: center;
  padding: 10px;
}

h5 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: white; /* Textfarbe über dem Bild */
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); /* Textlesbarkeit verbessern */
}
</style>
