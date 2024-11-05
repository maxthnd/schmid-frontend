<script lang="ts">
import { ref, computed, onMounted } from 'vue';
import { userStore } from '../../store/userStore';

export default {
  setup() {
    const store = userStore();
    const errorMessage = ref<string | null>(null);

    const user = computed(() => store.getUser);
    const firstName = computed(() => user.value?.firstName ?? '');
    const lastName = computed(() => user.value?.lastName ?? '');


    onMounted(() => {
      if (!user.value) {
        const dashboardToken = localStorage.getItem('dashboard');
        if (dashboardToken) {
          try {
            const payload = dashboardToken.split('.')[1];
            const decodedPayload = atob(payload);
            const tokenData = JSON.parse(decodedPayload);
            const username = tokenData.username;
            store.fetchUserData(username).catch((error: Error) => {
              errorMessage.value = 'Fehler beim Laden der Benutzerdaten.';
              console.error(error);
            });
          } catch (error) {
            errorMessage.value = 'Ungültiges Dashboard-Token.';
            console.error(error);
          }
        } else {
          errorMessage.value = 'Kein Dashboard-Token im localStorage gefunden.';
        }
      }
    });


    return {
      user,
      firstName,
      lastName,
      errorMessage
    };
  }
};
</script>

<template>
  <div class="welcome-header">
    <div class="welcome-title">
      <h1 v-if="user" class="dashboard-title">👋 Willkommen, {{ user.firstName }} {{ user.lastName }}!</h1>
      <div v-else-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <div v-else class="loading-message">Lade Benutzerdaten...</div>
    </div>
  </div>
</template>

<style scoped>
.welcome-header {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  color: white;
  width: 100%;
}
.welcome-title {
  font-weight: bold;
  font-size: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.error-message {
  color: red;
  font-size: 20px;
}
.loading-message {
  font-size: 20px;
  color: #fff;
}
</style>
