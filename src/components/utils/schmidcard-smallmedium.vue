<script setup lang="ts">
defineProps({
  title: String,
  titleImage: String,
  description: String,
  siteref: String
});
</script>

<template>
  <div class="card-ms">
    <div class="content">
      <h5>{{ title }}</h5>
      <p>{{ description }}</p>
      <RouterLink :to=siteref class="btn btn-primary">{{title}}</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.card-ms {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: black;
  overflow: hidden;
  border-radius: 10px;
}

.content {
  text-align: center;
  font-size: 14px;
  height: 100%;
  align-content: center;
  align-items: center;
  padding: 15px;
}

.btn {
  margin-top: auto;
  text-decoration: none;
  color: white;
  background-color: #007bff;
  padding: 10px 15px;
  border-radius: 5px;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
