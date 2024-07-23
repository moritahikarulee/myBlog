<template>
  <div class="container">
    <el-card class="box-card">
      <div class="header">聯絡我</div>
      <el-form ref="contactForm" :model="form" class="form">
        <el-form-item label="姓名">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="郵箱">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="訊息">
          <el-input type="textarea" v-model="form.message"></el-input>
        </el-form-item>
        <el-button :plain="true" @click="submitForm">提交</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  ElMessage({
    message: "感謝您的訊息，我們會盡快回覆您！",
    type: "success",
  });
  console.log("Submitted form:", form.value);
};
</script>

<style scoped>
.container {
  margin: 26px auto;
  display: flex;
  justify-content: center;
  padding: 15px 0;
}

.box-card {
  width: 95%;
  max-width: 600px;
  max-height: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 15px;
}

.header {
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  color: #333;
  margin-bottom: 23px;
  font-family: "Nunito", sans-serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.el-input,
.el-textarea {
  width: 290px;
  border-radius: 5px;
  height: 38px; /* 設置較小的高度 */
  padding: 5px 8px; /* 調整內邊距以保持文字居中 */
}

.el-button {
  width: 100px;
  padding: 10px 30px;
  margin-top: 30px;
  border-radius: 6px;
  font-weight: 600;
  background-color: #007bff; /* 淺藍色背景 */
  color: white; /* 白色文字 */
}

/* 使用了 scoped CSS，直接修改可能不會影響到 Element Plus 的組件，
因為 scoped CSS 只作用於當前組件的根元素。
一種解決方案是使用深度選擇器（::v-deep 或 /deep/）來穿透 scoped 樣式。 */
::v-deep .el-form-item__label {
  font-size: 17px;
  font-weight: 600;
}
</style>
