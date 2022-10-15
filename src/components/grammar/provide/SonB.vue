<script setup lang='ts'>
    import {ref,reactive,inject} from 'vue'
    import type {Ref} from 'vue'
    // 后代组件中使用inject来获取祖先组件中提供的值
    let color = inject<Ref<string>>('color');
    let changeColor = ()=>{
        // !非空断言
        color!.value = 'blue';
    }
    
</script>
<template>
    <h1>SonB组件——SonA的子组件</h1>
    <div class="box">

    </div>
    <button @click="changeColor">修改祖先组件中传递过来的数据color</button>

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