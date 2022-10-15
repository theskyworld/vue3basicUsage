<template>
<!--  全选和全不选框-->
<div class="container">
  <input type="checkbox" v-model="checkAll">全选/全不选
  <ul>
    <li v-for="item,index in list" :key="index">
      <input type="checkbox" v-model="checkList[index]">{{item}}
    </li>
  </ul>
</div>
</template>

<script lang="ts" setup>
import {computed, defineComponent, nextTick, onMounted, onUpdated, reactive, ref, toRefs} from 'vue'
//定义一个接口，对data数据进行类型注解
//将接口提取到types下的check.d.ts文件中
// interface dataType{
//   list:number[],
//   checkList:boolean[],
// }
let data = reactive<dataType>({
  list:[10,20,30,40,50],
//  添加类型注解后，直接写checkList:[]即可使用
  checkList:[],
})
data.checkList = data.list.map(()=>false);
let {list,checkList} = toRefs(data);
// let {list,checkList} = toRefs(reactive({
//   list:[10,20,30,40,50],
//   checkList : [false,false,false,false],
// }))
let checkAll = computed({
  get(){
    return !data.checkList.includes(false);
  },
  set(newVal:boolean){
    data.checkList = data.checkList.map(()=>newVal);
  }
})
</script>

<style scoped>
li{
  list-style: none;
}
</style>