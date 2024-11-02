<script setup lang="ts">
import Banner from "../../components/utils/Banner.vue";
import HeadlineNH from "../../components/nh-components/HeadlineNH.vue";
import CardTopic from "../../components/core/CardTopic.vue";
import SustainabilityGoals from "../../components/nh-components/SustainabilityGoals.vue";
</script>

<template>
  <div class="themen-view">
    <div class="banner-container">
      <Banner title="NACHHALTIGKEIT" backgroundImage="/assets/images/sustainability/nachhaltigkeit.jpg" />
    </div>
    <div class="sustainability-container">
      <HeadlineNH></HeadlineNH>
      <div class="information-section">
        <SustainabilityGoals></SustainabilityGoals>
        <CardTopic
            :title="'Sustainability like a Pro'"
            :description="'Nachhaltigkeit ist nicht nur eine Option, sondern eine Verpflichtung. Wir helfen Ihnen, Ihre Prozesse effizienter und umweltfreundlicher zu gestalten, ohne Kompromisse bei der Qualität einzugehen.'"
            :details="'Mit innovativen Lösungen und modernster Technologie ermöglichen wir eine ressourceneffiziente Produktion. Durch energieoptimierte Verfahren und nachhaltige Materialien sorgen wir dafür, dass Ihre Prozesse ökologisch und wirtschaftlich zukunftsfähig bleiben.'"
            :image-url="'/assets/images/sustainability/pro.jpg'"
        />
      </div>

      <div class="guides-container">
        <h2>Leitfaden der SCHMID GmbH</h2>
        <div class="guides-content">
          <div class="guides-text">
            <p>
              In unserem Leitfaden für Nachhaltigkeit im Vorrichtungs- und Anlagenbau finden Sie detaillierte Informationen zu umweltfreundlichen
              Praktiken, Energieeinsparung und der Optimierung von Produktionsprozessen. Dieser Leitfaden unterstützt Unternehmen dabei,
              ressourcenschonender zu arbeiten und ihre ökologische Verantwortung wahrzunehmen.
            </p>
          </div>
          <div class="guides-box">
            <div class="guides-box-content">
              <button class="download-button">Leitfäden herunterladen</button>
            </div>
          </div>
        </div>
      </div>

      <div class="certificates-section">
        <h3>Unsere Zertifikate</h3>
        <div class="certificates">
          <object data="/assets/images/sustainability/ISO-9001-2024.pdf" class="certificate-image" />
          <object data="/assets/images/sustainability/ISO-14001-2024.pdf"  class="certificate-image" />
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

.sustainability-container {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.information-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  width: 100%;
  flex-wrap: wrap;
}

.guides-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 60px auto;
  background-color: white;
  color: black;
  border-radius: 15px;
  padding: 30px;
}

.guides-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.guides-text {
  flex: 1;
}

.guides-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 150px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.download-button {
  z-index: 2;
  position: relative;
  background: linear-gradient(90deg, #007bff, #0056b3);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 10px;
}

.download-button:hover {
  background: linear-gradient(90deg, #0056b3, #007bff);
}

.certificates-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 60px;
}

.certificates {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.certificate-image {
  width: 100px;
  border-radius: 10px;
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
  .information-section {
    flex-direction: column;
    align-items: center;
  }

  .guides-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .guides-box {
    width: 100%;
    height: auto;
  }

  .certificates {
    justify-content: center;
  }


}
</style>
