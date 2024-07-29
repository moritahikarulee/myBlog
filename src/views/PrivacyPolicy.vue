<template>
  <div class="container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item to="/">Home</el-breadcrumb-item>
      <el-breadcrumb-item>使用條款</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>使用條款</h1>
    <p>
      歡迎您光臨「Bochen's
      Blog」(以下簡稱本網站)，為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：
    </p>
    <h2>隱私權保護政策的適用範圍</h2>
    <p>
      隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。
    </p>
    <h2>資料的蒐集與使用方式</h2>
    <p>
      除非取得您的同意或其他法令之特別規定，本網站絕不會將您的個人資料揭露予第三人或使用於蒐集目的以外之其他用途。
    </p>
    <p>
      但本網站將根據執法單位之要求或為公共安全之目的提供個人資料。在此情況下之任何披露，本網站均不承擔任何責任。
    </p>
    <h2>網站對外的相關連結</h2>
    <p>
      本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。
    </p>
    <h2>localStorage之使用</h2>
    <p>
      為了提供您最佳的服務，本網站可能會在您的電腦中放置並取用我們的localStorage。
    </p>
    <h2>隱私權保護政策之修正</h2>
    <p>
      本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。
    </p>
  </div>
</template>

<script setup lang="ts">
import { ElBreadcrumb, ElBreadcrumbItem } from "element-plus";
</script>

<style scoped>
.container {
  padding: 30px 0;
  width: 85%;
  max-width: 1200px;
  margin: auto;
  font-family: "Mukta", sans-serif;
}

.el-breadcrumb {
  font-size: 1.2em;
  margin-bottom: 25px;
}

h1 {
  font-size: 1.8em;
  color: #343a40;
  margin-bottom: 18px;
}

h2 {
  font-size: 1.4em;
  color: #343a40;
  margin-top: 30px;
  margin-bottom: 15px;
}

p {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 15px;
}
</style>
