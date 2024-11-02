<script setup lang="ts">
defineProps({
  title: String,
  text: String,
  imageUrl: String,
  buttons: Array
});
</script>

<template>
  <div class="showcase-module-container">
    <video autoplay loop muted playsinline class="showcase-image">
      <source :src="imageUrl" type="video/mp4" class="showcase-image">
    </video>
    <div class="showcase-content">
      <h1 class="showcase-title">{{ title }}</h1>
      <p class="showcase-text">{{ text }}</p>
      <div class="showcase-buttons">
        <button
            v-for="(button, index) in buttons"
            :key="index"
            class="btn btn-primary mx-1"
        >
          {{ button }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.showcase-module-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  gap: 40px;
}

.showcase-image {
  width: 40%;
  max-width: 100%;
  object-fit: cover;
}

.showcase-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60%;
}

.showcase-title {
  font-size: 2em;
  margin-bottom: 10px;
}

.showcase-text {
  font-size: 1em;
  margin-bottom: 20px;
  text-align: left;
}

.showcase-buttons {
  display: flex;
  gap: 10px;
}
</style>

