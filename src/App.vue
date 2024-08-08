<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import useCookieConsent from "@/hooks/useCookieConsent";

const { dialogVisible, acceptCookies, declineCookies, dialogWidth } =
  useCookieConsent();
</script>

<template>
  <div class="app-container">
    <Header />
    <RouterView class="main-content" />
    <Footer />
    <ElDialog
      v-model="dialogVisible"
      title="Cookie 使用通知"
      :width="dialogWidth"
      :close-on-click-modal="false"
      class="custom-dialog"
    >
      <span class="dialog-content"
        >我們使用 Cookie 來提升您的體驗，您同意嗎？</span
      >
      <template #footer>
        <ElButton class="custom-button" @click="declineCookies">拒絕</ElButton>
        <ElButton class="custom-button" type="primary" @click="acceptCookies"
          >允許</ElButton
        >
      </template>
    </ElDialog>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url("/images/internet-7119394_1280.jpg"); /* 引用 public 資料夾中的背景圖片 */
  background-size: cover; /* 覆蓋整個容器 */
  background-position: center top; /* 圖片從頂部開始 */
  background-repeat: no-repeat; /* 不重複 */
  background-attachment: fixed; /* 背景圖片固定 */
  background-color: rgba(255, 255, 255, 0.9); /* 半透明白色背景 */
  background-blend-mode: lighten; /* 混合模式 */
  margin: 0;
  padding: 0;
}

.main-content {
  flex: 1;
}

.dialog-content {
  font-family: "Comic Sans MS", cursive, sans-serif;
}

.custom-button {
  width: 60px;
  font-size: 16px;
  font-family: "Comic Sans MS", cursive, sans-serif;
}
</style>
