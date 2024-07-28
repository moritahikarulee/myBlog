// productsRoutes.ts
import Products from "../views/Products.vue";
import GetApiPicture from "@/components/GetApiPicture.vue";
import GetLoveTalk from "@/components/GetLoveTalk.vue";
import BMI from "@/components/BMI.vue";
import TodoList from "@/components/TodoList/TodoList.vue";
import GuessNumber from "@/components/GuessNumber.vue";

const productsRoutes = [
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/products/getApiPicture",
    name: "GetApiPicture",
    component: GetApiPicture,
  },
  {
    path: "/products/getLoveTalk",
    name: "GetLoveTalk",
    component: GetLoveTalk,
  },
  {
    path: "/products/bmi",
    name: "BMI",
    component: BMI,
  },
  {
    path: "/products/todoList",
    name: "TodoList",
    component: TodoList,
  },
  {
    path: "/products/guessNumber",
    name: "GuessNumber",
    component: GuessNumber,
  },
];

export default productsRoutes;
