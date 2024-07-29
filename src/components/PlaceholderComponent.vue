<template>
  <div class="container">
    <div class="message">此頁面正待開發中</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.message {
  font-size: 2rem;
  color: #333;
  animation: fadeInOut 2s infinite;
}

@keyframes fadeInOut {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
