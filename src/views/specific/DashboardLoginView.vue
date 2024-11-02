<template>
  <div class="login-view">
    <div class="login-card">
      <img src="/assets/images/core/schmidlogo.webp" alt="">
      <h2>Dashboard Login</h2>
      <form class="login-form" @submit.prevent="login">
        <input v-model="username" class="login-input" type="text" placeholder="Username" />
        <input v-model="password" class="login-input" type="password" placeholder="Passwort" />
        <button class="btn btn-primary" type="submit">Login</button>
      </form>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import axios from 'axios';
import { userStore } from "@/store/userStore";
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const error = ref('');
    const router = useRouter();
    const store = userStore();

    const login = async () => {
      try {
        const loginResponse = await axios.post('http://164.92.187.212:8080/api/auth/login', {
          username: username.value,
          password: password.value
        });
        const token = loginResponse.data.token;
        if (!token) throw new Error("Kein Token erhalten");
        localStorage.setItem('dashboard', token);
        console.log('Token gespeichert:', token);
        console.log('Token nach dem Speichern:', localStorage.getItem('dashboard'));
        await store.fetchUserData(username.value);

        await router.push('/dashboard');
      } catch (err) {
        console.error("Login-Fehler:", err);
        error.value = 'Falsches Passwort oder Benutzername. Bitte erneut versuchen.';
      }
    };

    return {
      username,
      password,
      error,
      login
    };
  }
};
</script>

<style scoped>
.login-view {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/assets/images/core/aussenansicht-schmid-gmbh.jpg");
  background-size: cover;
}
.login-card {
  background: radial-gradient(#1a73e8, #002a9a);
  color: white;
  padding: 60px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  gap: 36px;
  border-radius: 20px;
}
.login-input {
  border-radius: 15px;
  border: #00a5ff;
  height: 42px;
  padding: 0 15px;
  background: white;
}
.btn-primary {
  border-radius: 15px;
}
.login-form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
}
</style>
