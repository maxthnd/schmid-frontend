<template>
  <div class="popup-overlay" v-if="isVisible">
    <div class="popup-content">
      <button class="close-button" @click="closePopup">x</button>
      <div class="job-informations">
        <div class="job-main">
          <div class="job-maininfo">
            <h2 class="job-title">{{ job.jobType }} - {{ job.title }}</h2>
            <div class="job-description">
              <p>{{ job.description }}</p>
            </div>
          </div>
          <div class="job-card">
            <div class="card-content">
              <h4 class="job-title">Unsere Erwartungen</h4>
              <div v-for="(expectation, index) in job.expectations" :key="index">
                <p>- {{ expectation }}</p>
              </div>
            </div>
          </div>
          <div class="job-card">
            <div class="card-content">
              <h4 class="job-title">Dein Alltag bei uns</h4>
              <div v-for="(work, index) in job.work" :key="index">
                <p>- {{ work }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="job-second">
          <img v-if="imageSrc" :src="imageSrc" alt="Berufsbild" class="job-image" />
          <div class="job-secondcard">
            <div class="card-content">
              <h4 class="job-title">Ansprechpartner*in</h4>
              <h5>Sonja Maerz</h5>
              <ul>
                <li>Tel: 06264 9260880</li>
                <li>Mail: info@schmidgmbh.com</li>
              </ul>
            </div>
          </div>
          <button class="btn btn-light" @click="apply">Zur Bewerbung</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
  isVisible: {
    type: Boolean,
    required: true,
  }
});

const emit = defineEmits(['close']);

const imageSrc = computed(() => {
  return props.job.imageData ? `data:image/png;base64,${props.job.imageData}` : null;
});

const apply = () => {
  console.log("User wanted to apply.")
}

const closePopup = () => {
  emit('close');
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.job-description {
  text-align: start;
  justify-content: start;
  align-items: start;
  font-size: 16px;
}
.job-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 20px;
  position: relative;
}
.popup-content {
  background: #191919;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 90%;
  min-height: 800px;
  color: white;
}
.job-card {
  border-radius: 10px;
  background: #013cd5;
  color: white;
  width: 75%;
}
.job-secondcard {
  border-radius: 10px;
  background: #013cd5;
  color: white;
  width: 100%;
}
.job-main{
  padding: 10px;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.job-second{
  padding: 10px;
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;

}
.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: white;
}
.card-content{
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.job-informations {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.popup-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

.machine-details {
  text-align: left;
}

.machine-details p {
  margin: 8px 0;
}
</style>
