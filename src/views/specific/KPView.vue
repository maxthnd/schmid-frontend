<script setup lang="ts">

import Banner from "../../components/utils/Banner.vue";
import KPJobBoard from "../../components/cp-components/KPJobBoard.vue";
</script>

<template>
  <div class="careerportal-view">
    <div class="banner-container">
      <Banner title="KARRIERE IM HANDWERK" backgroundImage="/assets/images/karriereportal/careerportal.jpg"/>
    </div>
    <div class="careerportal-container">
      <KPJobBoard/>
    </div>
    <div class="information-section">
      <p>Bei Fragen oder Problemen zum Bewerbungsprozess, wenden Sie sich bitte an: info@schmidgmbh.com</p>
    </div>
  </div>
</template>

<style scoped>
.careerportal-view {
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
  max-height: 400px;
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

.careerportal-container {
  width: 100%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  color: white;
}
.information-section{
  color: white;
  display: flex;
  width: 100%;
  padding-left: 20px;
  align-items: center;
  justify-content: center;
}
</style>