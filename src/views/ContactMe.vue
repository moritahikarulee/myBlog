<template>
  <div class="container">
    <el-card class="box-card">
      <h3 class="h3-title">聯絡我</h3>
      <el-alert
        title="請輸入有效的電子郵件，以確保您能確實寄出信件"
        type="info"
        center
        show-icon
        :closable="false"
        class="alert"
      />
      <el-form ref="contactForm" :model="form" class="form">
        <el-form-item label="暱稱">
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
import { onMounted, onUnmounted } from "vue";
import axios from "axios";
import { MY_SERVER_KEY } from "@/config";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const submitForm = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    ElMessage({
      message: "請填入完整資料",
      type: "error",
    });
  } else if (!validateEmail(form.value.email)) {
    ElMessage({
      message: "請輸入有效的郵箱地址",
      type: "error",
    });
  } else {
    try {
      const response = await axios.post(`${MY_SERVER_KEY}email/send`, {
        from: form.value.email,
        subject: `Message from ${form.value.name}`,
        text: form.value.message,
      });
      ElMessage({
        message: response.data,
        type: "success",
      });
    } catch (error) {
      ElMessage({
        message: "發送郵件失敗，請稍後再試。",
        type: "error",
      });
    }
  }
};

onMounted(() => {
  document.body.style.background =
    "linear-gradient(to right, #FFE9E9, #D6F0FD)";
});

onUnmounted(() => {
  // 當組件卸載時，清除背景設置以避免影響到其他頁面
  document.body.style.background = "";
});
</script>

<style scoped>
.container {
  margin: 26px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
}

.box-card {
  width: 95%;
  max-width: 600px;
  max-height: 530px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 5px;
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
  background-color: #007bff;
  color: white;
}

.alert {
  padding: 10px;
  margin-bottom: 25px;
}

/* 使用了 scoped CSS，直接修改可能不會影響到 Element Plus 的組件，
因為 scoped CSS 只作用於當前組件的根元素。
一種解決方案是使用深度選擇器來穿透 scoped 樣式。 */
:deep(.el-form-item__label) {
  font-size: 17px;
  font-weight: 600;
}
</style>
