<template>
  <div class="myContainer">
    <div class="github-link">
      <a
        href="https://github.com/moritahikarulee"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-github"></i> GitHub
      </a>
    </div>
    <!-- 新增的 cake link -->
    <div class="cake-link">
      <a
        href="https://www.cakeresume.com/momo-chen-239617"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fas fa-birthday-cake"></i> Cakeresume
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.myContainer {
  display: flex;
  justify-content: center;
  gap: 18px;
  padding: 15px 5px;
}
.github-link a,
.cake-link a {
  color: #333; /* 設置連結顏色 */
  font-size: 17px; /* 設置圖標大小 */
  text-decoration: none; /* 移除下劃線 */
}
.github-link a:hover,
.cake-link a:hover {
  color: #6cc644; /* 鼠標懸停時的顏色 */
}
</style>
