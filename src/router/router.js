import Main from "@/components/pages/MainPage";
import { createRouter, createWebHashHistory } from "vue-router/dist/vue-router";
import PostPage from "@/components/pages/PostPage";

const routes = [
  {
    path: "/",
    component: PostPage,
  },
  {
    path: "/posts",
    component: Main,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
