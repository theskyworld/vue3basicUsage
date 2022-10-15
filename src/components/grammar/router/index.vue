<template>
  <div class="control">
<!--  router-link定义要跳转的路由的点击链接  -->
<!--    与a标签的区别：a标签跳转时会刷新页面，router-link不会-->
<!--    <span><router-link to="/">login</router-link></span>-->
<!--    <span><router-link to="/register">register</router-link></span>-->

    <!--   命名路由跳转方式-->
<!--    <span><router-link :to="{name:'Login'}">login</router-link></span>-->
<!--    <span><router-link :to="{name:'Register'}">register</router-link></span>-->

<!--  js跳转方式，编程式导航  -->
    <button @click="toPage('/')">login</button>
    <button @click="toPage('/register')">register</button>
  </div>
  <div class='content'>
<!--  router-view定义跳转路由组件展示的位置  -->
    <router-view></router-view>
  </div>

</template>

<script lang='ts' setup>
//编程式导航
import {useRouter} from "vue-router";

const router = useRouter();
const toPage = (url:string)=>{
//  字符串形式
//   router.push(url);
//  对象形式
  router.push({
    // path:url,
  //  命名式（传入的参数相应地改为路径的name的值）
    name:url,
  })

}

</script>

<style scoped>
.control span{
  border: solid 2px #1a1a1a;
  cursor: pointer;
  margin:10px 10px;
}

</style>