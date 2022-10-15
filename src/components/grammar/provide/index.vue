<script setup lang='ts'>
import SonA from './SonA.vue'
import {ref,provide,readonly} from 'vue'
let colorValRef = ref<string>('red')
// 祖先组件通过provide将值提供给所有的后代，需要使用的后代通过inject获取后使用
// 且默认情况下可以被子组件进行修改
// 但是添加readonly方法可以使得数据不能被子组件修改
provide('color',colorValRef);
// provide('color',readonly(colorValRef));
</script>
<template>
    <h1>祖先组件</h1>
    <label for="color1">
        <input type="radio" v-model="colorValRef" value="red" id="color1">
        红色
    </label>
    <label for="color2">
        <input type="radio" v-model="colorValRef" value="pink" id="color2">
        粉色
    </label>
    <label for="color3">
        <input type="radio" v-model="colorValRef" value="orange" id="color3">
        橘色
    </label>
    <div class="box">
    </div>
    <hr>
    <SonA></SonA>
</template>
<style scoped>
    label{
        cursor: pointer;
    }
    .box{
        height: 50px;
        width:50px;
        border:solid 1px #ccc;
        background-color: v-bind(colorValRef);
    }

</style>