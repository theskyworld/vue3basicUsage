<script setup lang='ts'>
import Slot from '../slot.vue';
    
</script>
<template>
    <!-- css新特性——B组件 -->
    <div>
        B组件
        <!-- 定义一个插槽 -->
        <slot></slot>
    </div>

</template>
<style scoped>
    /* 插槽选择器 */
    /* 修改插槽中内容的样式，内容在A.vue组件中添加 */
    :slotted(.slot){
        color:red;
    }

    /* 设置全局样式的方法：移除掉style标签中的scoped关键字或者使用全局选择器 */
    /* 全局选择器 */
    :global(span){
        display: inline-block;
        width:100px;
        height: 35px;
        background-color: bisque;
        margin:10px;
    }

</style>