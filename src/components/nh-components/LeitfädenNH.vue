<!-- Guides.vue -->
<template>
  <div class="guides-section">
    <h2>Unsere Leitfäden</h2>
    <p>Hier können Sie unsere Leitfäden herunterladen, die Ihnen helfen, die besten Lösungen für Ihre Bedürfnisse zu finden.</p>
    <div class="guides-list">
      <div v-for="guide in guides" :key="guide.id" class="guide-card">
        <h3>{{ guide.title }}</h3>
        <p>{{ guide.description }}</p>
        <a :href="guide.link" class="btn btn-secondary">Leitfaden herunterladen</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const guides = ref([
  {
    id: 1,
    title: 'Leitfaden für nachhaltige Baupraktiken',
    description: 'Erfahren Sie mehr über die besten nachhaltigen Praktiken im Bauwesen.',
    link: '/downloads/guide1.pdf',
  },
  {
    id: 2,
    title: 'Energieeffiziente Lösungen',
    description: 'Tipps und Tricks zur Verbesserung der Energieeffizienz.',
    link: '/downloads/guide2.pdf',
  },
  {
    id: 3,
    title: 'Materialauswahl im Bau',
    description: 'Wie man umweltfreundliche Materialien auswählt.',
    link: '/downloads/guide3.pdf',
  },
]);
</script>

<style scoped>
.guides-section {
  padding: 20px;
  background-color: rgba(0, 102, 255, 0.1);
  border-radius: 10px;
  color: white;
  margin: 20px;
}

.guides-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.guide-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  width: 300px;
  text-align: center;
}

.btn-secondary {
  margin-top: 10px;
}
</style>
