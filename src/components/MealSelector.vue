<template>
  <div class="meal-selector">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3 class="h3-title">早午晚餐選擇器</h3>
        <p>
          因為很多人吃飯有選擇障礙，就花了一點點時間做了這個選擇器，希望解決各位的選擇困難症
        </p>
      </div>
      <div class="button-group">
        <el-button type="primary" @click="selectMeal('breakfast')"
          >選擇早餐</el-button
        >
        <el-button type="primary" @click="selectMeal('lunch')"
          >選擇午餐</el-button
        >
        <el-button type="primary" @click="selectMeal('dinner')"
          >選擇晚餐</el-button
        >
      </div>
      <div v-if="selectedMeal" class="result">
        <p>你應該吃: {{ selectedMeal }}</p>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";

const meals = {
  breakfast: [
    "煎餅",
    "豆漿",
    "油條",
    "麥片",
    "吐司",
    "蛋餅",
    "漢堡",
    "三明治",
    "燒餅",
    "飯糰",
    "鹹豆漿",
    "饅頭",
    "包子",
    "蔥抓餅",
    "蘿蔔糕",
    "米漿",
    "燒餅油條",
    "皮蛋瘦肉粥",
    "鹹粥",
    "甜粥",
    "豆花",
    "鹹蛋",
    "茶葉蛋",
    "鹹魚",
  ],
  lunch: [
    "便當",
    "麵條",
    "炒飯",
    "沙拉",
    "漢堡",
    "牛肉麵",
    "義大利麵",
    "壽司",
    "滷肉飯",
    "雞排飯",
    "排骨飯",
    "雞肉飯",
    "肉燥飯",
    "蚵仔麵線",
    "滷味",
    "鍋貼",
    "水餃",
    "牛排",
    "燒臘飯",
    "咖哩飯",
    "鐵板麵",
    "涼麵",
    "雞腿飯",
    "鴨肉飯",
    "雞肉飯",
    "鵝肉飯",
    "魯肉飯",
    "肉羹飯",
    "排骨酥飯",
    "雞絲麵",
    "乾麵",
    "炸醬麵",
  ],
  dinner: [
    "牛排",
    "壽司",
    "火鍋",
    "披薩",
    "燉飯",
    "鹽酥雞",
    "蚵仔煎",
    "臭豆腐",
    "滷味",
    "炒麵",
    "炒米粉",
    "燒烤",
    "麻辣鍋",
    "羊肉爐",
    "薑母鴨",
    "砂鍋魚頭",
    "燒酒雞",
    "三杯雞",
    "紅燒牛肉麵",
    "豬腳飯",
    "鱔魚意麵",
    "擔仔麵",
    "肉圓",
    "米粉湯",
    "蚵仔煎",
    "鹽酥雞",
    "滷味",
    "鹽水雞",
    "雞排",
    "炸雞",
    "炸蝦",
    "炸魚",
  ],
};

const selectedMeal = ref<string | null>(null);

const selectMeal = (mealType: "breakfast" | "lunch" | "dinner") => {
  const mealOptions = meals[mealType];
  const randomIndex = Math.floor(Math.random() * mealOptions.length);
  selectedMeal.value = mealOptions[randomIndex];
  ElMessage({
    message: `你應該吃: ${selectedMeal.value}`,
    type: "success",
  });
};
</script>

<style scoped>
.meal-selector {
  max-width: 400px;
  margin: 50px auto;
  padding: 5px;
}

.box-card {
  height: 260px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
}

.result {
  margin-top: 25px;
}
</style>
