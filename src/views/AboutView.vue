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
            <p class="content">自我介紹</p>
            <p class="footer2p">
              各位好，我是
              Bochen，目標是成為一名全端工程師，畢業於國立屏東大學資訊管理系，<!--
              -->最近有經過資策會密集且專業的培訓，累積了一些實戰經驗及作品，加上自己的努力學習，目前正在積極尋找新的工作機會，<!--
              -->期許自己能夠在工作中學習更多技術，並且將自己的能力發揮到極致，希望您能花一點時間查看我的作品與簡歷，萬分感謝！
            </p>
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
            <p class="content">網站介紹</p>
            <p class="footer2p">
              這個網站是我在練習時建立的，客戶端使用 Vite 和 Vue3，服務器端使用
              Node.js 和 Express，<!--
  -->這網站建立的目的是展示我的練習成果和學習筆記。目前網站還在持續改進且增加中，<!--
  -->有甚麼問題與指教可以使用聯絡我，發 e-mail 到我的信箱，我會儘快查看。 <br />
              <br />
              之後還會陸續增加更多實用的小功能供大家使用，因費用問題可能會有使用上的限制，敬請見諒!<!--
  -->學習筆記也慢慢準備中，會寫上我學習上一路上以來遇到的問題以及解決方式，敬請期待！
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

interface TechnologyImg {
  id: string;
  src: string;
  alt: string;
  title: string;
}

/*
reactive 函數會將一個普通的 JavaScript 對象轉換為一個深層響應式對象。
這意味著對象中的所有屬性（包括嵌套屬性）都會變成響應式的。由於 reactive 返回的是一個代理對象，
這個代理對象允許動態添加或刪除屬性，因此 TypeScript 無法嚴格檢查對象的結構。

ref 函數則是用來創建一個包含單一值的響應式對象。這個值可以是基本類型（如字符串、數字）或對象。
當 ref 包含一個對象時，這個對象本身並不會變成深層響應式的，只有 ref 的 .value 屬性是響應式的。
由於 ref 的這種行為，TypeScript 可以更嚴格地檢查 ref 包含的值的類型。
*/

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
  gap: 16px;
}

.svg-img {
  width: 62px;
  transition: transform 0.3s;
}

.svg-img:hover {
  transform: scale(1.1);
}

.content {
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
  font-family: "Pacifico", cursive; /* 使用可愛的字體 */
  color: #585858; /* 較淺的黑灰色 */
}

.footerP {
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
  text-align: center;
  font-family: "Pacifico", cursive; /* 使用可愛的字體 */
  color: #585858; /* 較淺的黑灰色 */
}

.footer2p {
  font-size: 20px;
  font-family: "Pacifico", cursive; /* 使用可愛的字體 */
  color: #454545; /* 較淺的黑灰色 */
  white-space: normal; /* 自動換行，避免多餘的空白 */
}
</style>
