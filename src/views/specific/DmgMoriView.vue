<script setup lang="ts">
import Banner from "../../components/utils/Banner.vue";
import Showcase from "../../components/dmgmori-components/Showcase.vue";

const showcase_title = "DMG MORI EXKLUSIVE";
const showcase_text = "Erleben Sie Maschinenexklusivität bei der SCHMID GMBH";
const showcase_buttons = ["Mehr erfahren"];
const afterword_text = "Das große Inventar an Maschinen der SCHMID GmbH bietet vielerlei Möglichkeiten. Die SCHMID GmbH legt besonders Wert auf Weiterentwicklung und technologischen Fortschritt, deshalb setzen wir auf die neusten und besten Maschinen für den Einsatz bei Kundenaufträgen.";
const afterword_secondtext = "Erleben Sie unsere Vielfalt an Maschinen";
const afterword_button = "Maschinenpark";
</script>

<template>
  <div class="dmgmori-view">
    <div class="banner-container">
      <Banner title="DMGMORI" backgroundImage="/assets/images/company/companyoutside.jpg"/>
    </div>
    <div class="showcase-container">
      <Showcase
          :title="showcase_title"
          :text="showcase_text"
          imageUrl="public/assets/images/dmgmori/DMU-340-Gantry-1.mp4"
          :buttons="showcase_buttons"
      />
    </div>
    <div class="afterword-container">
      <p class="afterword-text">{{ afterword_text }}</p>
      <h6>{{ afterword_secondtext }}</h6>
      <button type="button" class="btn btn-primary">{{ afterword_button }}</button>
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
.showcase-container {
  width: 100%;
  background: radial-gradient(#0a66c3, #002a9a);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 350px;
  padding: 20px 0;
}
.afterword-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  padding: 40px;
}
.afterword-text {
  width: 65%;
  text-align: center;
  font-size: 0.9em;
}
.dmgmori-view {
  width: 100%;
  height: 100%;
}
</style>
