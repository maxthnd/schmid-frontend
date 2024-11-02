<script setup lang="ts">
import { ref } from 'vue';

const jobs = ref([
  { id: 1, title: 'Softwareentwickler', type: 'Vollzeit', location: 'Stein a.K.' },
  { id: 2, title: 'Marketing Manager', type: 'Teilzeit', location: 'Stein a.K.' },
  { id: 2, title: 'Marketing Manager', type: 'Teilzeit', location: 'Stein a.K.' },
  { id: 2, title: 'Marketing Manager', type: 'Teilzeit', location: 'Stein a.K.' },
  { id: 2, title: 'Marketing Manager', type: 'Teilzeit', location: 'Stein a.K.' },
  { id: 2, title: 'Marketing Manager', type: 'Teilzeit', location: 'Stein a.K.' },
  { id: 2, title: 'Marketing Manager', type: 'Teilzeit', location: 'Stein a.K.' },
  { id: 3, title: 'Auszubildender', type: 'Ausbildung', location: 'Stein a.K.' },
]);

const editJob = (jobId: number) => {
  console.log("Job bearbeiten:", jobId);
};

const deleteJob = (jobId: number) => {
  jobs.value = jobs.value.filter(job => job.id !== jobId);
};
</script>

<template>
  <div class="dashboard-jobboard">
    <div class="jobboard-header">
      <div class="jobboard-title">
        <h4>Aktuelle Stellenanzeigen</h4>
      </div>
      <div class="jobboard-elements">
        <button type="button" class="btn btn-success">Hinzufügen</button>
        <button type="button" class="btn btn-danger">Alle Entfernen</button>
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
          <td>{{ job.type }}</td>
          <td>{{ job.location }}</td>
          <td class="job-elements">
            <button class="btn btn-primary btn-sm" @click="editJob(job.id)">Bearbeiten</button>
            <button class="btn btn-danger btn-sm" @click="deleteJob(job.id)">Löschen</button>
          </td>
        </tr>
        </tbody>
      </table>
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
</style>
