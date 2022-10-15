<template>
<!--  插槽的使用案例-->
<!--父组件-->
<!--  使用多个同一子组件，但使用的时候每个组件的部分内容不同-->
  <Table :arr="state.arr">
<!--    使用插槽，修改子组件中的部分内容-->
<!--    使用解构赋值，得到scope作用域插槽对象中的myIndex属性-->
    <template #btns="{myIndex}">
      <button @click="hdClick(myIndex)">编辑</button>
    </template>
  </Table>
  <Table :arr="state.arr">
    <template #btns>
      <button>编辑</button>
      <button>删除</button>
    </template>
  </Table>
</template>

<script lang="ts" setup>
import Table from './14-AppChild.vue'
import {reactive} from "vue";
let state = reactive({
  arr:[{
    name:'Alice',
    age:20
  },
    {
    name:'Jackson',
    age:22
  }]
})
const hdClick = (index:number)=>{
  console.log(state.arr[index].name,state.arr[index].age);
}
</script>

<style scoped>
Table{
  margin: 20px;
}
</style>