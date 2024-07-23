<script setup lang="ts">
import { ref, watchEffect } from "vue";
import TodoItem from "./TodoItem.vue";
import Todo from "@/types/todoType";
import AddItem from "./AddItem.vue";
import { nanoid } from "nanoid";
import { ElMessage } from "element-plus";

// 從 localStorage 加載初始數據
const todoList = ref<Array<Todo>>(
  JSON.parse(localStorage.getItem("todos") || "[]")
);

// 新增待辦事項的函數
const addTodo = (description: string) => {
  const newTodo: Todo = {
    id: nanoid(),
    description: description,
    status: false,
  };
  todoList.value.push(newTodo);
  ElMessage({
    message: "待辦事項已新增",
    type: "success",
  });
};

// 刪除待辦事項的函數
const deleteTodo = (id: string) => {
  todoList.value = todoList.value.filter((todo) => todo.id !== id);
  ElMessage({
    message: "待辦事項已刪除",
    type: "error",
  });
};

// 監聽 todoList 的變化，並更新 localStorage
watchEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todoList.value));
});
</script>

<template>
  <div class="container">
    <!-- 監聽 add-todo 事件並綁定到 addTodo 方法 -->
    <AddItem @add-todo="addTodo" />
    <el-alert
      title="會把請求的數據存在 localStorage，不想留的話記得按清空喔"
      type="warning"
      :closable="false"
      class="mb-3"
      show-icon
      center
    ></el-alert>
    <ul>
      <!-- 監聽 delete-todo 事件並綁定到 deleteTodo 方法 -->
      <TodoItem
        v-for="todoItem in todoList"
        :key="todoItem.id"
        :todoItem="todoItem"
        @delete-todo="deleteTodo"
      />
    </ul>
  </div>
</template>

<style scoped>
.container {
  margin: 25px auto;
  width: 93%;
}

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
</style>
