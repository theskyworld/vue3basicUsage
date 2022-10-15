<template>
    <div class="container">
        <p>{{nameObjToRef}}</p>
        <p>{{nameObjRetToRef}}</p>
        <!-- <p>{{deepObjsRet.innerObj.name}}</p> -->
        <button @click="change">修改</button>
        <hr>
        <p>{{name}}-{{age}}-{{sex}}</p>
        <button @click="change2">修改</button>
    </div>
</template>

<script lang="ts" setup>
    // toRef、toRefs和toRaw的使用
    import { computed } from '@vue/reactivity';
import  {toRef,reactive, shallowReactive,toRefs,toRaw,computed} from 'vue'

    // toRef()修改响应式对象的属性
    // 本质是将对象的单个属性变成一个ref对象
    // 第一个参数为对象，第二个参数为要修改的对象的属性
    // 只能修改响应式数据，对非响应式数据修改后，页面不会更新
    let nameObj = {name : 'Alice1'};
    let nameObj2 = {name : 'Alice2'}
    // let deepObj = {
        // innerObj:{
            // name:'value',
        // }
    // }
    // let deepObjsRet = shallowReactive(deepObj);
    //定义一个非响应式数据的toRef对象
    let nameObjToRef = toRef(nameObj,'name');
    // 定义一个响应式数据的toRef对象
    let nameObjRetToRef = toRef(reactive(nameObj2),'name')
    let change = ()=>{
        // deepObjsRet.innerObj.name = 'hhh,newVal'
        // 1和2都只能修改数据的值，但不能引起页面的重新渲染
        // 但是3能够在将数据修改之后，引起页面的重新渲染
        // 如果我把1和2的操作（同时修改nameObj的name的值，以后者(2)的结果为准）写在3的前面
        // 那么1和2就能够搭上3的顺风车，在3引起了页面更新之后，同时把1和2中修改数据后的结果也渲染到页面上
        // 1.
        // 使用toRef修改非响应式数据的属性
        nameObjToRef.value = '使用toRef修改非响应式数据后的结果';
        console.log(nameObj);
        // 2.
        nameObj.name = 'newVal'
        // 3
        // 使用toRef修改响应式数据的属性，数据会改变，页面会重新渲染
        nameObjRetToRef.value = '使用toRef修改响应式数据后的结果'
        console.log(nameObj2);
        // 如果以上两者同时使用，后者会影响前面的结果
    }

    // toRefs()将一个对象的多个属性转成一个个的ref对象
    let personObjRet = reactive({
        name : 'Alice',
        age : 20,
        sex : 'female',
    })
    // 解构赋值使用
    let {name,age,sex} = toRefs(personObjRet);

    // // 本质就是在于遍历了一遍对象中的所有属性，将其变成ref对象
    // const myToRefs =<T extends object>(object:T)=>{
    //     const map:any = {}
    //     for(let key in object){
    //         map[key] = toRef(object,key);
    //     }
    //     return map;
    // }
    const change2 = ()=>{
        name.value = 'Alice2',
        age.value = 21,
        sex.value = 'female'
    }

    // toRaw()将一个数据的proxy对象（响应式对象）转换为其对应的原始数据对象（非响应式对象）
    let objRet = reactive({name:'jack',age:13,sex:'male'});
    console.log(objRet,toRaw(objRet));

    // 本质在于
    const myToRaw = ()=>{
        console.log(objRet,objRet['__v_raw'])
    }
</script>

