<script setup lang='ts'>
    import {reactive,ref,markRaw,toRaw} from 'vue'
    import A from './A.vue'
    import B from './B.vue'
    import C from './C.vue'

    type Tabs = {
        name:string,
        comName:any,
    }
    type Com = Pick<Tabs,'comName'>
    const data = reactive<Tabs[]>([
        {
            name:'A组件',
            // markRaw取消vue对该组件的带俩
            comName:markRaw(A),
        },
        {
            name:'B组件',
            // markRaw取消vue对该组件的带俩
            comName:markRaw(B),
        },
        {
            name:'C组件',
            // markRaw取消vue对该组件的带俩
            comName:markRaw(C),
        }
    ])
    // 当前展示的组件
    let curCom = reactive<Com>({
        // 默认展示第一个组件
        comName:data[0].comName
    })
    // 切换组件的函数
    const switchCom = (item:Tabs)=>{
        curCom.comName = item.comName;
    }
</script>
<template>
    <div class="content">
        <div class="tab">
            <div @click="switchCom(item)" v-for="item,index in data" :key="index">{{item.name}}</div>
        </div>
        <component :is="curCom.comName"></component>
    </div>

</template>
<style scoped>
    .tab div{
        display: inline;
        padding: 3px;
        margin: 0 3px;
        border: solid 1px #ccc;
    }
</style>