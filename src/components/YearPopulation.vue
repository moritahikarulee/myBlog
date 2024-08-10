<template>
  <div class="container">
    <h3 class="h3-title">各縣市歷年人口統計</h3>
    <el-select
      v-model="selectedYear"
      placeholder="請選擇年度"
      @change="fetchData"
    >
      <el-option
        v-for="year in years"
        :key="year"
        :label="year"
        :value="year"
      ></el-option>
    </el-select>
    <el-table :data="tableData" style="width: 100%; margin-top: 20px">
      <el-table-column prop="year" label="年度" width="110"></el-table-column>
      <el-table-column
        prop="city"
        label="縣市名稱"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="population"
        label="人口"
        width="300"
      ></el-table-column>
      <template #empty>
        <div style="text-align: center; color: #999">請選擇年份以獲取數據</div>
      </template>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElSelect, ElOption, ElTable, ElTableColumn } from "element-plus";
import { POPULATION_WEB } from "@/config";

const selectedYear = ref<string>("");
const years = Array.from({ length: 14 }, (_, i) => (97 + i).toString());

interface ApiResponseItem {
  year: string;
  county_o: string;
  p_cnt: number;
}

interface TableDataTypes {
  year: string;
  city: string;
  population: number;
}

const tableData = ref<TableDataTypes[]>([]);

const fetchData = async () => {
  if (selectedYear.value) {
    try {
      const res = await fetch(`${POPULATION_WEB}${selectedYear.value}`);
      const data = await res.json();
      if (data.value && Array.isArray(data.value)) {
        tableData.value = data.value.map((item: ApiResponseItem) => ({
          year: item.year,
          city: item.county_o,
          population: item.p_cnt,
        }));
      } else {
        console.error("API 返回的數據格式不正確，應該是包含 value 屬性的陣列");
      }
    } catch (error) {
      console.error("獲取數據時發生錯誤:", error);
    }
  }
};
</script>

<style scoped>
.container {
  margin: 20px auto;
  padding: 10px;
  max-width: 580px;
}
</style>
