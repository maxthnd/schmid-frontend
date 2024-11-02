<script setup lang="ts">
import SchmidcardSmallmedium from "../../components/utils/schmidcard-smallmedium.vue";
const cardData = [
  { title: 'Leistungsspektrum', description: 'Das Leistungsspektrum der SCHMID GmbH ist in den letzten Jahren enorm gewachsen und ist in den Kernbereichen Vorrichtungsbau, Sondermaschinenbau, Automationsanlagen & Werkzeugbau tätig.', siteref: 'leistungsspektrum' },
  { title: 'CAD/CAM', description: 'Dank hochmoderner EDV unter der Anwendung aktuellster Software und langjährigen Erfahrungen mit geschultem Fachpersonal bietet die SCHMID GmbH höchste Professionalität und Flexibilität.', siteref: 'cad-cam' },
  { title: 'Messtechnik', description: 'Um den hohen Anforderungen unserer Kunden gerecht zu werden, wird das gerfertigte Produkt entsprechend kontrolliert und dokumentiert. Dieser Vorgang erfolgt mit hochflexiblen Faro-Armen und einer Stieflmayer Messmaschine.', siteref: 'messtechnik'},
  { title: 'Montage', description: 'Unterstützung bei der Montage und Demontage von Maschinen und Anlagen. Auch die terminliche und logistische Organisation sowie die Inbetriebnahme übernehmen wir selbstverständlich gerne für Sie.', siteref: 'montage' },
  { title: 'Maschinenpark', description: 'Erleben Sie die Vielfalt an Maschinen und Technologien der SCHMID GmbH. In der Zusammenarbeit mit DMGMORI liefern wir durch unseren Einsatz das beste Ergebnis.', siteref: 'maschinenpark'}
];
</script>

<template>
  <div class="vua-content">
    <p class="headline">Unsere Fasetten</p>
    <div class="content-cards">
      <schmidcard-smallmedium
          v-for="(card, index) in cardData"
          :key="index"
          :title="card.title"
          :description="card.description"
          :siteref="card.siteref"
      ></schmidcard-smallmedium>
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

  margin-top: 25px;
}
.vua-content{
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