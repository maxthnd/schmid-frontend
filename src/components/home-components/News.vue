<script setup lang="ts">
import SchmidcardSmallbig from "@/components/utils/schmidcard-smallbig.vue";

const cardData = [
  { title: 'Tagesgeschäft', titleImage: 'assets/images/news/tagesgeschaeft.png', newsRef: 'vorrichtungs-und-anlagenbau', description: 'Gewinnen Sie einen Einblick in unser Tagesgeschäft und damit allen verbundenen Aufgaben.' },
  { title: 'Karriere', titleImage: 'assets/images/news/karriere.png', newsRef: 'karriere', description: 'Sie möchten Teil unseres Teams werden? Bewerben Sie sich noch heute!' }
];
</script>

<template>
  <div class="news-content">
    <p class="headline">Neuigkeiten</p>
    <div class="content-cards">
      <schmidcard-smallbig
          v-for="(card, index) in cardData"
          :key="index"
          :title="card.title"
          :title-image="card.titleImage"
          :description="card.description"
          :ref="card.newsRef"
      ></schmidcard-smallbig>
    </div>
  </div>
</template>

<style scoped>
.content-cards{
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 36px;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;
}
.news-content{
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