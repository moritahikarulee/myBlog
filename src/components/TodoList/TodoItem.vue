<script setup lang="ts">
import TodoType from "@/types/todoType";

// 使用 TodoType 作為 PropType
const props = defineProps<{
  todoItem: TodoType;
}>();

const emit = defineEmits(["delete-todo"]);
</script>

<template>
  <li>
    <input type="checkbox" v-model="props.todoItem.status" />
    <span>{{ props.todoItem.description }}</span>
    <button @click="() => emit('delete-todo', props.todoItem.id)">刪除</button>
  </li>
</template>
