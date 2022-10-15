<script setup lang='ts'>
    // 生命周期
    import {onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,onRenderTracked,onRenderTriggered,ref} from 'vue'

    // 定义和修改一个响应式数据
    let message = ref<string>('vu3生命周期');
    const reviseMessage = ()=>{
        message.value = 'reviseMessage修改后的内容'
    }
    // beforeCreate和created使用setup()去代替
    console.log('setup');//等价于beforeCreate和created中的输出
    // onBeforeMount及之前不能获取到DOM元素
    onBeforeMount(()=>{
        console.log('挂载组件之前...');
    })
    // 获取DOM元素
    //onMounted及之后可以获取DOM元素
    // ref的调用要写在外面
    let messageEle = ref<HTMLParagraphElement>();
    onMounted(()=>{
        console.log('挂载组件之后...');
        // 对获取到的元素的访问或使用写在里面
        console.log(messageEle.value)
    })
    onBeforeUpdate(()=>{
        console.log('页面更新之前...')
    })
    onUpdated(()=>{
        console.log('页面更新之后...')
    })
    onBeforeUnmount(()=>{
        console.log('销毁组件之前...')
    })
    onUnmounted(()=>{
        console.log('销毁组件之后...')
    })
    onRenderTracked((e)=>{
        console.log(e);
    })
    onRenderTriggered(e=>{
        console.log(e);
    })
</script>
<template>
    <div class="container">
        <p ref="messageEle">{{message}}</p>
        <button @click="reviseMessage">修改message</button>
    </div>
</template>
<style scoped>

</style>