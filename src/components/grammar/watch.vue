<template>
<div>
  <p>{{num}}</p>
  <button @click="num++">click</button>
  <p>{{objRet.numObj}}</p>
  <button @click="objRet.numObj++">click</button>
  <p>{{objRet2.numObj2}}</p>
  <button @click="objRet2.numObj2++">click</button>
  <button @click="stopWatch">停止监听</button>
</div>
</template>

<script lang="ts" setup>
//watch的使用
import {reactive, ref, watch, watchEffect} from 'vue'
//监听响应式数据
// watch(要监听的响应式数据的封装后的对象,数据更新时执行的回调函数)
let num = ref(10);
console.log(num.value);
let obj = {
  numObj : 20,
}
let objRet = reactive(obj);
let obj2 = {
  numObj2 : 20,
}
let objRet2 = reactive(obj2);
//写法一
watch(objRet,(newVal,oldVal)=>{
  console.log(newVal,oldVal);
})
//写法二
watch(()=>objRet.numObj,(newVal,oldVal)=> {
  console.log(newVal, oldVal);
});
//写法三，监听多个数据对象
watch([()=>objRet.numObj,()=>objRet2.numObj2],(newVal,oldVal)=> {
  console.log(newVal, oldVal);
});

// 配置项
watch(obj,(newVal,oldVal)=>{
    //obj可以为一个函数，返回一个要监听的值
    
},{
    deep:true,//开启深度监听。对于reactive数据对象，不开启此项也可进行深度监听
    immediate:true,//立即开启监听
})

//watchEffect()
//页面刷新时会立即进行监听，也就是页面刚刷新时，里面的代码就会先执行一次，以后数据每变化一次就又执行一次
//写在里面的被监听的数据，只要发生变化，就会触发watchEffect()里面的代码的执行
//与watch()的区别在于：watch()多用于获取变化前后的数据，watchEffect()多用于因数据变化而触发的逻辑代码的执行
watchEffect(()=>{
  console.log(objRet.numObj);
})
    //先打印'before'再打印objRet.numObj
const stop = watchEffect((oninValidate)=>{
  console.log(objRet.numObj);
  oninValidate(()=>{
      console.log('before')
  })
})
// 停止监听
const stopWatch = ()=>stop()
</script>

<style scoped>

</style>