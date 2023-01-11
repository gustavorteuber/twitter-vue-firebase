import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/loginView.vue";
import Cadastro from "@/views/cadastroView.vue";
import Home from "@/views/homeView.vue";
import Inicial from "@/views/inicialView.vue"
import Forgot from "@/views/forgotView.vue"

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: Cadastro,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Inicial",
    component: Inicial,
  },
  {
    path: "/forgot",
    name: "Forgot",
    component: Forgot,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;