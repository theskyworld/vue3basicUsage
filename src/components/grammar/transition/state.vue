<script setup lang='ts'>
    import {reactive,watch} from 'vue'
    import gsap from 'gsap'

    let num = reactive({
        cur:0,
        tweenedNum:0
    })
    watch(
        ()=>{
            return num.cur;
        },
        (newVal,oldVal)=>{
            gsap.to(num,{
                duration:1,
                tweenedNum:newVal,
            })
        }

    )
    
</script>
<template>
    <div>
        <input type="number" v-model="num.cur" step="20">
        <div>
            {{num.tweenedNum.toFixed(2)}}
        </div>
    </div>

</template>
<style scoped>

</style>