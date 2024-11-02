<script setup lang="ts">
import Banner from "@/components/utils/Banner.vue";
import MpCards from "@/components/mp-components/MpCards.vue";

const mp_text = "Um die hohen Anforderungen unserer Kunden gerecht zu werden, fertigt die SCHMID GmbH nach dem neusten Stand der Technik. Mit weitreichenden Know-how und modernster Technologie bieten wir ein großes Leistungsspektrum in vielen Bereichen. Der moderne Maschinenpark der SCHMID GmbH ist das Herzstück unserer umfangreichen und flexiblen Produktionsstraße. Erleben Sie Exklusivität von DMGMORI bei SCHMID.";
const mp_title = "Maschinenpark";
</script>

<template>
  <div class="mp-view">
    <div class="banner-container">
      <Banner title="MASCHINENPARK" backgroundImage="/assets/images/maschinenpark/maschinenpark-1.png"/>
    </div>
    <div class="mp-container">
      <h2>{{ mp_title }}</h2>
      <p>{{ mp_text }}</p>
      <div class="mpcards-container">
        <MpCards/>
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
