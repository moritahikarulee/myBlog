<template>
  <div class="addItem">
    <el-input
      placeholder="請輸入內容"
      v-model="inputValue"
      class="input-with-button"
      @keyup.enter="addItemFun"
    ></el-input>
    <el-button :plain="true" @click="addItemFun">新增</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["add-todo"]);

const inputValue = ref("");

const addItemFun = () => {
  if (inputValue.value.trim() === "") {
    return;
  }
  emit("add-todo", inputValue.value);
  inputValue.value = "";
};
</script>

<style scoped>
button {
  font-weight: bolder;
  border-radius: 5px;
}

.addItem {
  display: flex;
  align-items: center; /* 確保輸入框和按鈕垂直居中對齊 */
  margin: 15px auto;
  justify-content: center;
}

.input-with-button {
  margin-right: 10px; /* 為輸入框和按鈕之間添加間隔 */
  width: 80%; /* 設置輸入框寬度 */
}
</style>
