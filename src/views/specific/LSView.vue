<script setup lang="ts">
import Banner from "../../components/utils/Banner.vue";
import LsCards from "../../components/ls-components/LsCards.vue";

const leistungsspektrum_text = "Die SCHMID GmbH Vorrichtungs- und Anlagenbau wurde im Juni 1996 von Thilo Schmid als Metallbearbeitungsfirma / Schlosserei gegründet. Diesem Ursprung ist unsere Fertigung noch heute verbunden und kann dank des umfangreichen Maschinenparks einen Großteil der notwendigen Zuarbeiten im eigenen Haus durchführen. Mit den Jahren und der wachsenden Vielfalt an Kunden ist das Leistungsspektrum enorm gewachsen und weist heute folgende Kernbereiche auf:";
const leistungsspektrum_title = "Leistungsspektrum";
</script>

<template>
  <div class="leistungsspektrum-view">
    <div class="banner-container">
      <Banner title="LEISTUNGSSPEKTRUM" backgroundImage="/assets/images/leistungsspektrum/leistungsspektrum_banner.png"/>
    </div>
    <div class="leistungsspektrum-container">
      <div class="leistungsspektrum-content">
        <h2>{{ leistungsspektrum_title }}</h2>
        <p>{{ leistungsspektrum_text }}</p>
      </div>
      <LsCards />
    </div>
  </div>
</template>

<style scoped>
.leistungsspektrum-view {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background: radial-gradient(#0a66c3, #002a9a);
  overflow: hidden;
}

.banner-container {
  width: 100%;
  max-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.banner-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.leistungsspektrum-container {
  width: 100%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  color: white;
}

.leistungsspektrum-content {
  width: 100%;
  max-width: 1200px;
  text-align: left;
}

.leistungsspektrum-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.leistungsspektrum-content p {
  font-size: 1.2rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .leistungsspektrum-container {
    padding: 20px;
  }

  .leistungsspektrum-content {
    text-align: center;
  }

  .leistungsspektrum-content h2 {
    font-size: 2rem;
  }

  .leistungsspektrum-content p {
    font-size: 1rem;
  }
}
</style>
