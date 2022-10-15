<template>
<!--父组件-->
<!--  使用子组件-->
<!--  子组件中的num来自于父组件中定义的num的值(20)，或者父组件中未定义的话，则使用子组件中默认的num的值(30)-->
<!--  通过:num，即v-bind与子组件进行数据绑定-->
  <Child ref="childEle" @getSonData2="getSonData2" @getSonData1="getSonData1" :list="list" :num="num"></Child>
  <!-- 修改通过num属性传给子组件的值 -->
  <button @click="num++">+</button>
  <!-- 修改list的值 -->
  <button @click="list.push(13)">push</button>
  <hr>
</template>

<script lang="ts" setup>
import Child from './deliverDataBetweenFSChild.vue'
import {ref,reactive,onMounted} from 'vue'
//定义num数字数据，然后传给子组件
let num = ref(20);
// 定义list数组数据，然后传给子组件
let list = reactive<number[]>([1,2,3]);

// 接收子组件中传递过来的数据
const getSonData1 = (sonData:number[],flag:boolean)=>{
  console.log('父组件接收到的子组件的数据1:',sonData,flag);
}
const getSonData2 = (sonData:number[],flag:boolean)=>{
  console.log('父组件接收到的子组件的数据2:',sonData,flag);
}

// 获取子组件的内容
let childEle = ref<HTMLElement>();
onMounted(()=>{
  // 子组件中使用defineExpose()暴露数据之前，获取不到子组件中的数据，使用之后才可获取到
  console.log('childEle-son defineExpose before:',childEle.value);
})
</script>

<style scoped>

</style>