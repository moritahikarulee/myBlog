<template>
  <li :class="{ 'is-complete': props.todoItem.status }">
    <span>{{ props.todoItem.description }}</span>
    <el-button
      :plain="true"
      @click="toggleStatus"
      style="color: aliceblue; background-color: #409eff"
      >切換</el-button
    >
    <el-button
      :plain="true"
      @click="() => emit('delete-todo', props.todoItem.id)"
      style="color: aliceblue; background-color: #f56c6c"
      >刪除</el-button
    >
  </li>
</template>

<script setup lang="ts">
import TodoType from "@/types/todoType";

const props = defineProps<{
  todoItem: TodoType;
}>();

const emit = defineEmits(["delete-todo"]);

function toggleStatus() {
  props.todoItem.status = !props.todoItem.status;
}
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
  border-bottom: 1px dashed #eee;
}

li span {
  flex-grow: 1; /* 讓文字占用多餘的空間，確保按鈕保持在右側 */
  font-size: 17px;
  color: #333;
  font-family: Arial, sans-serif;
  white-space: normal; /* 允許文字換行 */
  word-break: break-word; /* 斷開過長的單詞，以避免跑版 */
}

.is-complete span {
  text-decoration: line-through;
}

button {
  font-weight: bolder;
  border-radius: 5px;
  padding: 9px;
}
</style>
