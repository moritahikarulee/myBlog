<template>
  <div class="container">
    <section class="section">
      <div class="section-header">
        <span>認識我</span>
        <hr class="custom-hr" />
      </div>
      <img src="/images/studyHeadshot.jpg" />
      <div class="section-footer">
        <p class="section-title">自我介紹</p>
        <p class="section-content">
          各位好，我是
          Bochen，目標是成為一名全端工程師，畢業於國立屏東大學資訊管理系，<!--
          -->最近有經過資策會密集且專業的培訓，累積了一些實戰經驗及作品，加上自己的努力學習，目前正在積極尋找新的工作機會，<!--
          -->期許自己能夠在工作中學習更多技術，並且將自己的能力發揮到極致，希望您能花一點時間查看我的作品與簡歷，萬分感謝！
        </p>
        <p class="section-title">以下是我的個人資料連結跟作品連結</p>
        <PortfolioLink />
      </div>
    </section>
    <section class="section">
      <div class="section-header">
        <span>認識網站</span>
        <hr class="custom-hr" />
      </div>
      <p class="section-title">使用技術</p>
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
      <div class="section-footer">
        <p class="section-title">網站介紹</p>
        <p class="section-content">
          這個網站是我在練習時建立的，客戶端使用 Vite 和 Vue3，服務器端使用
          Node.js 和 Express，<!--
-->這網站建立的目的是展示我的練習成果和學習筆記。目前網站還在持續改進且增加中，<!--
-->有甚麼問題與指教可以使用聯絡我，發 e-mail 到我的信箱，我會儘快查看。 <br />
          <br />
          之後還會陸續增加更多實用的小功能供大家使用，因費用問題可能會有使用上的限制，敬請見諒!<!--
-->學習筆記也慢慢準備中，會寫上我學習上一路上以來遇到的問題以及解決方式，敬請期待！
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import PortfolioLink from "@/components/PortfolioLink.vue";
import { reactive } from "vue";

interface TechnologyImg {
  id: string;
  src: string;
  alt: string;
  title: string;
}

const technologyImgs: TechnologyImg[] = reactive([
  {
    id: "asd001",
    src: "/myBlog/images/vue-9-logo-svgrepo-com.svg",
    alt: "vue3",
    title: "vue3",
  },
  {
    id: "asd002",
    src: "/myBlog/images/vite-svgrepo-com.svg",
    alt: "vite",
    title: "vite",
  },
  {
    id: "asd003",
    src: "/myBlog/images/typescript-svgrepo-com.svg",
    alt: "typescript",
    title: "typescript",
  },
  {
    id: "asd004",
    src: "/myBlog/images/html-5-svgrepo-com.svg",
    alt: "html5",
    title: "html5",
  },
  {
    id: "asd005",
    src: "/myBlog/images/element-plus-svgrepo-com.svg",
    alt: "element-plus",
    title: "element-plus",
  },
  {
    id: "asd006",
    src: "/myBlog/images/css-3-svgrepo-com.svg",
    alt: "css3",
    title: "css3",
  },
  {
    id: "asd007",
    src: "/myBlog/images/bootstrap-svgrepo-com.svg",
    alt: "bootstrap",
    title: "bootstrap",
  },
  {
    id: "asd008",
    src: "/myBlog/images/git-icon-svgrepo-com.svg",
    alt: "git",
    title: "git",
  },
  {
    id: "asd009",
    src: "/myBlog/images/node-js-svgrepo-com.svg",
    alt: "nodejs",
    title: "nodejs",
  },
  {
    id: "asd010",
    src: "/myBlog/images/express-svgrepo-com.svg",
    alt: "express",
    title: "express",
  },
  {
    id: "asd011",
    src: "/myBlog/images/github-142-svgrepo-com.svg",
    alt: "github",
    title: "github",
  },
]);
</script>

<style scoped>
.container {
  margin: 30px auto;
}

.custom-hr {
  border: none; /* 移除預設邊框 */
  border-top: 1px dashed #a9a9a9;
  margin: 25px 0;
}

.section {
  background-color: #f9f9f9;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.section-header span {
  font-size: 1.9rem;
  font-weight: bold;
  color: #3498db;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: block;
  text-align: center;
}

img {
  display: block;
  margin: auto;
  width: 300px;
}

.svg-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.svg-img {
  width: 62px;
  transition: transform 0.3s;
}

.svg-img:hover {
  transform: scale(1.1);
}

.section-title {
  font-size: 1.6rem;
  font-weight: bold;
  margin: 26px 0 19px 0;
  text-align: center;
  font-family: "Pacifico", cursive;
  color: #585858;
}

.section-content {
  font-size: 20px;
  font-family: "Pacifico", cursive;
  color: #454545;
  padding: 0 50px;
  white-space: normal; /* 自動換行，避免多餘的空白 */
}

@media screen and (max-width: 768px) {
  .section-content {
    padding: 0px;
  }
}
</style>
