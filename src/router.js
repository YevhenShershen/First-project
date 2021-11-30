import { createRouter, createWebHistory } from "vue-router";
import VMainPage from "./components/VMainPage";
import VSecondPage from "./components/VSecondPage";

export default createRouter({
  history: createWebHistory(),
  routes: [
  { path: "/main", component: VMainPage, alias:'/' },
  { path: "/services", component: VSecondPage}],
});
