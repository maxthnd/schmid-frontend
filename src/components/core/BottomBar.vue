<script setup lang="ts">

</script>

<template>
  <div class="bottom-bar">
    <ul class="navbar">
      <li><a href="/impressum">Impressum</a></li>
      <li><a href="/datenschutz">Datenschutz</a></li>
      <li><a href="/contact">Kontakt</a></li>
    </ul>
  </div>
</template>

<style scoped>
.bottom-bar {
  background: #222222;
  display: flex;
  height: 54px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: -1000;
  align-content: center;
  text-align: center;
}

.sm-image{
  height: 24px;
  width: 24px;
}

.bottom-bar ul {
  list-style: none;
  display: flex;
  margin: 0 auto;
  padding: 0;
}

.bottom-bar ul li {
  margin: 0 10px;
}

.bottom-bar ul li a {
  text-decoration: none;
  font-size: 12px;
  color: white;
  transition: color 0.3s;
}
</style>