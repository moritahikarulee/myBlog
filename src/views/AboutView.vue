<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-12 mt-3 mb-3">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>認識我</span>
            </div>
          </template>
          <img src="/images/studyHeadshot.jpg" />
          <template #footer>
            <p class="footerP">以下是我的個人資料連結跟作品連結</p>
            <PortfolioLink />
          </template>
        </el-card>
      </div>
      <div class="col-md-6 col-12 mt-3">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>認識網站</span>
            </div>
          </template>
          <p class="content">使用技術</p>
          <div class="svg-container">
            <img
              class="svg-img"
              v-for="item in technologyImgs"
              :key="item.id"
              :src="item.src"
              :alt="item.alt"
              :title="item.title"
            />
          </div>
          <template #footer>
            <p class="footer2p">
              這個網站是我在練習時建立的，客戶端使用 Vite 和 Vue3，服務器端使用
              Node.js 和 Express，<!--
  -->這網站建立的目的是展示我的練習成果和學習筆記。目前網站還在持續改進中，<!--
  -->有甚麼問題與指教可以聯絡我，之後還會陸續增加更多小功能和學習筆記，敬請期待！
            </p>
          </template>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PortfolioLink from "@/components/PortfolioLink.vue";
import { reactive } from "vue";

const technologyImgs = reactive([
  {
    id: "asd001",
    src: "/src/assets/vue-9-logo-svgrepo-com.svg",
    alt: "vue3",
    title: "vue3",
  },
  {
    id: "asd002",
    src: "/src/assets/vite-svgrepo-com.svg",
    alt: "vite",
    title: "vite",
  },
  {
    id: "asd003",
    src: "/src/assets/typescript-svgrepo-com.svg",
    alt: "typescript",
    title: "typescript",
  },
  {
    id: "asd004",
    src: "/src/assets/html-5-svgrepo-com.svg",
    alt: "html5",
    title: "html5",
  },
  {
    id: "asd005",
    src: "/src/assets/element-plus-svgrepo-com.svg",
    alt: "element-plus",
    title: "element-plus",
  },
  {
    id: "asd006",
    src: "/src/assets/css-3-svgrepo-com.svg",
    alt: "css3",
    title: "css3",
  },
  {
    id: "asd007",
    src: "/src/assets/bootstrap-svgrepo-com.svg",
    alt: "bootstrap",
    title: "bootstrap",
  },
  {
    id: "asd008",
    src: "/src/assets/git-icon-svgrepo-com.svg",
    alt: "git",
    title: "git",
  },
  {
    id: "asd009",
    src: "/src/assets/node-js-svgrepo-com.svg",
    alt: "nodejs",
    title: "nodejs",
  },
]);
</script>

<style scoped>
.container {
  margin: 20px auto;
}

.row {
  margin-right: 0;
  margin-left: 0;
}

.card-header span {
  font-size: 1.5rem;
  font-weight: bold;
  color: #3498db; /* 使用一種更鮮明的藍色 */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 使用更輕微且簡單的陰影 */
}

img {
  display: block;
  margin: auto;
  width: 340px;
}

.svg-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.svg-img {
  width: 60px;
  transition: transform 0.3s;
}

.svg-img:hover {
  transform: scale(1.1);
}

.content {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  font-family: "Pacifico", cursive; /* 使用可愛的字體 */
  color: #585858; /* 較淺的黑灰色 */
}

.footerP {
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  text-align: center;
  font-family: "Pacifico", cursive; /* 使用可愛的字體 */
  color: #585858; /* 較淺的黑灰色 */
}

.footer2p {
  font-size: 18px;
  font-family: "Pacifico", cursive; /* 使用可愛的字體 */
  color: #454545; /* 較淺的黑灰色 */
  white-space: normal; /* 自動換行，避免多餘的空白 */
}
</style>
