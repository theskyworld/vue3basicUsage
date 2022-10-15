<template>
  <div>
    <p>第一个组件</p>
    <div><span v-html="html"></span></div>
  </div>

</template>

<script lang="ts">
import {defineComponent,onBeforeMount,onMounted} from "vue";
//使用defineComponent函数来定义一个组件
export default defineComponent({
  //生命周期钩子
  //setup()生命周期钩子，替代之前的beforeCreate和created，执行时机没变
  //以后的代码都写在该函数中
  setup(){
    let html = '<p style="color:red">v-html的内容</p>';
    let message = 'message'
    console.log('执行了setup');
    //代替之前的beforeMount，执行时机没变
    onBeforeMount(()=>{
      console.log('执行了onBeforeMount')
    });
    //代替之前的mounted，执行时机没变
    onMounted(()=>{
      console.log('执行了onMounted')
    });
  //  ....
  //  返回要展示在页面中的数据
    return{
      html,
      message,
    }
  }
})
</script>

<style scoped>

</style>