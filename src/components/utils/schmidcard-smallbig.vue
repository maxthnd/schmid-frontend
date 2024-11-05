<script setup lang="ts">
const props = defineProps<{
  title?: string;
  titleImage?: string;
  description?: string;
  ref?: string;
}>();
</script>

<template>
  <div class="card-ms">
    <img :src="titleImage" alt="Title Image" class="title-image" />
    <div class="content">
      <h5>{{ title }}</h5>
      <p>{{ description }}</p>
      <RouterLink :to=ref class="btn btn-primary">Mehr erfahren</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.card-ms {
  position: relative;
  width: 250px;
  height: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  overflow: hidden;
}

.title-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.content {
  text-align: center;
  font-size: 14px;
  height: 100%;
  align-content: center;
  align-items: center;
}

.btn {
  margin-top: auto;
}
</style>