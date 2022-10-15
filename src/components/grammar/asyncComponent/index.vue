<script setup lang='ts'>
    import {defineAsyncComponent} from 'vue'
    const AsyncCom = defineAsyncComponent(()=>import('./async.vue'))
</script>
<template>
    <div class="content">
        <!-- 异步请求的组件要放在Suspense标签下，使用template插槽 -->
        <Suspense>
            <!-- 请求成功时的插槽 -->
            <template #default>
                <AsyncCom></AsyncCom>
            </template>
            <!-- 请求失败时的插槽 -->
            <template #fallback>
                <p>loading...</p>
            </template>
        </Suspense>
    </div> 
</template>
<style scoped>

</style>