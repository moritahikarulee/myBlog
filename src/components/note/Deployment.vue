<template>
  <div class="container">
    <h4>使用 GitHub Pages 部署網站</h4>
    <p>
      以下是我自己摸索測試部屬的心得，將介紹如何使用 GitHub Pages
      部署網站，並使用
      <code>gh-pages</code> 套件進行手動配置。伺服器端我使用
      <code>Node.js</code> 配合 <code>Express</code> 框架，並通過 Vercel
      進行部署。
    </p>
    <p>以下是詳細步驟：</p>
    <p>第一步，安裝 <code>gh-pages</code> 套件：</p>
    <pre>
      <code class="language-bash">{{ step1 }}</code>
    </pre>
    <p>第二步，配置 <code>package.json</code> 文件：</p>
    <pre>
      <code class="language-json">{{ step2 }}</code>
    </pre>
    <p>第三步，配置 <code>vite.config.js</code> 文件：</p>
    <pre>
      <code class="language-js">{{ step3 }}</code>
    </pre>
    <p>第四步，配置環境變數：</p>
    <pre>
      <code class="language-json">{{ step4 }}</code>
    </pre>
    <p>第五步，使用 <code>npm run deploy</code> 部署：</p>
    <pre>
      <code class="language-bash">{{ step5 }}</code>
    </pre>
    <p>第六步，伺服器端使用 Node.js 和 Express：</p>
    <pre>
      <code class="language-js">{{ step6 }}</code>
    </pre>
    <p>第七步，通過 Vercel 部署伺服器：</p>
    <pre>
      <code class="language-bash">{{ step7 }}</code>
    </pre>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Prism from "prismjs";

const step1 = ref(`
// 安裝 gh-pages 套件
npm install gh-pages --save-dev
`);

const step2 = ref(`
// 配置 package.json 文件
{
  "name": "book-product",
  "private": true,
  "version": "0.0.0",
  "homepage": "https://{username}.github.io/{repo-name}/",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc -b && vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist -r your_remote_url",
    "predeploy": "npm run build"
  }
}
`);

const step3 = ref(`
// 配置 vite.config.js 文件

export default defineConfig({
  // 部屬用 base 路徑
  base: "/myBlog/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
`);

const step4 = ref(`
// 配置環境變數
export SECRET_KEY=your_secret_key
`);

const step5 = ref(`
// 使用 npm run deploy 部署
npm run deploy
`);

const step6 = ref(`
// 伺服器端使用 Node.js 和 Express
const express = require('express');
const app = express();
const port = process.env.PORT || your_port;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(\`Server is running on port \${port}\`);
});
`);

const step7 = ref(`
// 通過 Vercel 部署伺服器
// 1. 建立 vercel.json 文件

{
  "version": 2,
  "builds": [
    {
      "src": "src/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/src/index.js"
    }
  ]
}

// 2. 配置環境變數
export SECRET_KEY=your_secret_key

// 3. 部署上去的程式要先配置 npm install
npm install

// 3. 部署到 Vercel
資料填完後，直接按下 Deploy 即可
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
