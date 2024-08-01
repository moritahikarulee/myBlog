<template>
  <div class="container">
    <h3 class="h3-title">猜數字遊戲</h3>
    <div class="guess-number">
      <el-input-number v-model="userGuess" :min="1" :max="100" />
      <el-button :plain="true" @click="checkGuess">我猜</el-button>
      <el-button :plain="true" @click="resetNumber">重置數字</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";

const userGuess = ref(0);
const correctNumber = ref(Math.floor(Math.random() * 100) + 1);

const checkGuess = () => {
  if (userGuess.value === correctNumber.value) {
    ElMessage({
      message: `恭喜你！答案正確，數字是 ${correctNumber.value}。`,
      type: "success",
      showClose: true,
      duration: 1500,
    });
  } else if (userGuess.value < correctNumber.value) {
    ElMessage({
      message: "太小了！再試一次。",
      type: "warning",
      showClose: true,
      duration: 1500,
    });
  } else {
    ElMessage({
      message: "太大了！再試一次。",
      type: "warning",
      showClose: true,
      duration: 1500,
    });
  }
};

const resetNumber = () => {
  correctNumber.value = Math.floor(Math.random() * 100) + 1;
  userGuess.value = 1;
  ElMessage({
    message: "數字已重置。",
    type: "info",
    showClose: true,
    duration: 1500,
  });
};
</script>

<style scoped>
.container {
  margin: 50px auto;
}

.guess-number {
  max-width: 400px;
  margin: 190px auto;
  display: flex;
  justify-content: center;
}

button {
  font-weight: bolder;
  border-radius: 5px;
  margin-left: 18px;
}
</style>
