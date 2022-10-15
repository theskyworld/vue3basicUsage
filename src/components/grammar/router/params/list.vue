<template>
<!--  列表页面-->
  <div class="header">
    <h2>列表页面</h2>
  </div>
  <div class="table">
    <table>
      <tr>
        <th>商品名</th>
        <th>价格</th>
        <th>操作</th>
      </tr>
      <tbody>
      <tr v-for="item in _data" :key="item.id">
        <th>{{item.name}}</th>
        <th>{{item.price}}</th>
        <th>
          <button @click="toDetail(item)">详情</button>
        </th>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang='ts' setup>
  import {data} from './list.json'
  import {RootObjectData} from "./RootObject";
  import {useRouter} from 'vue-router'

  const _data = data;
  const router = useRouter();
  const toDetail = (item:RootObjectData)=>{
    router.push({
      //  路由传参
      //  使用query传递参数，参数会显示在url中，刷新页面值不会丢失
      // path:'/detail',
      // query:item,//值只能为一个对象

    //  使用params传递参数，参数不展示在url中，存在内存中，刷新页面值会丢失
      name:'Detail',//只能使用name的形式
      params: {
        id:item.id,//路径中配置：path:'/detail/:id',
      },
    })
  }
</script>

<style scoped>
  .table{
    width: 400px;
  }
</style>