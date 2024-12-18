<template>
  <div class="popup-overlay" v-if="isVisible">
    <div class="popup-content">
      <button class="close-button" @click="closePopup">x</button>
      <h2>{{ isEditing ? "Job Bearbeiten" : "Job Erstellen" }}</h2>

      <div class="job-form">
        <div class="job-title">
          <label for="jobTitle">Job Title:</label>
          <input
              id="jobTitle"
              type="text"
              v-model="editableJob.title"
              placeholder="Job Titel"
              class="input-field"
          />
        </div>
        <div class="job-type">
          <label for="jobType">Job Type:</label>
          <input
              id="jobType"
              type="text"
              v-model="editableJob.jobType"
              placeholder="Job Typ"
              class="input-field"
          />

        </div>
        <div class="job-description">
          <label for="description">Beschreibung:</label>
          <textarea
              id="description"
              v-model="editableJob.description"
              placeholder="Beschreibung eingeben"
              class="input-field"
          ></textarea>
        </div>
        <div class="job-expectations">
          <label>Unsere Erwartungen:</label>
          <div v-for="(expectation, index) in editableJob.expectations" :key="'expectation-' + index" class="list-item">
            <input
                type="text"
                v-model="editableJob.expectations[index]"
                placeholder="Erwartung hinzufügen"
                class="input-field small"
            />
            <button @click="removeExpectation(index)">x</button>
          </div>
          <button @click="addExpectation" class="btn small">Erwartung hinzufügen</button>
        </div>
        <div class="job-doings">
          <label>Dein Alltag bei uns:</label>
          <div v-for="(work, index) in editableJob.work" :key="'work-' + index" class="list-item">
            <input
                type="text"
                v-model="editableJob.work[index]"
                placeholder="Tätigkeit hinzufügen"
                class="input-field small"
            />
            <button @click="removeWork(index)">x</button>
          </div>
          <button @click="addWork" class="btn small">Tätigkeit hinzufügen</button>
        </div>
        <label for="imageUpload">Bild hochladen:</label>
        <input type="file" id="imageUpload" @change="onImageUpload" class="input-field" />
        <img v-if="imageSrc" :src="imageSrc" alt="Job Bild" class="preview-image" />
        <button @click="saveJob" class="btn primary">{{ isEditing ? "Speichern" : "Erstellen" }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
  job: {
    type: Object,
    required: false,
    default: () => ({
      title: "",
      jobType: "",
      description: "",
      expectations: [] as string[],
      work: [] as string[],
      imageData: null as string | null,
    })
  },
  isVisible: {
    type: Boolean,
    required: true,
  }
});

const emit = defineEmits(['close', 'save']);

const editableJob = ref({ ...props.job });
const imageSrc = ref(props.job.imageData ? `data:image/png;base64,${props.job.imageData}` : null);

const isEditing = computed(() => !!props.job && !!props.job.title);

const onImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target?.files ? target.files[0] : null;

  if (file) {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const result = e.target?.result;
      if (typeof result === "string") {
        imageSrc.value = result;
        editableJob.value.imageData = imageSrc.value;
      }
    };
    reader.readAsDataURL(file);
  }
};

const addExpectation = () => editableJob.value.expectations.push("");
const removeExpectation = (index: number) => editableJob.value.expectations.splice(index, 1);
const addWork = () => editableJob.value.work.push("");
const removeWork = (index: number) => editableJob.value.work.splice(index, 1);

const saveJob = () => {
  emit('save', editableJob.value);
  closePopup();
};

const closePopup = () => emit('close');

watch(() => props.job, (newJob) => {
  editableJob.value = { ...newJob };
  imageSrc.value = newJob.imageData ? `data:image/png;base64,${newJob.imageData}` : null;
}, { immediate: true });
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
  padding: 20px;
}
.popup-content {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  color: #000;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
}
.input-field {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #f0f0f0;
}
.input-field.small {
  width: 85%;
  display: inline-block;
}
.list-item {
  display: flex;
  align-items: center;
  gap: 10px;
}
.btn {
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn.primary {
  background-color: #007bff;
  color: #fff;
}
.btn.small {
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
}
.preview-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 10px;
}
.job-form {
  flex-wrap: wrap;
}
</style>

