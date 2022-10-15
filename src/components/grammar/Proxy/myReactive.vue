<template>
  <div class="container">
    <input type="text" ref="ipt">
    <p ref="op"></p>
  </div>

</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
let ipt = ref();
let op = ref();
let obj = {
  value:'000000'
}
// let obj = [1,2,3]
//模拟reactive，封装obj数据，进行数据的双向绑定
function myReactive(obj){
  return new Proxy(obj,{
    get(target,property){
      return target[property];
    },
    set(target,property,newVal){
      target[property] = newVal;
      return true;
    }
  })
}
let objMyRet = myReactive(obj);
onMounted(()=>{
  // console.log(ipt.value);
  // console.log(op.value);
  ipt.value.value = objMyRet.value;
  op.value.innerHTML = objMyRet.value;
  ipt.value.addEventListener('input',e=>{
    objMyRet.value = e.target.value;
    // console.log(objMyRet.value);
    op.value.innerHTML = objMyRet.value;
  })

})


</script>

<style scoped>

</style>