<script setup lang='ts'>
    import Bus from '@/Bus'
import { lowerFirst } from 'lodash';
    import {ref,getCurrentInstance, onMounted} from 'vue'
    // 兄弟组件B
    // 接收父组件中传递过来的兄弟组件A传递的数据
    // type Props = {
        // flagRef:boolean,
    // }
    // defineProps<Props>();


    // 使用Bus发布订阅接收数据
    // let bflagRef = ref<boolean>(true);
    // Bus.on('on-click',(flagRef:boolean)=>{
    //     bflagRef.value = flagRef;
    // })

    // 使用mitt接收数据
    // 获取当前组件实例
    const instance = getCurrentInstance();
    // 使用.on接收数据
    instance?.proxy?.$Bus.on('on-num', (num:number) => {
        console.log(num,'===========>B')
    })
    // 接收所有数据
    instance?.proxy?.$Bus.on('*',(type,num)=>{
        console.log(type,num,'B组件...')
    })
    // 使用.off移除事件监听
    const Fn = (num: any) => {
        console.log(num, '===========>B')
    }
    instance?.proxy?.$Bus.on('on-num',Fn)//listen
    instance?.proxy?.$Bus.off('on-num',Fn)//unListen
    // 使用.clear清空所有监听
    instance?.proxy?.$Bus.all.clear() 
</script>
<template>
    <div>
        <h2>兄弟组件B</h2>
        <!-- {{bflagRef}} -->
    </div>
</template>
<style scoped>

</style>