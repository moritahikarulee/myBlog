import { reactive } from "vue";
import { ElMessage } from "element-plus";

export default function () {
  // 數據
  const headshots = reactive([
    "https://randomuser.me/api/portraits/med/women/34.jpg",
  ]);

  // 方法
  const addHeadshot = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?format=json");
      const data = await res.json();
      headshots.push(data.results[0].picture.medium);
      ElMessage({
        showClose: true,
        message: "獲取大頭貼成功",
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

  const deleteHeadshot = () => {
    if (headshots.length === 1) {
      ElMessage.error("至少要有一張大頭貼");
      return;
    }
    headshots.pop();
  };

  // 向外暴露
  return {
    headshots,
    addHeadshot,
    deleteHeadshot,
  };
}
