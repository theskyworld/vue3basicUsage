<template>
  <p>{{num}}</p>
  <button @click="num++">click</button>
  <p>{{dbNum}}</p>
  <hr>
  <p>{{objRet.numObj}}</p>
  <button @click="objRet.numObj++">click</button>
  <p>{{dbNum2}}</p>

</template>

<script lang="ts" setup>
//computed()计算属性
import {ref,computed,reactive} from 'vue';
//对于基本数据类型
let num = ref(20);
let dbNum = computed(()=>{
  return num.value * 2;
})
console.log(dbNum);
//对于引用数据类型
let obj = {
  numObj : 20,
}
let objRet = reactive(obj);
let dbNum2 = computed(()=>{
  return objRet.numObj * 2;
})


</script>

<style scoped>

</style>