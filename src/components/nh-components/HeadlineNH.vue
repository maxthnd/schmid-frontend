<template>
  <div class="sustainability-intro">
    <h1 class="animated-title">Nachhaltigkeit bei SCHMID</h1>
    <p class="intro-text">"Gemeinsam für eine grünere Zukunft – Innovationskraft und Verantwortung vereint!"</p>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.sustainability-intro {
  text-align: center;
  margin: 50px 0;
  color: white;
}

.animated-title {
  font-size: 3em;
  animation: fadeIn 2s ease-in-out;
}

.intro-text {
  font-size: 1.5em;
  margin-top: 10px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
