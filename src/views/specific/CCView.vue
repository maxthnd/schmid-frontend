<script setup lang="ts">
import Banner from "@/components/utils/Banner.vue";

const themes = [
  {
    title: "SolidWorks",
    text: "SolidWorks ist eine fortschrittliche CAD-Software, die es uns ermöglicht, präzise 3D-Modelle zu erstellen und komplexe Baugruppen zu entwerfen. Durch die Integration leistungsstarker Funktionen für Simulation und Analyse stellen wir sicher, dass unsere Produkte den höchsten Qualitätsstandards entsprechen. Die Benutzerfreundlichkeit von SolidWorks fördert zudem eine schnelle und effiziente Produktentwicklung, die perfekt auf die Bedürfnisse unserer Kunden zugeschnitten ist.",
    image: "/assets/images/cadandcam/solidworks.webp",
    bannerImage: "/assets/images/cadandcam/solidworks-banner.jpg",
    link: "/maschinenpark"
  },
  {
    title: "Siemens NX",
    text: "Mit Siemens NX nutzen wir eine umfassende Plattform für Computer-Aided Design (CAD), Computer-Aided Manufacturing (CAM) und Computer-Aided Engineering (CAE). Siemens NX bietet uns die Flexibilität und Leistungsfähigkeit, um innovative Designs zu erstellen und die Fertigungseffizienz zu steigern. Unsere Ingenieure können damit die gesamte Produktentwicklung nahtlos steuern und optimieren.",
    image: "/assets/images/cadandcam/siemensnx.webp",
    bannerImage: "/assets/images/cadcam/cadcam_banner.png",
    link: "/siemensnx"
  },
  {
    title: "CAMWorks",
    text: "CAMWorks ist eine integrierte CAM-Lösung, die für ihre Flexibilität und Leistungsfähigkeit bekannt ist. Sie bietet eine benutzerfreundliche Umgebung zur Programmierung und Optimierung von CNC-Maschinen. Mit CAMWorks können wir effizientere Fertigungsprozesse entwickeln, die die Produktionskosten senken und die Produktqualität verbessern.",
    image: "/assets/images/cadandcam/camworks.webp",
    link: "/camworks"
  },
  {
    title: "CATIA",
    text: "CATIA ist eine leistungsstarke CAD-Software, die bei der SCHMID GmbH zur Entwicklung präziser und komplexer Konstruktionen eingesetzt wird. Mit CATIA können wir detaillierte 3D-Modelle erstellen und diese in allen Phasen des Produktionsprozesses optimieren. Die Software ermöglicht uns, komplexe Baugruppen und Einzelteile effizient zu entwerfen und zu simulieren. Durch den Einsatz von CATIA verbessern wir nicht nur die Designqualität, sondern erhöhen auch die Effizienz in der Fertigung, was zu reduzierten Entwicklungszeiten und höherer Produktgenauigkeit führt.",
    image: "/assets/images/cadandcam/cati.webp",
    link: "/catia"
  }
];
</script>

<template>
  <div class="themen-view">
    <div class="banner-container">
      <Banner title="CAD & CAM" backgroundImage="/assets/images/cadandcam/solidworks-banner.jpg"/>
    </div>
    <div v-for="(theme, index) in themes" :key="index" class="theme-section">
      <div class="theme-container">
        <img class="theme-image" :src="theme.image" :alt="theme.title">
        <div class="theme-content">
          <h2>{{ theme.title }}</h2>
          <p>{{ theme.text }}</p>
        </div>
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
  margin-bottom: 20px;
}

.theme-container {
  max-width: 1200px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px;
  gap: 20px;
  margin-bottom: 40px;
}

.theme-image {
  width: 200px;
  height: auto;
  object-fit: contain;
  margin-right: 20px;
}

.theme-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: start;
  gap: 10px;
  padding: 10px;
}

.themen-view {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: radial-gradient(#0a66c3, #002a9a);
  padding-bottom: 60px;
}

@media (max-width: 768px) {
  .theme-container {
    flex-direction: column;
    align-items: center;
  }

  .theme-image {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .theme-content {
    text-align: center;
    align-items: center;
  }
}

.theme-section {
  padding: 0 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 60px;

}
</style>
