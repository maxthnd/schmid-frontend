
<script setup lang="ts">
import Slideshow from "../components/home-components/Slideshow.vue";
import Sitecards from "../components/home-components/Sitecards.vue";
import News from "../components/home-components/News.vue";
import { ref, onMounted } from "vue";
import CardTopic from "../components/core/CardTopic.vue";

const sitecardsRef = ref(null);
const newsRef = ref(null);

onMounted(() => {
  const sitecardsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInUp');
        sitecardsObserver.unobserve(entry.target);
      }
    });
  });

  const newsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInUp');
        newsObserver.unobserve(entry.target);
      }
    });
  });

  if (sitecardsRef.value) {
    sitecardsObserver.observe(sitecardsRef.value);
  }
  if (newsRef.value) {
    newsObserver.observe(newsRef.value);
  }
});
</script>

<template>
  <div class="home-view">
    <Slideshow/>
    <div class="vua-container">
      <div class="vua-content">
        <h1>Vorrichtungs- & Anlagenbau</h1>
        <p>Bei der SCHMID GmbH wird Wert darauf gelegt, neuste Technologie mit der langjährigen Erfahrung zu verbinden. Wir möchten nicht nur Sie glücklich machen, sondern das tun was wir am besten können. Deshalb sind wir als Betrieb im Vorrichtungs- & Anlagenbau so gut wie noch nie.</p>
        <a href="/vorrichtungs-und-anlagenbau" class="btn btn-primary">Mehr Entdecken</a>
      </div>
      <div class="vua-imagecontainer">
        <img src="/assets/images/anlagenbau/anlagensteuerung.webp" alt="" class="vua-image"/>
      </div>
    </div>
    <div class="construction-container">
      <CardTopic
          :title="'Konstruktion & Engineering'"
          :description="'Die Schmid GmbH ist Ihr kompetenter Partner im Vorrichtungs- und Anlagenbau sowie in der Messtechnik. Wir entwickeln maßgeschneiderte Lösungen, die auf die spezifischen Anforderungen unserer Kunden abgestimmt sind.'"
          :details="'Unsere modernen Fertigungsanlagen und hochqualifizierten Mitarbeiter gewährleisten präzise Ergebnisse und höchste Qualität. Mit innovativen Technologien und einem klaren Fokus auf Effizienz optimieren wir Ihre Produktionsprozesse. Vertrauen Sie auf unsere Expertise für zuverlässige Lösungen in der Industrie.'"
          :image-url="'/assets/images/cadandcam/construction.jpg'"
      />
    </div>
    <div ref="sitecardsRef" class="sitecards-container">
      <Sitecards/>
    </div>
    <div ref="newsRef" class="news-container">
      <News/>
    </div>
  </div>
</template>

<style scoped>
.home-view {
  width: 100%;
  background: radial-gradient(#0066ff, #123163);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.sitecards-container, .news-container {
  opacity: 0;
  transform: translateY(100px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}
.vua-container{
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
}
.vua-imagecontainer{
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.vua-image{
  width: auto;
  max-height: 324px;
  border-radius: 20px;
}
.construction-container{
  margin-top: 80px;
  margin-bottom: 80px;
}
.animate-fadeInUp {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>