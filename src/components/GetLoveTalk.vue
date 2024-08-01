<template>
  <div class="box">
    <h3 class="h3-title">獲取土味情話</h3>
    <el-alert
      title="會把請求的數據存在 localStorage，不想留的話記得按清空喔"
      type="warning"
      :closable="false"
      class="mb-4"
      show-icon
      center
    ></el-alert>
    <hr />
    <el-button
      :plain="true"
      @click="getTalk"
      class="mb-4 ms-4"
      :disabled="isAddLoveTalkDisabled"
      >獲取情話</el-button
    >
    <el-button :plain="true" @click="deleteTalk" class="mb-4 ms-4"
      >清空情話</el-button
    >
    <ul>
      <li v-for="talk in talkList" :key="talk.id">
        <span> {{ talk.content }} </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useLoveTalkStore } from "@/stores/LoveTalk";
import { storeToRefs } from "pinia";
// npm i --save-dev @types/uuid
// 安裝 uuid 的 typescript 定義檔

// 要有 use 才會在開發工具出現
const LoveTalkStore = useLoveTalkStore();
const { talkList } = storeToRefs(LoveTalkStore);
const isAddLoveTalkDisabled = ref(false);

// 類似 watch 監聽數據的變化
LoveTalkStore.$subscribe((mutate, state) => {
  console.log("talkStore 裡面保存的數據發生了變化", mutate, state);
  // 記住 localStorage 只能存儲字符串
  localStorage.setItem("talkList", JSON.stringify(state.talkList));
});

// 獲取土味情話
const getTalk = () => {
  if (isAddLoveTalkDisabled.value) return;
  isAddLoveTalkDisabled.value = true;
  setTimeout(() => {
    isAddLoveTalkDisabled.value = false;
  }, 1500);
  LoveTalkStore.getLoveTalk();
};

// 清空土味情話
const deleteTalk = () => {
  LoveTalkStore.deleteLoveTalk();
};
</script>

<style scoped>
.box {
  margin: 25px;
  min-height: 1000px;
  background-color: rgb(220, 245, 255);
  box-shadow: 0 0 10px;
  border-radius: 12px;
  padding: 25px;
}

.box ul {
  list-style: none;
  padding: 0;
}

.box li span {
  font-size: 16px;
  color: #5d1049;
  font-weight: 600;
  background-color: #f0e6ef;
  padding: 6px 8px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  display: inline-block;
  font-family: "Comic Sans MS", cursive, sans-serif;
}

button {
  font-weight: bolder;
  margin: 0 5px;
  border-radius: 5px;
}

.bread {
  font-size: 17px;
  margin: 25px 0px 15px 20px;
}
</style>
