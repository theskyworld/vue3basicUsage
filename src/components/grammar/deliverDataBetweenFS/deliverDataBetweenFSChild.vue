<template>
<!--子组件-->
<!--  展示num的值-->
  <p>{{`num:${num}`}}</p>
  <p>{{`sonNum:${sonNumRef}`}}</p>
  <!-- 修改sonNum的值 -->
  <button @click="reviseSonNum">修改sonNum</button>
  <!-- 展示list的值 -->
  <p>list:{{list}}</p>
  <p>sonList:{{sonList}}</p>
  <button @click="reviseSonList">修改sonList</button>
  <!-- 子组件传递数据给父组件 -->
  <button @click="sendToFather1">传递数据给父组件1</button>
  <button @click="sendToFather2">传递数据给父组件2</button>
</template>

<script lang="ts" setup>
import {defineProps,reactive,withDefaults,ref} from 'vue'
//使用defineProps接收父组件中传递过来的数据
//获取到的数据一般只读不改
// 一般写法
// defineProps({
//   num : {
//     type : Number,
//     default : 30
//   }
// })
// setup语法糖中写法
type props = {
  num?:number,
  list?:number[],
}
// defineProps<props>();
// 指定默认值的写法
let props = withDefaults(defineProps<props>(),{
  num:123,
  list:()=>[3,4,5],
})
// 新建一个子组件中接收到的父组件的副本，用于子组件中的修改
// 这是传递的数据在父组件中的定义:
// //定义num数字数据，然后传给子组件
// let num = ref(20);
// // 定义list数组数据，然后传给子组件
// let list = reactive<number[]>([1,2,3]);

let sonNumRef = ref(props.num);
let sonList = props.list;
// 修改num的值
// 需要使用ref封装后才能引起页面的重新渲染，并且只能使得页面上sonList的值改变
const reviseSonNum = ()=>{
  sonNumRef.value++;
  // console.log(sonNumRef.value);
}
// 修改list的值
// 直接就可以进行修改并引起页面的重新渲染，并且页面上list和sonList的值都会改变
const reviseSonList = ()=>{
  sonList.push(...[7,8,3]);
}

// 使用emit将数据传送给父组件
let sonData = reactive<number[]>([7,8,9]);
//defineEmits接收的第一个参数为一个数组，里面为父组件中为获得数据要调用的函数名
const emit = defineEmits(['getSonData1','getSonData2']);
// // 一个子组件中的事件触发多个父组件中的事件
// const sendToFather = ()=>{
//   emit('getSonData1',sonData,true);
//   emit('getSonData2',sonData,false);
// }
// 多个子组件中的事件触发多个父组件中的事件
const sendToFather1 = ()=>{
  emit('getSonData1',sonData,true)
}
const sendToFather2 = ()=>{
  emit('getSonData2',sonData,false);
}

// 在子组件中使用defineExpose()将数据暴露给父组件
interface Person{
  name:string,
  age?:number,
  [props:string|symbol]:any,
}
let person:Person = {
  name:'Alice',
  age:18,
  sayHello():void{
    console.log('hello')
  }
}
let n:number = 30;
let str:string = 'hello';
defineExpose({
  person,
  n,
  str
})



</script>

<style scoped>

</style>