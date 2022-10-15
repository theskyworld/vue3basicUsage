<script setup lang='ts'>
    import {reactive} from 'vue'
    import Tree from '../Tree.vue'
    type TreeList = {
        name:string,
        icon?:string,
        children?:TreeList[]|[],
    }
    // 定义一个多层次的数据
    const treeList = reactive<TreeList[]>([
        {
            name:'一级导航01',
            children:[
                {
                    name:'二级导航01',
                    children:[{
                        name:'三级导航'
                    }]
                },
                {
                    name:'二级导航02',
                }
            ]
        },
        {
            name:'一级导航02',
            children:[
                {
                    name:'二级导航01'
                },
                {
                    name:'二级导航02'
                },
                {
                    name:'二级导航03'
                }
            ]
        },
        {
            name:'一级导航03',
        }
    ])
    // 添加点击组件的事件
    const getItem = (item:TreeList)=>{
        // console.log('父组件接收到的item:',item);
    }
    
</script>
<template>
    <!-- 展示组件 -->
    <!-- 将数据传递给递归组件进行数据的递归 -->
    <Tree @on-click="getItem" :treeList="treeList"></Tree>
</template>
<style scoped>

</style>