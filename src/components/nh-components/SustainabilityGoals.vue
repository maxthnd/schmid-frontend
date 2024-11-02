<script setup lang="ts">
import SchmidcardSmalltopiccards from "../../components/utils/schmidcard-smalltopiccards.vue";
const cardData = [
  {
    title: 'Ressourcen',
    titleImage: 'assets/images/sustainability/resources.png',
    description: 'Wir minimieren den Materialverbrauch durch moderne Technologien und den Einsatz von Recyclingmaterialien.'
  },
  {
    title: 'Energieeffizienz',
    titleImage: 'assets/images/sustainability/energy.png',
    description: 'Unser Ziel ist es, den Energieverbrauch durch effiziente Maschinen und erneuerbare Energien zu senken und so die Betriebskosten zu optimieren.'
  },
  {
    title: 'Lieferketten',
    titleImage: 'assets/images/sustainability/delivery.png',
    description: 'Wir gestalten Lieferketten nachhaltiger durch Partnerschaften mit umweltbewussten Lieferanten und regelmäßige Audits für hohe Standards.'
  },
  {
    title: 'Kundenspezifikationen',
    titleImage: 'assets/images/sustainability/customer.png',
    description: 'Wir bieten maßgeschneiderte, nachhaltige Lösungen für Kunden, um deren Effizienz zu steigern und ihre Nachhaltigkeitsziele zu erreichen.'
  }
];

</script>

<template>
  <div class="sitecards-content">
    <div class="content-cards">
      <schmidcard-smalltopiccards
        v-for="(card, index) in cardData"
        :key="index"
        :title="card.title"
        :titleImage="card.titleImage"
        :description="card.description"
      ></schmidcard-smalltopiccards>
    </div>
  </div>
</template>

<style scoped>
.content-cards{
  max-width: 1600px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
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