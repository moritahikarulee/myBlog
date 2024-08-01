<template>
  <div class="container">
    <el-form ref="bmiForm" class="myForm">
      <h3 class="h3-title">BMI 計算器</h3>
      <p>
        請輸入您的身高和體重，讓我們將幫您計算 BMI，並根據 BMI
        給您提出適當的建議
      </p>
      <el-form-item label="性別:">
        <el-radio-group v-model="gender">
          <el-radio value="male">男</el-radio>
          <el-radio value="female">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="身高(cm):">
        <el-input
          v-model.number="height"
          placeholder="請輸入身高"
          id="height"
        ></el-input>
      </el-form-item>
      <el-form-item label="體重(kg):">
        <el-input
          v-model.number="weight"
          placeholder="請輸入體重"
          id="weight"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button :plain="true" @click="calculateBMI" class="mx-auto"
          >計算 BMI</el-button
        >
      </el-form-item>
      <el-form-item>
        <div v-if="bmi">你的 BMI 是: {{ bmi }}，{{ advice }}</div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus"; // 導入 ElMessage

const height = ref<number | null>(null);
const weight = ref<number | null>(null);
const gender = ref<string>("male");
const bmi = ref<string>("");
const advice = ref<string>("");

const calculateBMI = () => {
  // 檢查 height 和 weight 是否為有效數字
  if (height.value === null || isNaN(height.value) || height.value <= 0) {
    ElMessage.error("請輸入有效的身高");
    return;
  }
  if (weight.value === null || isNaN(weight.value) || weight.value <= 0) {
    ElMessage.error("請輸入有效的體重");
    return;
  }

  bmi.value = (
    weight.value /
    ((height.value / 100) * (height.value / 100))
  ).toFixed(2);
  giveAdvice();
};

const giveAdvice = () => {
  if (gender.value === "male") {
    if (parseFloat(bmi.value) < 20) advice.value = "體重過輕，要多吃一點";
    else if (parseFloat(bmi.value) >= 20 && parseFloat(bmi.value) <= 25)
      advice.value = "正常範圍，請繼續保持";
    else advice.value = "體重過重，該減肥囉";
  } else {
    if (parseFloat(bmi.value) < 18) advice.value = "體重過輕，要多吃一點";
    else if (parseFloat(bmi.value) >= 18 && parseFloat(bmi.value) <= 24)
      advice.value = "正常範圍，請繼續保持";
    else advice.value = "體重過重，該減肥囉";
  }
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 30px auto;
  padding: 15px;
}

p {
  padding: 3px;
  color: #666;
}

.myForm {
  max-width: 500px;
  min-height: 430px;
  margin: 15px auto;
  padding: 28px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 4px 10px 3px rgba(0, 0, 0, 0.1);
}

.el-input__inner {
  border-radius: 5px;
  border: 1px solid #dcdfe6;
  transition: border-color 0.2s ease-in-out;
}

button {
  font-weight: bolder;
  margin-top: 10px;
  border-radius: 5px;
}

.el-form-item {
  font-weight: 600;
}
</style>
