<script setup lang='ts'>
    import B from './B.vue'
    import {ref} from 'vue'
    import { useCssModule } from 'vue';


    // 动态css
    // 通过styleRef绑定动态样式
    const styleRef = ref({
        color:'red'
    })
    // 2s后自动修改样式
    setTimeout(()=>{
        styleRef.value.color = 'blue'
    },2000)

    // css module相关钩子
    const css = useCssModule('cm');
    console.log(css);
</script>
<template>
    <!-- css新特性——组件A -->
    <!-- <B> -->
        <!-- 插槽选择器 -->
        <!-- 往插槽中添加内容 -->
        <!-- <span class="slot">插槽选择器</span> -->
        <!-- 全局选择器 -->
        <!-- <span class="global">全局选择器</span> -->
    <!-- </B> -->

    <!-- 动态css -->
    <div class="dynamicCss">
        动态css
    </div>

    <!-- css module -->
    <div :class="[cm.div,cm.border]">
        css module
    </div>

</template>
<style module="cm">
    .dynamicCss{
        color:v-bind('styleRef.color')
    }
    .div{
        color:red
    }
    .border{
        border:solid 3px #ccc;
    }
</style>