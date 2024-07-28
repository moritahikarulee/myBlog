<template>
  <div>
    <h2>第一篇文章</h2>
    <h3>Vue 3 中的 watch 使用方式與時機</h3>
    <p>
      在 Vue 3 中，<code>watch</code>
      是一個非常有用的工具，可以用來監聽響應式數據的變化並執行相應的操作。這在需要對數據變化做出反應的情況下非常有用，例如表單驗證、數據同步等。
    </p>
    <pre>
      <code class="language-js">{{ codeExample }}</code>
    </pre>
    <p>以下是一些使用 <code>watch</code> 的範例：</p>
    <p>
      第一個範例展示了如何監聽一個簡單的計數器變量的變化，並在變化時輸出新舊值：
    </p>
    <pre>
      <code class="language-js">{{ example1 }}</code>
    </pre>
    <p>
      第二個範例展示了如何監聽一個對象屬性的變化，這在需要監控對象中特定屬性變化時非常有用：
    </p>
    <pre>
      <code class="language-js">{{ example2 }}</code>
    </pre>
    <p>
      第三個範例展示了如何深度監聽一個數組的變化，這在需要監控數組內部元素變化時非常有用：
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript";

const codeExample = `
import { ref, watch } from 'vue';

const count = ref(0);

watch(count, (newValue, oldValue) => {
  console.log(\`Count changed from \${oldValue} to \${newValue}\`);
});
`;

const example1 = `
const data = ref({ name: 'Alice', age: 25 });

watch(() => data.value.name, (newName, oldName) => {
  console.log(\`Name changed from \${oldName} to \${newName}\`);
});
`;

const example2 = `
const items = ref([1, 2, 3]);

watch(items, (newItems, oldItems) => {
  console.log('Items changed:', newItems);
}, { deep: true });
`;

onMounted(() => {
  Prism.highlightAll();
});
</script>

<style scoped>
pre {
  background: #f5f5f5;
  padding: 1em;
  border-radius: 5px;
}
</style>
