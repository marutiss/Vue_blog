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

//createWebHistory >>createWebHashHistory
//변환시 URL에 모두 #이 붙은채로 시작
//이렇게 안하고 하면 뷰가 라우팅 하기전에 서버가 페이지를 보여주려
//할수도 있다. 이걸 방지하기 위해서는 뷰에게 맡기라는 기능개발 필요

//변환하고 나면 #뒤의 내용들은 절대 서버로 전달되지 않는다.
//서버가 없다면 hash도 괜찮다.

//navigation guard
//URL로 접속할때 코드실행이 필요할 경우
//라우팅 전(네비게이션 전)에 hook처럼 사용
//routes=[{
//  
//  beforeEnter: (to, from, next) => {
    // ...
 // }  
  
//}]