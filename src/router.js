import { createWebHistory, createRouter } from "vue-router";
import BlogList from './components/BlogList.vue';
import BlogHome from './components/BlogHome.vue';
import BlogDetail from './components/BlogDetail.vue';
import BlogPage404 from './components/BlogPage404.vue';

const routes = [
  {
    path: "/detail/:id",
    component: BlogDetail,
  },
  {
    path: "/list",
    component: BlogList,
  },
  {
    path: "/",
    component: BlogHome,
  },
  {
    path: "/:anything(.*)",
    component: BlogPage404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 