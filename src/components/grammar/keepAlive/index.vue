<script setup lang='ts'>
    import {ref} from 'vue'
    import Form from './Form.vue'
    import Slider from './Slider.vue'
    const flag = ref<boolean>(true) 
    
</script>
<template>
    <el-button type='primary' @click='flag = !flag'>切换组件</el-button>
    <!-- include属性，指定要缓存的组件 -->
    <!-- exclude属性，指定不缓存的组件 -->
    <!-- max属性，指定缓存当前活跃排名前n个的组件 -->
    <!-- <keep-alive :max="10" :exclude="['Form']">

    </keep-alive> -->
    <keep-alive :exclude="['Form','Slider']">
        <Form v-if="flag"></Form>
        <Slider v-else></Slider>
    </keep-alive>

    <!-- transition组件，为组件的切换添加过渡样式 -->
    <!-- <transition name="fade">
        <Form v-if="flag"></Form>
        <Slider v-else></Slider>
    </transition> -->
    
</template>