<template>
  <div class="login-view">
    <div class="login-card">
      <img src="/assets/images/core/schmidlogo.webp" alt="">
      <h2>Entwicklermodus</h2>
      <form class="login-form" @submit.prevent="login">
        <input v-model="password" class="login-input" type="password" placeholder="Passwort eingeben" />
        <button class="btn btn-primary" type="submit">Login</button>
      </form>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

export default {
  data() {
    return {
      password: '',
      error: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/api/auth/maintenance', { password: this.password });
        const token = response.data.token;
        if (token) {
          localStorage.setItem('jwtToken', token);
          this.$router.push('/');
        } else {
          this.error = 'Token nicht empfangen.';
        }
      } catch (err) {
        this.error = 'Falsches Passwort. Bitte erneut versuchen.';
      }
    }

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
  background: radial-gradient(#0a66c3, #002a9a);
}
.login-card {
  background: white;
  color: black;
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
}
.btn-primary {
  border-radius: 15px;
}
.login-form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
}
</style>
