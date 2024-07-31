<template>
  <div class="container">
    <h4>React 中的 useState 與 useEffect 的使用</h4>
    <p>
      在 React 中，<code>useState</code> 和
      <code>useEffect</code> 是兩個非常重要的
      Hook。它們分別用來管理狀態和處理副作用。
    </p>
    <p>
      以下是一些使用 <code>useState</code> 和 <code>useEffect</code> 的範例：
    </p>
    <p>第一個範例展示了如何使用 <code>useState</code> 管理狀態：</p>
    <pre>
      <code class="language-js">{{ example1 }}</code>
    </pre>
    <p>第二個範例展示了如何使用 <code>useEffect</code> 處理副作用：</p>
    <pre>
      <code class="language-js">{{ example2 }}</code>
    </pre>
    <p>第三個範例展示了如何在 <code>useEffect</code> 中使用清理函數：</p>
    <pre>
      <code class="language-js">{{ example3 }}</code>
    </pre>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Prism from "prismjs";

const example1 = ref(`
// 使用 useState 管理狀態
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
`);

const example2 = ref(`
// 使用 useEffect 處理副作用
import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default Timer;
`);

const example3 = ref(`
// 在 useEffect 中使用清理函數
import React, { useState, useEffect } from 'react';

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <p>Window width: {width}</p>
    </div>
  );
}

export default WindowWidth;
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
