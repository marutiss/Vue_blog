import { createWebHistory, createRouter } from "vue-router";
import BlogList from './components/BlogList.vue';
import BlogHome from './components/BlogHome.vue';
import BlogDetail from './components/BlogDetail.vue';
import BlogPage404 from './components/BlogPage404.vue';
import BlogAuthor from './components/BlogAuthor.vue';
import BlogComment from './components/BlogComment.vue';
const routes = [
  {
    path: "/detail/:id",
    component: BlogDetail,
    children: [
      {
        path: "author",
        component: BlogAuthor,
      },
      {
        path: "comment", //상대경로 
        component: BlogComment,
      },
    ]
  },

  {
    path: "/list",
    component:{ 
        List: BlogList,
        comments: BlogComment,
    }
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