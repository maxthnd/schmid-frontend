<script setup lang="ts">
defineProps({
  title: String,
  backgroundImage: String,
  reference: {
    type: String,
    default: '#',
  }
});
</script>

<template>
  <div class="card-ms" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <RouterLink :to=reference class="btn btn-primary" target="_self">{{ title }}</RouterLink>
  </div>
</template>

<style scoped>
.card-ms {
  position: relative;
  width: 450px;
  height: 120px;
  background-size: cover;
  background-position: center;
  color: black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.btn {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>
