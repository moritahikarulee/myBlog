<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-3 mb-3">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>部落格文章</span>
            </div>
          </template>
          <div>
            <button @click="currentArticle = Article1">文章 1</button>
            <button @click="currentArticle = Article2">文章 2</button>
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
</style>
