<script setup lang="ts">
import { onMounted } from "vue";
import { onUnmounted } from "vue";
import JobBoard from "../../components/dashboard/JobBoard.vue";
import {useRouter} from "vue-router";
import axios from "axios";
import WelcomeHeader from "../../components/dashboard/WelcomeHeader.vue";

const router = useRouter();

const checkToken = async () => {
  const token = localStorage.getItem("dashboard");
  if(!token){
    console.log("Der Token ist nicht valid! - DashboardView")
    await router.push("/login");
  } else{
    try{
      const response = await axios.get('/api/auth/validate-token', {headers: {Authorization: `Bearer ${token}`}});
      console.log(response.data);
      if(!response.data.valid){
        localStorage.removeItem('dashboard');
        await router.push("/login")
      }
    } catch(error){
      localStorage.removeItem('dashboard');
      await router.push("/login")
    }
  }
}

</script>

<template>
  <div class="dashboard-view">
    <div class="dashboard-content">
      <div class="dashboard-header">
        <WelcomeHeader></WelcomeHeader>
      </div>
      <div class="dashboard-body">
        <JobBoard></JobBoard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-content{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 100px;

}
.dashboard-header {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
}
.dashboard-body{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
.dashboard-view {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(#0a66c3, #002a9a);
}
</style>