<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  details: String,
  imageUrl: String,
});
</script>

<template>
  <div class="cardtopic-container">
    <div class="cardtopic-imagecontainer">
      <img :src="imageUrl" alt="" class="cardtopic-image"/>
    </div>
    <div class="cardtopic-content">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <p>{{ details }}</p>
    </div>
  </div>
</template>

<style scoped>
.cardtopic-container{
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 60px;
}
.cardtopic-imagecontainer{
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.cardtopic-image{
  width: auto;
  max-height: 324px;
  border-radius: 20px;
}
</style>