<template>
  <div>
    <p>{{num}}</p>
    <button @click="hdClick">click</button>
  </div>

</template>

<script lang="ts" setup>
//toRefs()解构的使用
import {reactive, toRefs} from "vue";

let obj = {
  num: 20,
}
//使用reactive进行的解构，数据不是响应式的，获取数据的值时不需要添加.value
// let {num} = reactive(obj);
// console.log(num);//20
//使用toRefs进行解构，数据是响应式的，获取数据的值时需要添加.value
let {num} = toRefs(reactive(obj));
console.log(num.value);
const hdClick = ()=>num.value++;
</script>

<style scoped>

</style>