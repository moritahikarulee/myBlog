import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import { reactive } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";
// 簡體轉繁體的套件
import * as OpenCC from "opencc-js"; // 正確引用 OpenCC
// npm i --save-dev @types/opencc-js

export const useLoveTalkStore = defineStore("loveTalk", () => {
  const talkList = reactive(
    JSON.parse(localStorage.getItem("talkList") || "[]")
  );

  async function getLoveTalk() {
    const { data } = await axios.get(
      "https://api.uomg.com/api/rand.qinghua?format=json"
    );
    const converter = OpenCC.Converter({ from: "cn", to: "tw" }); // 使用 OpenCC 的 Converter 方法來獲取轉換器
    const traditionalContent = converter(data.content); // 將內容轉為繁體
    talkList.push({ id: uuidv4(), content: traditionalContent });
    ElMessage.success("獲取土味情話成功");
    console.log(talkList);
  }

  const deleteLoveTalk = () => {
    talkList.length = 0;
    localStorage.removeItem("talkList");
  };
  return { talkList, getLoveTalk, deleteLoveTalk };
});
