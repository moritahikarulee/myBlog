<template>
  <div class="container">
    <h3 class="h3-title">天氣預報</h3>
    <el-alert
      title="十秒可以請求一次資料，本資料僅供參考，請以中央氣象局發布的資訊為準。"
      type="info"
      show-icon
      class="alert"
    ></el-alert>
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
          <!-- 添加預設選項 -->
          <el-option
            v-if="!selectedCity"
            :key="'default'"
            :label="'請先選擇縣市'"
            :value="null"
            disabled
          ></el-option>
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
        <el-button
          :disabled="isButtonDisabled"
          @click="handleSubmit"
          :plain="true"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
    <!-- 顯示選擇結果 -->
    <div class="result">
      <el-row :gutter="20" v-if="weatherData.length">
        <el-col
          v-for="(item, index) in weatherData"
          :key="index"
          :xs="24"
          :sm="12"
          :md="8"
        >
          <el-card>
            <p>時間: {{ item.dataTime }}</p>
            <p>溫度: {{ item.temperature }} °C</p>
            <p>六小時內降雨機率: {{ item.rainProbability }} %</p>
            <p>簡述: {{ item.weatherDescription }}</p>
          </el-card>
        </el-col>
      </el-row>
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

// 定義解構出來的屬性
const locationsName = ref<string>("");
const locationName = ref<string>("");
const weatherElement = ref<any>(null);
const weatherData = ref<any[]>([]);

const isButtonDisabled = ref(false);

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
  const cityData = citiesTownsData.find((c) => c.CityName === city);
  towns.value = cityData ? cityData.AreaList.map((area) => area.AreaName) : [];
  selectedTown.value = "";
};

const fetchWeatherData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

const processWeatherData = (data: any) => {
  const {
    records: {
      locations: [
        {
          locationsName: locName,
          location: [
            {
              locationName: locLocationName,
              weatherElement: locWeatherElement,
            },
          ],
        },
      ],
    },
  } = data;

  locationsName.value = locName;
  locationName.value = locLocationName;
  weatherElement.value = locWeatherElement;

  const temperatureElement = locWeatherElement.find(
    (element: any) => element.elementName === "T"
  );

  const rainElement = locWeatherElement.find(
    (element: any) => element.elementName === "PoP6h"
  );

  const weatherDescriptionElement = locWeatherElement.find(
    (element: any) => element.elementName === "Wx"
  );

  const filteredTimes = temperatureElement.time.filter((time: any) => {
    const hour = new Date(time.dataTime).getHours();
    return hour === 6 || hour === 12 || hour === 18 || hour === 0;
  });

  weatherData.value = filteredTimes.map((time: any) => {
    const correspondingRainTime = rainElement.time.find(
      (rainTime: any) => rainTime.startTime === time.dataTime
    );
    const correspondingWeatherDescriptionTime =
      weatherDescriptionElement.time.find(
        (weatherTime: any) => weatherTime.startTime === time.dataTime
      );

    return {
      dataTime: time.dataTime,
      temperature: time.elementValue[0].value,
      rainProbability: correspondingRainTime
        ? correspondingRainTime.elementValue[0].value
        : null,
      weatherDescription: correspondingWeatherDescriptionTime
        ? correspondingWeatherDescriptionTime.elementValue[0].value
        : null,
    };
  });
};

const handleSubmit = async () => {
  const cityCode = cityCodeMap[selectedCity.value];
  const encodedTown = encodeURIComponent(selectedTown.value);
  const url = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-093?Authorization=${CWB_API_KEY}&locationId=${cityCode}&locationName=${encodedTown}&elementName=PoP6h,MinT,MaxT,T,Wx,WeatherDescription`;

  try {
    const data = await fetchWeatherData(url);
    processWeatherData(data);
    console.log(locationsName.value, locationName.value, weatherElement.value);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    isButtonDisabled.value = true;
    setTimeout(() => {
      isButtonDisabled.value = false;
    }, 10000); // 10秒後重新啟用按鈕
  }
};

// 組件載入時初始化縣市資料
onMounted(() => {
  cities.value = citiesTownsData.map((city) => city.CityName);
});
</script>

<style scoped>
.container {
  margin: 35px auto;
  padding: 3px;
  width: 95%;
}

button {
  font-weight: bolder;
  margin-top: 10px;
  border-radius: 5px;
}

.result {
  margin-top: 20px;
  padding: 10px;
}

.el-card {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.el-card p {
  margin: 3px 0;
  font-family: "Noto Sans TC", sans-serif;
  color: #555;
}

.el-card p:first-child {
  font-weight: bold;
  color: #666;
}

/* 大尺寸螢幕 */
@media (min-width: 1024px) {
  .container {
    width: 70%;
  }
}

/* 小尺寸螢幕 */
@media (max-width: 1023px) {
  .container {
    width: 95%;
  }
}
</style>
