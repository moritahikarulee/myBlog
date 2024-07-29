<template>
  <div class="container">
    <h2>天氣預報</h2>
    <el-form>
      <!-- 縣市選擇 -->
      <el-form-item label="選擇縣市">
        <el-select
          v-model="selectedCity"
          placeholder="請選擇縣市"
          @change="handleCityChange"
        >
          <!-- 從 cities 陣列中生成選項 -->
          <el-option
            v-for="city in cities"
            :key="city"
            :label="city"
            :value="city"
          ></el-option>
        </el-select>
      </el-form-item>
      <!-- 鄉鎮選擇 -->
      <el-form-item label="選擇鄉鎮">
        <el-select v-model="selectedTown" placeholder="請選擇鄉鎮">
          <!-- 從 towns 陣列中生成選項 -->
          <el-option
            v-for="town in towns"
            :key="town"
            :label="town"
            :value="town"
          ></el-option>
        </el-select>
      </el-form-item>
      <!-- 提交按鈕 -->
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">確定</el-button>
      </el-form-item>
    </el-form>
    <!-- 顯示選擇結果 -->
    <div class="result">
      <p>選擇結果: {{ selectedCity }} - {{ selectedTown }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import citiesTownsData from "@/assets/cities-towns.json";
import { CWB_API_KEY } from "@/config";

// 定義縣市和鄉鎮的資料
const cities = ref<string[]>([]);
const towns = ref<string[]>([]);

// 定義選擇的縣市和鄉鎮
const selectedCity = ref<string>("");
const selectedTown = ref<string>("");

// 縣市對應的編號
const cityCodeMap: { [key: string]: string } = {
  宜蘭縣: "F-D0047-001",
  桃園市: "F-D0047-005",
  新竹縣: "F-D0047-009",
  苗栗縣: "F-D0047-013",
  彰化縣: "F-D0047-017",
  南投縣: "F-D0047-021",
  雲林縣: "F-D0047-025",
  嘉義縣: "F-D0047-029",
  屏東縣: "F-D0047-033",
  臺東縣: "F-D0047-037",
  花蓮縣: "F-D0047-041",
  澎湖縣: "F-D0047-045",
  基隆市: "F-D0047-049",
  新竹市: "F-D0047-053",
  嘉義市: "F-D0047-057",
  臺北市: "F-D0047-061",
  高雄市: "F-D0047-065",
  新北市: "F-D0047-069",
  臺中市: "F-D0047-073",
  臺南市: "F-D0047-077",
  連江縣: "F-D0047-081",
  金門縣: "F-D0047-085",
};

// 當選擇縣市改變時，更新鄉鎮資料
const handleCityChange = (city: string) => {
  // 根據選擇的縣市找到對應的資料
  const cityData = citiesTownsData.find((c) => c.CityName === city);
  // 更新 towns 陣列，包含選擇縣市下的所有鄉鎮
  towns.value = cityData ? cityData.AreaList.map((area) => area.AreaName) : [];
  // 重置選擇的鄉鎮
  selectedTown.value = "";
};

const handleSubmit = async () => {
  const cityCode = cityCodeMap[selectedCity.value];
  const encodedTown = encodeURIComponent(selectedTown.value);
  const url = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-093?Authorization=${CWB_API_KEY}&locationId=${cityCode}&locationName=${encodedTown}&elementName=PoP6h,MinT,MaxT,PoP12h,T,Wx,WeatherDescription`;
  console.log(url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

// 組件載入時初始化縣市資料
onMounted(() => {
  // 從 citiesTownsData 中提取所有的 CityName 並存入 cities 陣列
  cities.value = citiesTownsData.map((city) => city.CityName);
});
</script>

<style scoped>
.container {
  margin: 35px auto;
  padding: 2px;
  max-width: 90%;
}

h2 {
  text-align: center;
  margin-bottom: 25px;
  font-weight: bold;
  font-family: "Noto Sans TC", sans-serif;
  color: #333;
}
.result {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}

/* 大尺寸螢幕 */
@media (min-width: 1024px) {
  .container {
    max-width: 55%;
  }
}
</style>
