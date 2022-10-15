<script setup lang='ts'>
    import {ref,reactive} from 'vue'
    import 'animate.css'
    import gsap from 'gsap'
    let flag = ref<boolean>(true);

    // transition生命周期钩子
    // 进入的钩子
    // const EnterFrom = (targetEle:Element)=>{
    //     console.log('过渡进入之前...',targetEle);
    // }
    // const EnterActive = (targetEle:Element,done:Function)=>{
    //     console.log('过渡进入效果...',targetEle);
    //     // 过渡进入效果3s后才完成
    //     setTimeout(()=>{
    //         done();
    //     },3000)
    // }
    // const EnterTo = (targetEle:Element)=>{
    //     console.log('过渡进入之后...',targetEle);
    // }
    // const EnterCancel = (targetEle:Element)=>{
    //     console.log('过渡进入被取消...',targetEle)
    // }
    // // 离开的钩子
    // const LeaveFrom = (targetEle:Element)=>{
    //     console.log('过渡离开之前...',targetEle);
    // }
    // const LeaveActive = (targetEle:Element,done:Function)=>{
    //     console.log('过渡离开效果...',targetEle);
    //     // 过渡离开效果3s后才完成
    //     setTimeout(()=>{
    //         done();
    //     },3000)
    // }
    // const LeaveTo = (targetEle:Element)=>{
    //     console.log('过渡离开之后...',targetEle);
    // }
    // const LeaveCancel = (targetEle:Element)=>{
    //     console.log('过渡离开被取消...',targetEle)
    // }
    // 结合第三方库gasp使用，实现动画效果
    // npm i gsap -S
    const EnterFrom = (targetEle:Element)=>{
        gsap.set(targetEle,{
            width:0,
            height:0,
        })
    }
    const EnterActive = (targetEle:Element,done:gsap.Callback)=>{
        gsap.to(targetEle,{
            width:200,
            height:200,
            onComplete:done,
        })
    }
    const Leave = (targetEle:Element,done:gsap.Callback)=>{
        gsap.to(targetEle,{
            width:0,
            height:0,
            onComplete:done,
        })
    }
    let list:number[] = reactive<number[]>([1,2,3,4,5,6,7,8,9,10]);
    let addNum = ()=>{
        list.push(list.length + 1);
    }
    let popNum = ()=>{
        list.pop();
    }
</script>
<template>
    <div class="content">
        <button @click="flag = !flag">siwtch</button>
        <!-- 基本使用 -->
        <!-- 使用name属性+固定的类名 -->
        <!-- <transition name="fade">
                <div  v-if="flag" class="box"></div>
            </transition> -->
        <!--appear属性指定初次页面渲染时的过渡效果，仅在初次在页面上刚出现时有效  -->
        <!-- <transition
            appear
            appear-from-class="appear-from"
            appear-active-class="appear-active"
            appear-to-class="appear-to"
        >
            <div  v-if="flag" class="box"></div>
        </transition> -->
        <!-- appear属性结合第三方库使用 -->
        <!-- <transition
            appear
            appear-active-class="animate__animated animate__bounceOut"
        >
            <div  v-if="flag" class="box"></div>
        </transition> -->

        <!-- 使用自定义的类名或第三方的动画样式 -->
        <!-- duration定义动画的时长 -->
        <!-- duration="{leave:500,enter:300}" duration="500"-->
        <!-- 自定义类名 -->
        <!-- <transition :duration="500" name="fade" enter-from-class="enter-from" enter-to-class="enter-to" enter-active-class="enter-active">
            <div  v-if="flag" class="box"></div>
        </transition> -->
        <!-- 第三方库 -->
        <!-- <transition :duration="500" name="fade" leave-active-class="animate__animated animate__fadeOut" enter-active-class="animate__animated animate__fadeIn">
            <div  v-if="flag" class="box"></div>
        </transition> -->

        <!-- 生命周期钩子 -->
        <!-- <transition
            @before-enter="EnterFrom"
            @enter="EnterActive"
            @after-enter="EnterTo"
            @enter-cancelled="EnterCancel" 
            @before-leave="LeaveFrom"
            @leave="LeaveActive"
            @after-leave="LeaveTo"
            @leave-cancelled="LeaveCancel"
        >
            <div  v-if="flag" class="box"></div>
        </transition> -->
        <!-- 结合使用gsap第三方库 -->
        <!-- <transition
           @before-enter="EnterFrom"
           @enter="EnterActive"
           @leave="Leave"
        >
            <div  v-if="flag" class="box"></div>
        </transition> -->

        <!-- transition-group过渡列表，用法同transition -->
        <button @click="addNum">addNum</button>
        <button @click="popNum">popNum</button>
        <div class="item-container">
            <!--section表示在transition-group标签外面包一层section标签-->
            <transition-group tag="section" enter-active-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__hinge">
                <div class="item" v-for="item,index in list" :key="index">{{item}}</div>
            </transition-group>
        </div>  
    </div>

</template>
<style scoped>
    /* transition-group */
    .item-container{
        /* 此处的display要为flex */
        display: flex;
        flex-wrap: wrap;
        word-break: break-all;
        border: solid 1px #ccc;
        margin-top: 10px;
    }
    .item{
        margin: 0 10px;
    }

    .box{
        width: 200px;
        height: 200px;
        background-color: blue;
    }
    /* appear属性 */
    .appear-from{
        width: 0;
        height: 0;
    }
    .appear-active{
        transition: all 3s ease;
    }
    .appear-to{
        width: 200px;
        height: 200px;
    }
    /* transition固定的类名 */
    /* .fade-enter-from{
        width:0;
        height: 0;
    }
    .fade-enter-active{
        transition: all 1.5s ease;
    }
    .fade-enter-to{
        width:200px;
        height:200px;
    }
    .fade-leave-from{
        width: 200px;
        height: 200px;
    }
    .fade-leave-active{
        transition: all 3s ease;
    }
    .fade-leave-to{
        width: 0;
        height: 0;
    } */

    /* transition自定义类名 */
    /* .enter-from{
        width:0;
        height: 0;
    }
    .enter-active{
        transition: all 1.5s ease;
    }
    .enter-to{
        width:200px;
        height:200px;
    } */

    /* transition第三方库 */
</style>