import { reactive } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";

export default function () {
  // 數據
  const dogList = reactive([
    "https://images.dog.ceo/breeds/pembroke/n02113023_4080.jpg",
  ]);

  // 方法
  const addDog = async () => {
    try {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random");
      dogList.push(res.data.message);
      ElMessage({
        showClose: true,
        message: "獲取狗狗圖片成功",
        type: "success",
      });
    } catch (error) {
      ElMessage({
        showClose: true,
        message: "獲取大頭貼失敗",
        type: "error",
      });
    }
  };

  const deleteDog = () => {
    if (dogList.length === 1) {
      ElMessage.error("至少要有一隻狗狗");
      return;
    }
    dogList.pop();
  };

  // 向外暴露
  return {
    dogList,
    addDog,
    deleteDog,
  };
}
