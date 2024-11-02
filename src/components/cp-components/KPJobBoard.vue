<script setup lang="ts">
import { ref, onMounted } from 'vue';
import JobPopup from "@/components/cp-components/JobPopup.vue";
import { fetchJobs } from "@/job/JobService";
import { Job } from "@/job/Job";
const jobs = ref<Job[]>([]);

const isPopupVisible = ref(false);
const selectedJob = ref<Job | null>(null);

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
</script>

<template>
  <div class="dashboard-jobboard">
    <div class="jobboard-header">
      <div class="jobboard-title">
        <h4>Unsere offenen Stellenanzeigen</h4>
      </div>
      <div class="jobboard-elements">
        <!--FILTER OPTIONS FEATURE OUT-->
      </div>
    </div>
    <div class="jobboard-body">
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th>Stelle</th>
          <th>Art der Beschäftigung</th>
          <th>Ort</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="job in jobs" :key="job.id" @click="openJobPopup(job)">
          <td>{{ job.title }}</td>
          <td>{{ job.jobType }}</td>
          <td>{{ job.location }}</td>
        </tr>
        </tbody>
      </table>
      <JobPopup
          v-if="isPopupVisible"
          :job="selectedJob"
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
  color: black;
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

.job-elements {
  display: flex;
  flex-direction: row;
  gap: 15px;
  flex-wrap: wrap;
}
</style>
