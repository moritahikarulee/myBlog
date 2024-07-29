<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-3 mb-3">
        <el-card>
          <template #header>
            <el-alert
              title="目前該頁面內容製作並審核中，如有錯誤，請以官方文檔為主，多謝海涵。"
              type="warning"
              show-icon
              class="mb-4"
            />
            <div class="card-header">
              <span>部落格文章</span>
            </div>
          </template>
          <div class="button-group">
            <el-button
              class="custom-button"
              type="primary"
              @click="currentArticle = Article1"
              >Vue3</el-button
            >
            <el-button
              class="custom-button"
              type="primary"
              @click="currentArticle = Article2"
              >Javascript</el-button
            >
          </div>
          <component :is="currentArticle"></component>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Article1 from "@/components/note/Article1.vue";
import Article2 from "@/components/note/Article2.vue";

const currentArticle = ref(Article1);
</script>

<style scoped>
.container {
  margin: 20px auto;
}

span {
  font-size: 23px;
  font-weight: bold;
  font-family: "Nunito", sans-serif;
  color: #343a40;
}

.button-group {
  display: flex;
  gap: 1px;
}

.custom-button {
  background-color: #f0f0f0;
  color: #333;
  padding: 8px 12px;
  font-size: 18px;
  font-weight: bold;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.custom-button:hover {
  background-color: #e0e0e0;
  color: #000;
}
</style>
