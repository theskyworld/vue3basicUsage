<script setup lang='ts'>
    // AB组件的父组件，充当桥梁的作用，接收到其中一个兄弟组件的数据后传给另一个兄弟组件
    import BrosA from './BrosA.vue'
    import BrosB from './BrosB.vue'
    import {ref} from 'vue'

    let flagRef = ref<boolean>(false);
    // 父组件中接收兄弟组件A中传递的数据
    const getFlag = (params:boolean)=>{
        flagRef.value = params;
        console.log(flagRef.value);
    }
</script>
<template>
    <div class="father">
        <!-- 接收兄弟组件A传递的数据 -->
        <BrosA @on-click="getFlag"></BrosA>
        <!-- 然后又传递给兄弟组件B -->
        <BrosB :flagRef="flagRef"></BrosB>
    </div>

</template>
<style scoped>

</style>