<template>
  <div class="container">
    <h4>Vue 3 中的 watch 使用方式與時機</h4>
    <p>
      在 Vue 3 中，<code>watch</code>
      是一個非常有用的 api
      ，可以用來監聽響應式數據的變化並執行相應的操作。這在需要對數據變化做出反應的情況下非常有用，例如表單驗證、數據同步等。
    </p>
    <pre>
      <code class="language-js">{{ watchExample }}</code>
    </pre>
    <p>以下是一些使用 <code>watch</code> 的範例：</p>
    <p>
      第一個範例展示了如何監聽一個簡單的計數器變量的變化，並在變化時輸出新舊值：
    </p>
    <pre>
      <code class="language-js">{{ watchExample1 }}</code>
    </pre>
    <p>
      第二個範例展示了如何監聽一個對象屬性的變化，這在需要監控對象中特定屬性變化時非常有用：
    </p>
    <pre>
      <code class="language-js">{{ watchExample2 }}</code>
    </pre>
    <p>
      第三個範例展示了如何深度監聽一個數組的變化，這在需要監控數組內部元素變化時非常有用：
    </p>
    <pre>
      <code class="language-js">{{ watchExample3 }}</code>
    </pre>
    <br />
    <hr />
    <br />
    <h4>Vue 3 中的 watchEffect 使用方式與時機</h4>
    <p>
      在 Vue 3 中，<code>watchEffect</code>
      是一個非常有用的工具，可以用來自動追蹤響應式數據的變化並執行相應的操作。這在需要對數據變化做出反應的情況下非常有用，例如數據同步、即時計算等。
    </p>
    <pre>
      <code class="language-js">{{ watchEffectExample }}</code>
    </pre>
    <p>以下是一些使用 <code>watchEffect</code> 的範例：</p>
    <p>
      第一個範例展示了如何使用
      <code>watchEffect</code> 自動追蹤計數器變量的變化並輸出新值：
    </p>
    <pre>
      <code class="language-js">{{ watchEffectExample1 }}</code>
    </pre>
    <p>
      第二個範例展示了如何使用
      <code>watchEffect</code>
      監聽對象屬性的變化，這在需要監控對象中特定屬性變化時非常有用：
    </p>
    <pre>
      <code class="language-js">{{ watchEffectExample2 }}</code>
    </pre>
    <p>
      第三個範例展示了如何使用
      <code>watchEffect</code>
      深度監聽數組的變化，這在需要監控數組內部元素變化時非常有用：
    </p>
    <pre>
      <code class="language-js">{{ watchEffectExample3 }}</code>
    </pre>
    <br />
    <hr />
    <br />
    <h4>Vue 3 生命週期 API</h4>
    <p>
      Vue 3
      提供了一組豐富的生命週期鉤子，可以在組件的不同階段執行特定的操作。這些鉤子包括
      <code>onBeforeMount</code
      >、<code>onMounted</code>、<code>onBeforeUpdate</code>、<code>onUpdated</code>、<code>onBeforeUnmount</code>、<code
        >onUnmounted</code
      >
      等。
    </p>
    <pre>
      <code class="language-js">{{ lifecycleExample }}</code>
    </pre>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Prism from "prismjs";

const watchExample = `
import { ref, watch } from 'vue';

const count = ref(0);

watch(count, (newValue, oldValue) => {
  console.log(\`Count changed from \${oldValue} to \${newValue}\`);
});
`;

const watchExample1 = `
const count = ref(0);

watch(count, (newValue, oldValue) => {
  console.log(\`Count changed from \${oldValue} to \${newValue}\`);
});
`;

const watchExample2 = `
const user = ref({ name: 'John', age: 30 });

watch(() => user.value.age, (newAge, oldAge) => {
  console.log(\`Age changed from \${oldAge} to \${newAge}\`);
});
`;

const watchExample3 = `
const items = ref([1, 2, 3]);

watch(items, (newItems, oldItems) => {
  console.log('Items changed:', newItems);
}, { deep: true });
`;

const watchEffectExample = `
import { ref, watchEffect } from 'vue';

const count = ref(0);

watchEffect(() => {
  console.log(\`Count is now: \${count.value}\`);
});
`;

const watchEffectExample1 = `
const count = ref(0);

watchEffect(() => {
  console.log(\`Count is now: \${count.value}\`);
});
`;

const watchEffectExample2 = `
const user = ref({ name: 'John', age: 30 });

watchEffect(() => {
  console.log(\`User age is now: \${user.value.age}\`);
});
`;

const watchEffectExample3 = `
const items = ref([1, 2, 3]);

watchEffect(() => {
  console.log('Items:', items.value);
});
`;
const lifecycleExample = `
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

onBeforeMount(() => {
  console.log('掛載之前');
});

onMounted(() => {
  console.log('掛載完成');
});

onBeforeUpdate(() => {
  console.log('更新之前');
});

onUpdated(() => {
  console.log('更新完成');
});

onBeforeUnmount(() => {
  console.log('卸載之前');
});

onUnmounted(() => {
  console.log('卸載完成');
});
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

.container {
  margin: 15px auto;
}
</style>
