<template>
  <div class="wrapper">
    <div ref='line' class="loadingLine"></div>
  </div>
  <div class="control">
    <router-link to="/user1">to user1</router-link>
    <router-link style="margin:32px" to="/user2">to user2</router-link>
  </div>
  <hr>
  <div class="content">
<!--    命名路由视图-->
<!--    跳转至default组件-->
    <router-view  #default="{route,Component}">
      <transition :enter-active-class="`animate__animated ${route.meta.transition}`">
        <component :is="Component"></component>
      </transition>
    </router-view>
<!--    跳转至b组件-->
    <router-view name="b"></router-view>
<!--    跳转至c组件-->
    <router-view name="c"></router-view>
  </div>
</template>

<script lang='ts' setup>
import {ref,onMounted} from 'vue'
import 'animate.css'
//加载条加载速度的初始值
let speed = ref<number>(1);
let line = ref<HTMLElement>();
//window动画的命名，用于完成动画时的清除操作
let timer = ref<number>(0);

//开启加载条的加载
const startLoading = ()=>{
  //获取进度条元素
  let dom = line.value as HTMLElement;
  speed.value = 1;
//  使用window动画改变进度条元素的宽度，演绎加载的动画过程
//  相较于计时器的优势：计时器每次都会引起页面的重绘和回流，但是window动画只会引起一次页面的重绘和回流
  timer.value = window.requestAnimationFrame(function fn(){
    if(speed.value < 90){
      speed.value += 1;
    //  改变加载条的宽度
      dom.style.width = speed.value + '%'
      //因为requestAnimationFrame函数调用后只会执行一个，加载条只有走动一次，所以进行递归调用
      timer.value = window.requestAnimationFrame(fn)
    }else{
      speed.value = 1;
      //清除window动画，类似于清除定时器
      window.cancelAnimationFrame(timer.value);
    }
  })
}
//结束加载条的加载
const endLoading = ()=>{
  let dom = line.value as HTMLElement;
  setTimeout(()=>{
    window.requestAnimationFrame(()=>{
      speed.value = 100;
      dom.style.width = speed.value + '%'
    })
  })
}

// onMounted(()=>{
//   startLoading()
// })
//在其他组件中使用时，需要将startLoading和endLoading方法暴露出去
defineExpose({
  startLoading,
  endLoading,
})

</script>

<style scoped lang="less">
  .wrapper{
    position: fixed;
    top: 0;
    width: 100%;
    height: 1px;
    .loadingLine{
      height: inherit;
      width: 0;
      background-color: blue;
    }
  }
</style>