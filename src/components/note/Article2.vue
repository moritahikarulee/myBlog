<template>
  <div class="container">
    <h4>JavaScript 中的 export 與 export default 的差別</h4>
    <p>
      在 JavaScript 中，<code>export</code> 和
      <code>export default</code>
      是兩種用來導出模組的方法。它們有一些重要的差異，了解這些差異對於模組化開發非常重要。
    </p>
    <p>
      以下是一些使用 <code>export</code> 和 <code>export default</code> 的範例：
    </p>
    <p>第一個範例展示了如何使用 <code>export</code> 導出多個變量或函數：</p>
    <pre>
      <code class="language-js">{{ example1 }}</code>
    </pre>
    <p>
      第二個範例展示了如何使用 <code>export default</code> 導出單一變量或函數：
    </p>
    <pre>
      <code class="language-js">{{ example2 }}</code>
    </pre>
    <p>
      第三個範例展示了如何在導入時區分 <code>export</code> 和
      <code>export default</code>：
    </p>
    <pre>
      <code class="language-js">{{ example3 }}</code>
    </pre>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Prism from "prismjs";

const example1 = ref(`
// 使用 export 導出多個變量或函數
export const name = 'Alice';
export function greet() {
  console.log('Hello, ' + name);
}
`);

const example2 = ref(`
// 使用 export default 導出單一變量或函數
const name = 'Alice';
export default function greet() {
  console.log('Hello, ' + name);
}
`);

const example3 = ref(`
// 導入時區分 export 和 export default
// 導入 export 的變量或函數
import { name, greet } from './module';

// 導入 export default 的變量或函數
import greet from './module';
`);

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

.container {
  margin: 15px auto;
}
</style>
