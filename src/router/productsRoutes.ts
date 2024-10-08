// productsRoutes.ts
import Products from "../views/Products.vue";
import GetApiPicture from "@/components/GetApiPicture.vue";
import GetLoveTalk from "@/components/GetLoveTalk.vue";
import BMI from "@/components/BMI.vue";
import TodoList from "@/components/TodoList/TodoList.vue";
import GuessNumber from "@/components/GuessNumber.vue";
import WeatherForecast from "@/components/WeatherForecast.vue";
import MealSelector from "@/components/MealSelector.vue";
import PlaceholderComponent from "@/components/PlaceholderComponent.vue";
import ExchangeRate from "@/components/ExchangeRate.vue";
import YearPopulation from "@/components/YearPopulation.vue";

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
  {
    path: "/products/weatherForecast",
    name: "WeatherForecast",
    component: WeatherForecast,
  },
  {
    path: "/products/mealSelector",
    name: "MealSelector",
    component: MealSelector,
  },
  {
    path: "/products/placeholderComponent",
    name: "PlaceholderComponent",
    component: PlaceholderComponent,
  },
  {
    path: "/products/exchangeRate",
    name: "ExchangeRate",
    component: ExchangeRate,
  },
  {
    path: "/products/yearPopulation",
    name: "YearPopulation",
    component: YearPopulation,
  },
];

export default productsRoutes;
