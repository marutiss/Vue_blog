import { createWebHistory, createRouter } from "vue-router";
import BlogList from './components/BlogList.vue';
import BlogHome from './components/BlogHome.vue';
import BlogDetail from './components/BlogDetail.vue';


const routes = [
  {
    path: "/detail",
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 