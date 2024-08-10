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
    title: "三日內天氣預報",
    url: "/myBlog/images/products-01.png",
  },
  {
    id: 2,
    title: "常用貨幣兌換器",
    url: "/myBlog/images/products-02.png",
  },
  {
    id: 3,
    title: "BMI 計算器",
    url: "/myBlog/images/products-03.png",
  },
  {
    id: 4,
    title: "代辦事項清單",
    url: "/myBlog/images/products-04.png",
  },
  {
    id: 5,
    title: "猜數字遊戲",
    url: "/myBlog/images/products-05.png",
  },
  {
    id: 6,
    title: "取得 API 圖片",
    url: "/myBlog/images/products-06.png",
  },
  {
    id: 7,
    title: "各縣市歷年人口統計",
    url: "/myBlog/images/products-07.png",
  },
  {
    id: 8,
    title: "獲取土味情話",
    url: "/myBlog/images/products-08.png",
  },
  {
    id: 9,
    title: "餐點選擇器",
    url: "/myBlog/images/products-09.png",
  },
]);

const navigateToRoute = (cardId: number) => {
  switch (cardId) {
    case 1:
      router.push("/products/weatherForecast");
      break;
    case 2:
      router.push("/products/exchangeRate");
      break;
    case 3:
      router.push("/products/bmi");
      break;
    case 4:
      router.push("/products/todoList");
      break;
    case 5:
      router.push("/products/guessNumber");
      break;
    case 6:
      router.push("/products/getApiPicture");
      break;
    case 7:
      router.push("/products/yearPopulation");
      break;
    case 8:
      router.push("/products/getLoveTalk");
      break;
    case 9:
      router.push("/products/mealSelector");
      break;
    default:
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
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #ffffff;
}

.clickable-card:hover {
  transform: translateY(-5px);
  box-shadow: 1px 5px 15px 1px rgba(173, 216, 230, 0.6);
}

.card-title {
  color: #3498db;
  font-weight: bold;
  font-size: 19px;
  text-shadow: 1px 1px 1px rgba(92, 91, 91, 0.1);
  margin-bottom: 10px; /* 增加標題下方的間距 */
}

.bread {
  font-size: 17px;
  margin-bottom: 25px;
}

.el-card img {
  height: 270px;
  object-fit: cover;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

@media (min-width: 992px) {
  .el-card img {
    height: 205px;
    object-fit: cover;
  }
}
</style>
