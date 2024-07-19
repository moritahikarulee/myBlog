<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="bread">
    <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
    <el-breadcrumb-item> <a href="/products">products </a> </el-breadcrumb-item>
    <el-breadcrumb-item>get api picture</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="box">
    <img v-for="(dog, index) in dogList" :src="dog" :key="index" />
    <br />
    <el-button
      :plain="true"
      @click="addDog"
      :disabled="isAddingDogDisabled"
      class="mt-3"
      >增加一隻狗</el-button
    >
    <el-button :plain="true" @click="deleteDog" class="mt-3"
      >刪除一隻狗</el-button
    >
    <hr class="mb-4" />
    <img v-for="(headshot, index) in headshots" :src="headshot" :key="index" />
    <br />
    <el-button
      :plain="true"
      @click="addHeadshot"
      :disabled="isAddingHeadshotDisabled"
      class="mt-3"
      >增加一張頭貼</el-button
    >
    <el-button :plain="true" @click="deleteHeadshot" class="mt-3"
      >刪除一張頭貼</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useDog from "@/hooks/useDog";
import useHeadshot from "@/hooks/useHeadshot";
import { ArrowRight } from "@element-plus/icons-vue";

// 這邊要冒號是因為重新命名，以便在後續調用時不會與原始函數名稱混淆
const { dogList, addDog: originalAddDog, deleteDog } = useDog();
const {
  headshots,
  addHeadshot: originalAddHeadshot,
  deleteHeadshot,
} = useHeadshot();

const isAddingDogDisabled = ref(false);
const isAddingHeadshotDisabled = ref(false);

const addDog = () => {
  if (isAddingDogDisabled.value) return;
  isAddingDogDisabled.value = true;
  originalAddDog();
  setTimeout(() => {
    isAddingDogDisabled.value = false;
  }, 1500);
};

const addHeadshot = () => {
  if (isAddingHeadshotDisabled.value) return;
  isAddingHeadshotDisabled.value = true;
  originalAddHeadshot();
  setTimeout(() => {
    isAddingHeadshotDisabled.value = false;
  }, 1500);
};
</script>

<style scoped>
.box {
  margin: 20px;
  min-height: 1000px;
  background-color: rgb(220, 245, 255);
  box-shadow: 0 0 10px;
  border-radius: 12px;
  padding: 21px;
}

button {
  font-weight: bolder;
  margin: 0 5px;
  border-radius: 5px;
}

img {
  height: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.bread {
  font-size: 17px;
  margin: 25px 0px 15px 20px;
}
</style>
