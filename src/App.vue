<template>
  <nav class="navbar navbar-expand-lg bg-black">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">Features</a>
          <a class="nav-link" href="#">Pricing</a>
          <a class="nav-link disabled">Disabled</a>
        </div>
      </div>
    </div>
  </nav>
  
  <router-link to="/">홈 </router-link>
  <router-link to="/list">리스트 페이지</router-link>

  <div class="mt-4"> <!--부트스트랩 문법: mt-->
  <router-view :블로그글="블로그글"></router-view>
  </div>

  <!-- <List :블로그글="블로그글" /> -->

</template>

<script>
import data from './assets/data.js'
// import BlogList from './components/BlogList.vue'

export default {
  name: 'App',
  data(){
    return{
      블로그글:  data,
      

    }
  },
  components: {
    // List: BlogList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

<!--
복잡한 데이터 : 
[ 로 시작 >>array
{}로 시작 >>object

페이지를 만들기 위해선
1. 페이지를 컴포넌트로 만들자
2. 라우터에 {}로 하나 만들어주기
3. props전송은 <router-view>에 적용하기
  >> <router-view : 작명="데이터명">

상세페이지 백만게 만들기
라우터>>루트>> /detail/x >> x번 개시물보여주기
/detail/:id >>파라미터 문법 >>문자를 넣으면 됨
$route.params.id >>id이름의 파라미터를 가져온다
/detail/:id(정규식) >>뷰 라우터 4 공식페이지 참고>>뷰라우터 4관련으로 검색할것

$route 현재경로
$router 페이지 이동관련

-->