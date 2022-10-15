<script setup lang='ts'>
    import {reactive,ref} from 'vue'
    import _ from 'lodash'

    // 数字随机平移动画效果
    // 结合lodash库使用
    // npm i lodash -S npm i @types/lodash -D
    // 生成九组1-9的数字
    // Array.apply(null,{length:81} as number[]指生成一个长度为81且每个元素均为undefined的元素（使用undefined进行占位）
    // 这里要使用ref，不能使用reactive
    let list = ref(Array.apply(null,{length:81} as number[]).map((_,index)=>{
        return {
            id:index,
            number:(index % 9) + 1
        }
    }))
    // console.log(list);
    // 使用lodash
    const random = ()=>{
        list.value = _.shuffle(list.value);
    }
</script>
<template>
    <div>
        <button style="color:white;margin-bottom:10px" @click="random">random</button>
        <!-- 添加平移过渡 -->
        <transition-group move-class="move" class="wraps" tag="div">
            <div class="items" :key="item.id" v-for="item in list">
                {{item.number}}
            </div>
        </transition-group>
    </div>

</template>
<style lang='less' scoped>
    .wraps{
        display: flex;
        flex-wrap:wrap;
        width:calc(25px * 10 + 9px);
        .items{
            width:25px;
            height:25px;
            border:solid 1px #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .move{
        transition: all 1s ease;
    }

</style>