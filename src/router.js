import Vue from "vue";
import Vuerouter from "vue-router";
import MainPage from "@/pages/MainPage";

Vue.use(Vuerouter);

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/photos",
    component: () => import("./pages/PhotoPage.vue"),
  },
];

export default new Vuerouter({
  mode: "history",
  routes,
});
