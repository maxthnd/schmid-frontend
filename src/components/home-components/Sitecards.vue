<script setup lang="ts">
import SchmidcardMediumsmall from "@/components/utils/schmidcard-mediumsmall.vue";

const cardData = [
  { title: 'Messtechnik', backgroundImage: 'assets/images/faromessarmbanner.jpg', siteref: '/messtechnik' },
  { title: 'Maschinenpark', backgroundImage: 'assets/images/maschinenpark/maschinenpark-1.png', siteref: '/maschinenpark' },
  { title: 'Fräserei', backgroundImage: 'assets/images/fräserei/fräserei-1.png',siteref: '/fraeserei' },
  { title: 'CAD/CAM', backgroundImage: 'assets/images/cadandcam/cadcam.jpg', siteref: '/cad-cam' }
];
</script>

<template>
  <div class="sitecards-content">
    <p class="headline">Einblicke bei der SCHMID GmbH</p>
    <div class="content-cards">
      <schmidcard-mediumsmall
          v-for="(card, index) in cardData"
          :key="index"
          :title="card.title"
          :background-image="card.backgroundImage"
          :reference="card.siteref"
      ></schmidcard-mediumsmall>
    </div>
  </div>
</template>

<style scoped>
.content-cards{
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
}
.sitecards-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  margin-top: 25px;
}
.headline{
  color: white;
  font-size: 24px;
}
</style>