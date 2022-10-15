<script setup lang='ts'>
    import {defineEmits,ref,getCurrentInstance} from 'vue'
    import Bus from '@/Bus'
    // 兄弟组件A
    // 经由父组件传递数据
    // const emit = defineEmits(['on-click']);
    // let flagRef = ref(true);
    // const emitB = ()=>{
        // flagRef.value = !flagRef.value;
        // emit('on-click',flagRef.value);
    // }


    // 使用Bus订阅发布传递数据
    // let flagRef = ref(false);
    // const emitB = ()=>{
    //     flagRef.value = !flagRef.value;
    //     Bus.emit('on-click',flagRef)
    // }
    

    // 使用mitt传递数据
    // 获取当前组件的实例
    const instance = getCurrentInstance();
    // 传递数据
    const emitB = () => {
        instance?.proxy?.$Bus.emit('on-num', 100)
    }   

</script>
<template>
    <div>
        <h2>兄弟组件A</h2>
        <!-- <button @click="emitB">A兄弟组件派发数据flag:{{flagRef}}</button> -->
        <button @click="emitB">使用mitt传递数据</button>
    </div>

</template>
<style scoped>

</style>