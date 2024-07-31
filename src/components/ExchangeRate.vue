<template>
  <div class="container">
    <h3>常用貨幣兌換器</h3>
    <el-input
      v-model="amount"
      placeholder="輸入金額"
      class="input-field"
    ></el-input>
    <el-select
      v-model="fromCurrency"
      placeholder="選擇幣種"
      class="select-field"
    >
      <el-option
        v-for="currency in currencies"
        :key="currency.value"
        :label="currency.label"
        :value="currency.value"
      ></el-option>
    </el-select>
    <el-select
      v-model="toCurrency"
      placeholder="選擇目標幣種"
      class="select-field"
    >
      <el-option
        v-for="currency in currencies"
        :key="currency.value"
        :label="currency.label"
        :value="currency.value"
      ></el-option>
    </el-select>
    <el-button
      type="primary"
      @click="convertCurrency"
      class="convert-button"
      :disabled="isButtonDisabled"
      >轉換</el-button
    >
    <div v-if="result !== null" class="result">轉換結果: {{ result }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { EXCHANGERATE_KEY } from "@/config";

const amount = ref<number | null>(null);
const fromCurrency = ref<string | null>(null);
const toCurrency = ref<string | null>(null);
const result = ref<number | null>(null);
const isButtonDisabled = ref(false);
const currencies = [
  { label: "美金", value: "USD" },
  { label: "人民幣", value: "CNY" },
  { label: "日幣", value: "JPY" },
  { label: "韓幣", value: "KRW" },
  { label: "新台幣", value: "TWD" },
  { label: "歐元", value: "EUR" },
  { label: "港幣", value: "HKD" },
];

const convertCurrency = async () => {
  if (
    amount.value === null ||
    fromCurrency.value === null ||
    toCurrency.value === null
  ) {
    ElMessage.error("請輸入金額並選擇幣種");
    return;
  }

  if (isNaN(amount.value) || amount.value <= 0 || amount.value > 100000000) {
    ElMessage.error("請輸入正確的數字，金額需在 1 到 1 億之間");
    return;
  }

  isButtonDisabled.value = true;
  ElMessage.info("匯率僅供參考，請以實際兌換匯率為主，十秒後可重新輸入");

  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${EXCHANGERATE_KEY}/latest/${fromCurrency.value}`
    );
    const data = await response.json();
    const rate = data.conversion_rates[toCurrency.value];
    // const rate = data.conversion_rates['TWD'];
    // 這是物件，不要搞混了，.只能用來訪問固定的屬性名稱

    result.value = amount.value * rate;
  } catch (error) {
    ElMessage.error("轉換失敗，請稍後再試");
  } finally {
    setTimeout(() => {
      isButtonDisabled.value = false;
    }, 10000);
  }
};
</script>

<style scoped>
.container {
  max-width: 550px;
  margin: 25px auto;
  padding: 10px;
}

h3 {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  color: #555;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
}
.input-field,
.select-field,
.convert-button {
  margin-bottom: 15px;
  width: 100%;
}

.result {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
</style>
