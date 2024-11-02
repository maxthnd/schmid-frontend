<script setup lang="ts">
import Banner from "../../components/utils/Banner.vue";
import VuaCards from "../../components/vua-components/VuaCards.vue";

const vua_text = "Die SCHMID GmbH ist Spezialist in der Herstellung von Vorrichtungen und Anlagen - ein zukunftsorientiertes Unternehmen, dass durch eine qualitativ hochwertige und zuverlässige Fertigungstechnologie namhafte Kunden gewinnen konnte.\n" +
    "        Auf höchstem technischen Niveau werden Sondermaschinen, Automationsanlagen, Lehren und Werkzeuge produziert. Der moderne Maschinenpark ist das Herzstück unserer Fertigung. Somit wird nicht nur in der Arbeitsvorbereitung mit neuester Technik gearbeitet, sondern auch im Bereich CAD / CAM und in den Abteilungen Zuschnitt, Schlosserei, Fräserei, Montage sowie in der Messtechnik.";
const vua_title = "Vorrichtungs- & Anlagenbau";
</script>

<template>
  <div class="mp-view">
    <div class="banner-container">
      <Banner title="VORRICHTUNGS & ANLAGENBAU" backgroundImage="/assets/images/anlagenbau/stock_anlagenbau.png"/>
    </div>
    <div class="mp-container">
      <h2>{{ vua_title }}</h2>
      <p>{{ vua_text }}</p>
      <div class="mpcards-container">
        <VuaCards/>
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
.mp-container {
  width: 100%;
  height: auto;
  background: radial-gradient(#0a66c3, #002a9a);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: start;
  padding: 40px;
}
.mp-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mpcards-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
