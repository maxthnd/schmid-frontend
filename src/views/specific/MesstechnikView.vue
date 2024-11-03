<script setup lang="ts">
import Banner from "../../components/utils/Banner.vue";
const messtechnik_text = "Um den hohen Anforderungen unserer Kunden gerecht zu werden, ist es für uns selbstverständlich die Qualität unserer CAD/CAM Technik gefertigten Produkte entsprechend zu kontrollieren und zu dokumentieren. Dazu setzen wir die entsprechende Messtechnik mit dem erforderlichen Messmitteln und Systemen ein. In Ergänzung unserer Stieflmayer Messmaschine arbeiten wir mit Hilfe hochflexibler FARO-Arme. Dadurch gelingt es uns für alle Bauteile und Dienstleistungen, eine Gleichbleibende Güte zu erreichen. Unabhängig davon, wie die Messaufgabe aussieht, bieten wir Ihnen 3D-Prüfungen, CAD-zu-Bauteil-Vergleich, Ausrichtugnen oder Reverse Engineering mit Hilfe von usneren Messarmen FARO Edge und FARO Fusion an. Alle unseren Messgeräte sind mit der Software Metromec der Firma WENZEL Metromec AG ausgestattet.";
const messtechnik_title = "Messtechnik";
</script>

<template>
  <div class="leistungsspektrum-view">
    <div class="banner-container">
      <Banner title="MESSTECHNIK" backgroundImage="/assets/images/messtechnik/messtechnik_banner.png"/>
    </div>
    <div class="messtechnik-container">
      <img class="messtechnik-image" src="/assets/images/messtechnik/faroarm.png" alt="">
      <div class="messtechnik-content">
        <h2>{{ messtechnik_title }}</h2>
        <p>{{ messtechnik_text }}</p>
        <p>Gelange zu unserem Maschinenpark, um alle Technologien einzusehen.</p>
        <a href="maschinenpark" class="btn btn-primary">Maschinenpark</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-container {
  position: relative;
  width: 100%;
  max-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  z-index: 100;
}

.messtechnik-container {
  width: 100%;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 60px;
  gap: 20px;
}

.messtechnik-image {
  width: 212px;
  height: auto;
  object-fit: contain;
  margin-right: 20px;
}

.messtechnik-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: start;
  gap: 10px;
  padding: 10px;
}

.leistungsspektrum-view {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: radial-gradient(#0a66c3, #002a9a);
  height: 90vh;
}

@media (max-width: 768px) {
  .messtechnik-container {
    flex-direction: column;
    align-items: center;
  }

  .messtechnik-image {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .messtechnik-content {
    text-align: center;
    align-items: center;
  }
}
</style>
