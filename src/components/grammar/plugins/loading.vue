<script setup lang='ts'>
    import {ref} from 'vue'

    // 控制loading的开关
    const isShow = ref<boolean>(false);
    //创建开启和关闭的方法供外界对loading进行控制
    // 开启loading
    let show = ()=>{
        isShow.value = true;
    }
    // 关闭loading
    let hide = ()=>{
        isShow.value = false;
    }
    // 对外暴露当前组件的属性和方法
    defineExpose({
        isShow,
        show,
        hide,
    })
    
</script>
<template>
    <!-- loading组件 -->
    <div v-if="isShow" class="loading">
        <div class="loading-content">Loading...</div>
    </div>

</template>
<style scoped lang='less'>
    .loading{
        position: fixed;
        inset:0;
        background-color: rgba(0,0,0,.8);
        display: flex;
        justify-content: center;
        align-items: center;
        &-content{
            font-size: 30px;
            color: #fff;
        }
    }

</style>