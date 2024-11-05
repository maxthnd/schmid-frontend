<script setup lang="ts">
import { onMounted, ref } from 'vue';
import JobUpdatePopup from "@/components/cp-components/JobUpdatePopup.vue";
import { Job } from "@/job/Job";
import { fetchJobs, deleteJob, deleteAllJobs } from "../../job/JobService";

const jobs = ref<Job[]>([]);
const isPopupVisible = ref(false);
const selectedJob = ref<Job | null>(null);
const isModalVisible = ref(false);

const openJobPopup = (job: Job) => {
  selectedJob.value = job;
  isPopupVisible.value = true;
};

const closePopup = () => {
  isPopupVisible.value = false;
  selectedJob.value = null;
};

onMounted(async () => {
  jobs.value = await fetchJobs();
});

const deleteSelectedJob = async (jobId: number) => { // Name geändert, um Konflikte zu vermeiden
  await deleteJob(jobId); // deleteJob von JobService aufrufen
  isModalVisible.value = true;
  setTimeout(() => {
    isModalVisible.value = false;
  }, 5000);
  jobs.value = await fetchJobs();
};

const deleteAllJobsHandler = async () => { // Name geändert, um Konflikte zu vermeiden
  await deleteAllJobs(); // deleteAllJobs von JobService aufrufen
  isModalVisible.value = true;
  setTimeout(() => {
    isModalVisible.value = false;
  }, 5000);
  jobs.value = await fetchJobs();
};

// addJob-Handler zum Hinzufügen eines neuen Jobs, wenn das Popup geschlossen wird
const addJob = async (job: Job) => {
  jobs.value.push(job);
};

</script>

<template>
  <div class="dashboard-jobboard">
    <div class="jobboard-header">
      <div class="jobboard-title">
        <h4>Aktuelle Stellenanzeigen</h4>
      </div>
      <div class="jobboard-elements">
        <button type="button" class="btn btn-success" @click="openJobPopup({ title: '', jobType: '', description: '', location: '', expectations: [], work: [], imageData: null })">Hinzufügen</button>
        <button type="button" class="btn btn-danger" @click="deleteAllJobsHandler">Alle Entfernen</button>
      </div>
    </div>
    <div class="jobboard-body">
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th>Stelle</th>
          <th>Art der Beschäftigung</th>
          <th>Ort</th>
          <th>Aktionen</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="job in jobs" :key="job.id">
          <td>{{ job.title }}</td>
          <td>{{ job.jobType }}</td>
          <td>{{ job.location }}</td>
          <td class="job-elements">
            <button class="btn btn-primary btn-sm" @click="openJobPopup(job)">Bearbeiten</button>
            <button class="btn btn-danger btn-sm" @click="deleteSelectedJob(job.id)">Löschen</button>
          </td>
        </tr>
        </tbody>
      </table>
      <div v-if="isModalVisible" class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <p>Job wurde erfolgreich gelöscht.</p>
          </div>
        </div>
      </div>
      <JobUpdatePopup
          v-if="isPopupVisible"
          :job="selectedJob || { title: '', jobType: '', description: '', location: '', expectations: [], work: [], imageData: null }"
          :isVisible="isPopupVisible"
          @close="closePopup"
          @save="addJob"
      />
    </div>
  </div>
</template>

<template>
  <div class="dashboard-jobboard">
    <div class="jobboard-header">
      <div class="jobboard-title">
        <h4>Aktuelle Stellenanzeigen</h4>
      </div>
      <div class="jobboard-elements">
        <button type="button" class="btn btn-success" @click="">Hinzufügen</button>
        <button type="button" class="btn btn-danger" @click="deleteAllJobs">Alle Entfernen</button>
      </div>
    </div>
    <div class="jobboard-body">
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th>Stelle</th>
          <th>Art der Beschäftigung</th>
          <th>Ort</th>
          <th>Aktionen</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="job in jobs" :key="job.id">
          <td>{{ job.title }}</td>
          <td>{{ job.jobType }}</td>
          <td>{{ job.location }}</td>
          <td class="job-elements">
            <button class="btn btn-primary btn-sm" @click="openJobPopup(job)">Bearbeiten</button>
            <button class="btn btn-danger btn-sm" @click="deleteJob(job.id)">Löschen</button>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <p>Job wurde erfolgreich gelöscht.</p>
          </div>
        </div>
      </div>
      <JobUpdatePopup
          v-if="isPopupVisible"
          :job="selectedJob || { title: '', image: '' }"
          :isVisible="isPopupVisible"
          @close="closePopup"
      />
    </div>
  </div>
</template>

<style scoped>
.dashboard-jobboard {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
  border-radius: 15px;
  background-color: white;
  padding: 30px;
}

.jobboard-elements {
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100%;
  align-self: end;
  gap: 20px;
}

.jobboard-title {
  align-self: flex-start;
  width: 100%;
}

.jobboard-header {
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 15px;
}

table {
  margin-top: 20px;
}
.job-elements{
  display: flex;
  flex-direction: row;
  gap: 15px;
  flex-wrap: wrap;
}
.success-gif {
  width: 50px;
  height: 50px;
  display: block;
  margin: 0 auto 10px;
}
</style>
