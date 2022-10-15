<script setup lang='ts'>
import { getCurrentInstance } from 'vue';

    // 自定义插件loading的使用
    const instance = getCurrentInstance();
    instance?.proxy?.$loading.show();
    // 5s后关闭loading
    setTimeout(()=>{
        instance?.proxy?.$loading.hide();
    },5000)
</script>
<template>
    <!-- 全局函数、全局变量 -->
    <p>{{$filters.format('Alice')}}</p>
    <p>{{$env}}</p>

    <div></div>
    <div class="content"></div>

</template>
<style scoped>
    .content{
        width:300px;
        height: 300px;
        border: solid 2px #ccc;
    }

</style>