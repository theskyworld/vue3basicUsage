<template>
<!--子组件-->
  <table>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
      <th>操作</th>
    </tr>
    <tr v-for="item,index in arrTyped" :key="index">
<!--      item的初始类型为any，需要对其进行断言-->
<!--      <td>{{(item as {name:string}).name}}</td>-->
      <td>{{item.name }}</td>
      <td>{{item.age}}</td>
      <td>
        <slot name="btns" :myIndex="index"></slot>
      </td>
    </tr>
  </table>
</template>

<script lang="ts" setup>
// import {userArrType} from '../../types/table'
let props = defineProps({
  arr:{
    type:Array,
    default:[]
  }
})
//初始arr的类型为any，需要对其进行断言，断言为父组件中arr数据的格式类型
//定义以下的接口进行使用
//一般会将该接口提取到相应的文件中，通过引入来使用
// interface userArrType{
//   name:string,
//   age:18
// }
let arrTyped = props.arr as userArrType[];
</script>

<style scoped>
table{
  border-collapse: collapse;
}
table,th,td{
  border: solid 1px #888888;
}
th,td{
  padding: 10px;
}
</style>