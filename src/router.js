import { createRouter, createWebHistory } from "vue-router";
import VMainPage from "./components/VMainPage";

export default createRouter({
  history: createWebHistory(),
  routes: [{ path: "/main", component: VMainPage }],
});
