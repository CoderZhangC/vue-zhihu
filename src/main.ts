import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import ColumnDetail from "./views/ColumnDetail.vue";
import store from "./store";

const routerHistory = createWebHashHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/column",
      name: "column",
      component: ColumnDetail
    }
  ]
});

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
