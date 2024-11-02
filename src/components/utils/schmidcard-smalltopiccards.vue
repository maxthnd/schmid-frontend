<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  titleImage: String,
});
</script>

<template>
  <div class="topiccard-container">
    <div class="topiccard-image">
      <img :src="titleImage" alt="Icon" class="card-icon" />
    </div>
    <div class="topiccard-content">
      <h4 class="card-title">{{ title }}</h4>
      <p class="card-description">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.topiccard-container {
  width: 45%;
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 16px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  min-height: 145px;
}

.topiccard-image {
  flex-shrink: 0;
}

.card-icon {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  object-fit: cover;
}

.topiccard-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
}

.card-title {
  margin: 0;
  color: black;
  font-size: 1.25rem;
}

.card-description {
  margin: 0;
  font-size: 1rem;
  color: #555;
}
</style>
