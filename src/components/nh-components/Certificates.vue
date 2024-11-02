<!-- Certificates.vue -->
<template>
  <div class="certificates-section">
    <h2>Unsere Urkunden</h2>
    <p>Entdecken Sie unsere Urkunden und Zertifikate, die unsere Kompetenz und Qualität in der Branche belegen.</p>
    <div class="certificates-list">
      <div v-for="certificate in certificates" :key="certificate.id" class="certificate-card">
        <img :src="certificate.image" alt="Zertifikat" class="certificate-image" />
        <h3>{{ certificate.title }}</h3>
        <a :href="certificate.link" class="btn btn-secondary">Urkunde herunterladen</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const certificates = ref([
  {
    id: 1,
    title: 'Zertifikat für Qualitätssicherung',
    image: '/assets/images/certificates/certificate1.jpg',
    link: '/downloads/certificate1.pdf',
  },
  {
    id: 2,
    title: 'Umweltzertifikat',
    image: '/assets/images/certificates/certificate2.jpg',
    link: '/downloads/certificate2.pdf',
  },
  {
    id: 3,
    title: 'Sicherheitszertifikat',
    image: '/assets/images/certificates/certificate3.jpg',
    link: '/downloads/certificate3.pdf',
  },
]);
</script>

<style scoped>
.certificates-section {
  padding: 20px;
  background-color: rgba(0, 102, 255, 0.1);
  border-radius: 10px;
  color: white;
  margin: 20px;
}

.certificates-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.certificate-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  width: 200px;
}

.certificate-image {
  width: 100%;
  border-radius: 10px;
}

.btn-secondary {
  margin-top: 10px;
}
</style>
