<template>
  <div class="container-fluid myNav">
    <h3 class="mt-1">Bochen's Blog</h3>
    <button class="menu-icon" @click="toggleMobileMenu" v-show="isMobile">
      ☰
    </button>
    <div class="NavRight" v-show="!isMobile">
      <router-link to="/" v-if="!isHomePage">
        <div class="icon-text-container">
          <el-icon class="my-el-icon">
            <HomeFilled />
          </el-icon>
          <span>回主頁</span>
        </div></router-link
      >
      <router-link to="/about">
        <div class="icon-text-container">
          <el-icon class="my-el-icon">
            <UserFilled />
          </el-icon>
          <span>關於我</span>
        </div></router-link
      >
      <router-link to="/products">
        <div class="icon-text-container">
          <el-icon class="my-el-icon">
            <Files />
          </el-icon>
          <span>小功能</span>
        </div></router-link
      >
      <router-link to="/note">
        <div class="icon-text-container">
          <el-icon class="my-el-icon">
            <Notebook />
          </el-icon>
          <span>記事本</span>
        </div>
      </router-link>
      <router-link to="/contact">
        <div class="icon-text-container">
          <el-icon class="my-el-icon">
            <Comment />
          </el-icon>
          <span>聯絡我</span>
        </div>
      </router-link>
    </div>
  </div>
  <div class="mobileNav" :class="{ show: isMobileMenuOpen }">
    <router-link to="/" v-if="!isHomePage">
      <div class="mobile-icon-text-container">
        <el-icon class="my-el-icon">
          <HomeFilled />
        </el-icon>
        <span>回主頁</span>
      </div></router-link
    >
    <router-link to="/about">
      <div class="mobile-icon-text-container">
        <el-icon class="my-el-icon">
          <UserFilled />
        </el-icon>
        <span>關於我</span>
      </div></router-link
    >
    <router-link to="/products">
      <div class="mobile-icon-text-container">
        <el-icon class="my-el-icon">
          <Files />
        </el-icon>
        <span>小功能</span>
      </div></router-link
    >
    <router-link to="/note">
      <div class="mobile-icon-text-container">
        <el-icon class="my-el-icon">
          <Notebook />
        </el-icon>
        <span>記事本</span>
      </div>
    </router-link>
    <router-link to="/contact">
      <div class="mobile-icon-text-container">
        <el-icon class="my-el-icon">
          <Comment />
        </el-icon>

        <span>聯絡我</span>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import {
  Notebook,
  Comment,
  HomeFilled,
  UserFilled,
  Files,
} from "@element-plus/icons-vue";

const route = useRoute();
const isMobile = ref(window.innerWidth < 768);
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const isHomePage = computed(() => route.path === "/");

window.addEventListener("resize", () => {
  isMobile.value = window.innerWidth < 768;
  if (!isMobile.value) {
    isMobileMenuOpen.value = false; // 當視窗尺寸回到大尺寸時自動關閉移動菜單
  }
});
</script>

<style scoped>
.myNav {
  background-color: #501f1f;
  color: #333333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.myNav h3 {
  font-size: 22px;
  font-weight: 600;
  font-family: "Nunito", sans-serif;
  color: #73b7ff;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.myNav h3:hover {
  color: #0056b3;
}

.myNav .NavRight {
  display: flex;
  gap: 30px;
}

.myNav .NavRight a {
  font-size: 17px;
  text-decoration: none;
  font-weight: 600;
  font-family: "Nunito", sans-serif;
  color: #dadada;
  transition: color 0.3s ease;
}

.myNav .NavRight a:hover {
  color: #3094ff;
}

.icon-text-container {
  display: flex;
  align-items: center;
}

.mobile-icon-text-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-icon-text-container .my-el-icon {
  font-size: 18px;
  margin: -2px 5px 0px 0px;
}

.my-el-icon {
  font-size: 18px;
  margin-right: 2px;
  /* 圖標和文字之間的間距 */
}

.menu-icon {
  display: none;
  color: #d5d5d5;
  cursor: pointer;
  border: 2px solid #ccc;
  background-color: transparent;
  font-size: 20px;
  border-radius: 8px;
  padding: 2px 10px;
  transition: background-color 0.5s ease, border-color 0.5s ease,
    border-width 0.5s ease;
  /* 添加過渡效果 */
  /* transition 屬性用於在指定時間內平滑地改變屬性值。這裡設定背景色、邊框顏色和邊框寬度在 0.3 秒內變化，變化方式為 'ease'（先慢後快再慢） */
}

.menu-icon:hover {
  border-color: #517de3;
}

.mobileNav {
  transition: opacity 0.5s ease, visibility 0s 0.5s, max-height 0.5s ease;
  /* 定義過渡效果，使 opacity 和 max-height 在 0.5 秒內平滑變化，visibility 延遲 0.5 秒變化，以實現平滑顯示和隱藏 */
  opacity: 0;
  /* 初始透明度設為 0，使元素完全透明 */
  visibility: hidden;
  /* 初始可見性設為隱藏，使元素不可見且不佔用空間，但在過渡結束後才應用，以允許透明度變化 */
  max-height: 0;
  /* 初始最大高度設為 0，確保在隱藏時元素不佔用空間 */
  overflow: hidden;
  /* 設置溢出內容為隱藏，防止子元素在元素框之外顯示 */
  display: flex;
  /* 將元素顯示為彈性盒子 */
  flex-direction: column;
  /* 指定主軸方向為垂直方向，即子元素將垂直排列 */
}

.mobileNav.show {
  opacity: 1;
  visibility: visible;
  max-height: 500px;
  /* 設定一個足夠大的最大高度，以容納所有內容 */
  transition: opacity 0.5s ease, visibility 0s, max-height 0.5s ease;
}

.mobileNav a {
  padding: 8px;
  border-bottom: 1px solid #f1f1f1;
  font-size: 17px;
  text-decoration: none;
  font-weight: 600;
  font-family: "Nunito", sans-serif;
  color: #555;
  transition: color 0.3s ease, background-color 0.3s ease;
  text-align: center;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.mobileNav a:hover {
  background-color: #e9ecef;
}

@media (max-width: 768px) {
  .NavRight {
    display: none;
  }

  .menu-icon {
    display: block;
  }
}
</style>
