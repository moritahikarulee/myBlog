// productsRoutes.ts
import Products from "../views/Products.vue";
import GetApiPicture from "@/components/GetApiPicture.vue";

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
];

export default productsRoutes;
