<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 col-12 mt-3 mb-2">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>認識我</span>
            </div>
          </template>
          <img src="/images/studyHeadshot.jpg" />
          <template #footer>Footer content</template>
        </el-card>
      </div>
      <div class="col-md-7 col-12 mt-3">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>Card name</span>
            </div>
          </template>
          <p v-for="o in 4" :key="o" class="text item">
            {{ "List item " + o }}
          </p>
          <template #footer>Footer content</template>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  margin: 10px auto;
}

.card-header span {
  font-size: 1.3rem;
  font-weight: bold;
  color: #3498db; /* 使用一種更鮮明的藍色 */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 使用更輕微且簡單的陰影 */
}

img {
  display: block;
  margin: auto;
  width: 340px;
}
</style>
