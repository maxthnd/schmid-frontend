<script setup lang="ts">
import Banner from "../components/utils/Banner.vue";
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  company: '',
  serviceType: '',
  employeeCount: '',
  machineFile: null,
  message: '',
});

interface FormData {
  machineFile: File | null;
}

const submitForm = () => {
  console.log('Form Data:', formData.value);
};
</script>

<template>
  <div class="contact-view">
    <div class="banner-container">
      <Banner title="KONTAKTFORMULAR" backgroundImage="/assets/images/contact.jpg"/>
    </div>
    <div class="contact-container">
      <div class="information-section">
        <h2>Kontaktaufnahme</h2>
        <p>
          Bei Fragen oder Problemen füllen Sie gerne das Kontaktformular aus und senden Sie ihre Anfrage ab. Durch unsere hohen Anfragen kann es länger als gewöhnlich dauern, bis Sie eine Antwort durch unser kompotentes Team erhalten werden. Wir bitten um Geduld.
        </p>
      </div>
      <div class="bewerbung-form-container">
        <h2 class="form-title">Kontaktformular</h2>
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="formData.name" required />
          </div>
          <div class="form-group">
            <label for="email">E-Mail</label>
            <input type="email" id="email" v-model="formData.email" required />
          </div>
          <div class="form-group">
            <label for="company">Firma</label>
            <input type="text" id="company" v-model="formData.company" required />
          </div>
          <div class="form-group">
            <label for="message">Nachricht</label>
            <textarea id="message" v-model="formData.message" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-button">Anfrage senden</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(#0a66c3, #002a9a);
  color: white;
}

.banner-container {
  width: 100%;
  max-height: 300px;
  overflow: hidden;
}

.contact-container {
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 40px;
}

.information-section {
  flex: 1;
  background-color: #0a66c3;
  padding: 20px;
  margin-right: 20px;
  border-radius: 8px;
}

.information-section h2,
.information-section h3 {
  margin: 10px 0;
}

.bewerbung-form-container {
  flex: 1;
  padding: 20px;
}

.form-title {
  margin-bottom: 30px;
}

.contact-form {
  max-width: 600px;
  width: 100%;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.form-group {
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
  display: block;
  color: #333;
}

input,
select,
textarea {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #f9f9f9;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

input:focus,
select:focus,
textarea:focus {
  border-color: #0a66c3;
  outline: none;
}

.submit-button {
  background-color: #0a66c3;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #00599e;
}

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    padding: 20px;
  }

  .information-section {
    margin-right: 0;
    margin-bottom: 20px;
  }
}
</style>
