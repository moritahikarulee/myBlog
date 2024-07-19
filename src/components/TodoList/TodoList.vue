<script setup lang="ts">
import { ref } from "vue";
import TodoItem from "./TodoItem.vue";
import Todo from "@/types/todoType";

// 創建一個符合 `todo` 介面的資料陣列
const todoList = ref<Array<Todo>>([
  { id: "1", description: "學習 Vue 3", status: false },
  { id: "2", description: "寫一個 Todo List 應用", status: false },
  { id: "3", description: "探索 Composition API", status: false },
]);
</script>

<template>
  <ul>
    <TodoItem
      v-for="todoItem in todoList"
      :key="todoItem.id"
      :todoItem="todoItem"
    />
  </ul>
</template>
