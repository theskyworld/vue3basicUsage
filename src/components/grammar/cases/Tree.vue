<script setup lang='ts'>
    import {reactive,defineEmits} from 'vue'
    // import TreeItem from './Tree.vue'
    type TreeList = {
        name:string,
        icon?:string,
        children?:TreeList[]|[],
    }
    type Props = {
        treeList?:TreeList[],
    }
    defineProps<Props>()
    // 添加点击组件的事件
    const clickItem = (item?:TreeList)=>{
        emit('on-click',item)
        console.log(item);
    }
    const emit = defineEmits(['on-click']);
</script>
<!-- 或者省略import TreeItem from './Tree.vue'，添加以下的写法，否则添加的点击事件将报错-->
<script lang="ts">
    export default{
        name:'TreeItem',
    }
</script>
<template>
    <!--递归组件，将接收到的数据进行递归-->
    <div style="margin-left:10px">
        <!-- 添加点击组件的事件 -->
        <div @click.stop="clickItem(item)" v-for="item,index in treeList" :key="index">
            {{item.name}}
            <TreeItem @click="clickItem" :treeList="item.children" v-if="item?.children?.length"></TreeItem>
        </div>
    </div>

</template>
