<template>
  <div class="container">
    <el-breadcrumb :separator-icon="ArrowRight" class="bread">
      <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/products' }"
        >products</el-breadcrumb-item
      >
    </el-breadcrumb>
    <div class="row">
      <div
        class="col-12 col-md-4 col-lg-3 mb-4"
        v-for="item in pictures"
        :key="item.id"
      >
        <!-- 使用箭頭函數傳遞不同的參數 -->
        <el-card @click="() => navigateToRoute(item.id)" class="clickable-card">
          <template #header>
            <span class="card-title">{{ item.title }}</span>
          </template>
          <img :src="item.url" style="width: 100%" />
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { reactive } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";

const router = useRouter();
const pictures = reactive([
  {
    id: 1,
    title: "取得 API 圖片",
    url: "/images/products-01.png",
  },
  {
    id: 2,
    title: "獲取土味情話",
    url: "/images/products-02.png",
  },
  {
    id: 3,
    title: "BMI 計算器",
    url: "/images/products-03.png",
  },
  {
    id: 4,
    title: "代辦事項清單",
    url: "/images/products-04.png",
  },
  {
    id: 5,
    title: "Delicious pizza",
    url: "/images/products-05.png",
  },
  {
    id: 6,
    title: "Tasty hot dog",
    url: "/images/products-06.png",
  },
  {
    id: 7,
    title: "Yummy hamburger",
    url: "/images/products-07.png",
  },
  {
    id: 8,
    title: "Delicious pizza",
    url: "/images/products-08.png",
  },
]);

const navigateToRoute = (cardId: number) => {
  switch (cardId) {
    case 1:
      router.push("/products/getApiPicture");
      break;
    case 2:
      router.push("/products/getLoveTalk");
      break;
    case 3:
      router.push("/products/bmi");
      break;
    case 4:
      router.push("/products/todoList");
      break;
    default:
      router.push("/route4");
  }
};
</script>

<style scoped>
.container {
  padding: 20px 0;
  width: 88%;
  max-width: 1200px;
  margin: 10px auto;
}

.clickable-card {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.clickable-card:hover {
  transform: translateY(-5px);
  box-shadow: 1px 5px 10px 1px rgba(173, 216, 230, 0.6);
  /* 淺藍色陰影 */
}

.card-title {
  color: #3498db;
  /* 藍色 */
  font-weight: bold;
  font-size: 17px;
  text-shadow: 1px 1px 1px rgba(92, 91, 91, 0.1);
}

.bread {
  font-size: 17px;
  margin-bottom: 25px;
}

.el-card img {
  height: 100%s;
}
</style>
