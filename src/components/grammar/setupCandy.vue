<template>
  <div>
    <p>{{num}}</p>
    <button @click="num++">click</button>
  </div>

</template>

<script lang="ts" setup>
//setup()语法糖
//在script标签中添加setup关键字之后，就等于将script标签中所有的内容会自动添加到之前的setup()方法中
//可以省略export default defineComponent({setup(...return{...})})的书写
//类似于直接在js或ts文件中写js或ts代码
import {reactive,toRefs} from 'vue';
let obj = {
  num:20,
}
let objRet = reactive(obj);
let {num} = toRefs(objRet);

</script>

<style scoped>

</style>