<script setup lang="ts">
import lifeCycle from './components/lifeCycle.vue';
import {ref} from 'vue';
import RenderDom from './components/grammar/test'
import VModel from './components/grammar/vModel.vue'
import {Directive,DirectiveBinding} from 'vue'
import SelfDirective from './components/grammar/selfDirective/selfDirective.vue'

// let flag = ref(true);
// const getNum = (num:number)=>{
//   console.log(num);
// }

// // v-model
// let isShow = ref<boolean>(true);
// let text = ref<string>('Alice');


// 自定义指令
let isFlag = ref(true);
type Dir = {
  backgroundColor:string,
}
    // 定义一个自定义指令，'v'+'自定义指令名'
    const vMove:Directive = {
        // 自定义指令的钩子
        // 使用这些钩子执行相应的逻辑
        // 元素初始化时调用
        created(){
            console.log('created is called...')

        },
        // 自定义指令绑定到元素之后调用，只调用一次
        beforeMount(){
            console.log('beforeMount is called...')

        },
        // 元素插入到父级DOM中之后调用
        mounted(el:HTMLElement,dir:DirectiveBinding<Dir>){
            console.log('mounted is called...');
            console.log(el,dir);
            el.style.backgroundColor = dir.value.backgroundColor;
        },
        // mounted(...args:Array<any>){
        //     console.log('mounted is called...');
        //     console.log(args);
        // },
        // 元素更新前调用
        beforeUpdate(){
            console.log('beforeUpdate is called...')

        },
        // 等价于vue2中的update
        updated(){
            console.log('updated is called...')

        },
        // 元素被移除前调用
        beforeUnmount (){
            console.log('beforeUnmount is called...')

        },
        // 元素被移除后调用，只调用一次
        unmounted (){
            console.log('unmounted  is called...')
        }
    }
    // 函数形式
    let color = ref<string>('');
    const vMove2:Directive = (el:HTMLElement,binding:DirectiveBinding<Dir>)=>{
      el.style.backgroundColor = binding.value.backgroundColor;
    }
</script>

<template>
  <!-- 生命周期钩子 -->
 <!-- <lifeCycle v-if="flag"></lifeCycle> -->
 <!-- <hr> -->
 <!-- <button @click="flag = !flag">销毁-挂载lifeCycle组件</button> -->

 <!-- tsx -->
 <!-- <RenderDom @on-click="getNum" title="props传值"></RenderDom> -->

 <!-- v-model -->
 <h2>父组件</h2>
 <!-- <p>isShow:{{isShow}}</p>
 <p>text:{{text}}</p>
 <div><button @click="isShow = !isShow">开关</button></div> -->
 <hr>
 <!-- 在父组件中为自定义子组件使用v-model进行数据的绑定 -->
 <!-- 支持多个v-model绑定多条数据 -->
 <!-- <VModel v-model:textVal="text" v-model="isShow"></VModel> -->
 <!-- 内置修饰符:trim、lazy、number等-->
 <!-- 自定义修饰符  -->
 <!-- <VModel v-model:textVal.isRed="text" v-model="isShow"></VModel> -->

 <!-- 自定义指令 -->
 <div>
    <button @click="isFlag=!isFlag">切换</button>
    <!-- 在子组件中使用自定义指令 -->
    <!-- 绑定自定义参数、自定义修饰符 -->
    <!-- <SelfDirectives v-if="isFlag" v-move:selfParams.selfSys="{backgroundColor:'red'}"></SelfDirectives> -->
    <!-- 函数形式 -->
    <input type="text" v-model="color">
    <SelfDirective v-move2="{backgroundColor:color}"></SelfDirective>
 </div>


</template>

<style scoped>

</style>
