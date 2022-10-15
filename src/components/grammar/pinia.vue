<script setup lang='ts'>
    import {useTestStore} from '@/store/index'
    import {ref} from 'vue'
    import {storeToRefs} from 'pinia'


    let allowedRef = ref(true);
    // 基本使用
    const testStore = useTestStore();

    // 修改state中的值的方式
    const change = ()=>{
        // 方式一:直接修改state中的值
        // testStore.curNum++;
        // testStore.curNum = 123;
        // 方式二:借助patch,对象形式
        // testStore.$patch({
        //     curNum:123,
        //     name:'Alice123',
        // })
        // 方式三：借助patch，函数形式
        // testStore.$patch(state=>{
        //     // 可以添加一些修改前的逻辑，例如判断逻辑
        //     if(allowedRef){
        //         state.curNum = 123;
        //         state.name = "Alice123";
        //     }
        // })
        // 方式四:修改整个的state对象
        // testStore.$state = {
        //     curNum:123,
        //     name:'Alice123'
        // }
        // 方式五：借助actions中的方法进行修改
        // testStore.setCurNum(123)
    }

    // pinia解构
    // 通过storeToRefs函数，使得解构出来的值具有响应式
    const {curNum,name} = storeToRefs(testStore);
    const change2 = ()=>{
        curNum.value++;
        name.value = 'Alice123';
    }

    // actions的使用
    const changeUser = ()=>{
        testStore.setUser();
    }

    // $reset的使用——将state中的所有数据恢复到初始的状态
    const reset = ()=>{
        testStore.$reset();
    }

    // $subscribe的使用——监听state对象中值的变化，任何一个值变化了，该函数就会自动调用
    testStore.$subscribe((args,state)=>{
        console.log('args:',args);
        console.log("state:",state);
    })
    
    // $onAction的使用——监听actions对象中函数的调用，actions对象中有函数调用了，该函数就会被自动调用
    testStore.$onAction(args=>{
        console.log(args);
        args.after(()=>{
            console.log('after')
        })
    })
</script>
<template>
    <!-- pinia的使用 -->
    <!-- 基本使用 -->
    <p>pinia:{{testStore.curNum}}-{{testStore.name}}</p>
    <hr>
    <!-- 修改state中的值的方式 -->
    <button @click="change2">修改state中的值</button>

    <!-- actions的使用 -->
    <p>actions:{{testStore.user.name}}-{{testStore.user.age}}</p>
    <hr>
    <button @click="changeUser">changeUser</button>

    <!-- getters的使用 -->
    <p>getters:{{testStore.getName}}-{{testStore.getCurNum}}</p>

    <!-- $reset的使用 -->
    <button @click="reset">reset</button>
</template>
<style scoped>

</style>