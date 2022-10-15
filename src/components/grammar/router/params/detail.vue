<template>
<!--  详情页面-->
  <div class="header">
    <button @click="router.back()">返回</button>
    <h2>详情页面</h2>
  </div>
  <div class="content">
<!--    接收query传递的参数-->
<!--    <h3>品牌:{{route.query.name}}</h3>-->
<!--    <h3>价格:{{route.query.price}}</h3>-->
<!--    <h3>ID:{{route.query.id}}</h3>-->
<!--    根据params传递的id找到对应完整的数据item-->
    <h3>品牌:{{item.name}}</h3>
    <h3>价格:{{item.price}}</h3>
    <h3>ID:{{item.id}}</h3>
  </div>
</template>

<script lang='ts' setup>
import {useRoute,useRouter} from 'vue-router'
import {data} from './list.json'
//router实现路由的跳转
const router = useRouter();
//接收参数
//route接收参数
const route = useRoute();

//接收使用params传递的id，根据id找到对应的完整的数据
const item = data.find(value=>value.id === route.params.id);

</script>

<style scoped>

</style>