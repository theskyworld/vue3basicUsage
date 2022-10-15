<script setup lang='ts'>
    import {ref,reactive,inject} from 'vue'
    import type {Ref} from 'vue'
    import SonB from './SonB.vue'

    // 后代组件中使用inject来获取祖先组件中提供的值
    let color = inject<Ref<string>>('color');
    
</script>
<template>
    <h1>SonA组件——祖先组件的子组件</h1>
    <div class="box">

    </div>
    <hr>
    <SonB></SonB>

</template>
<style scoped>
    .box{
        height: 50px;
        width:50px;
        border:solid 1px #ccc;
        /* 使用color */
        /* 使用v-bind绑定setup中的color的值，background-color的值跟随color的值变化而变化 */
        background-color: v-bind(color);
    }
</style>