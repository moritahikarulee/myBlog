<template>
  <div>
    <nav class="footer-nav">
      <router-link to="/privacy-policy">隱私條款</router-link>
      <router-link to="/disclaimer">免責聲明</router-link>
    </nav>
    <div class="footer">
      <p>&copy; 2024 Bochen's Blog. All Rights Reserved.</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer-nav {
  background-color: #f8f9fa;
  color: #343a40;
  text-align: center;
  padding: 10px 0;
  font-family: "Nunito", sans-serif;
}

.footer-nav a {
  font-weight: bold;
  color: #50a2fa;
  margin: 0 10px;
  text-decoration: none;
}

.footer-nav a:hover {
  color: #2673c6;
  text-decoration: underline;
}

.footer {
  background-color: #343a40;
  color: #f8f9fa;
  text-align: center;
  padding: 12px 0;
  font-family: "Nunito", sans-serif;
}

.footer p {
  margin: 0;
  font-size: 16px;
}
</style>
