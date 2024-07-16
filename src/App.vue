<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="app-container">
    <Header />
    <RouterView class="main-content" />
    <Footer />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

* {
  margin: 0;
  padding: 0;
}
</style>
