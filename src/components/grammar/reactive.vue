<template>
  <div class="container">
    <p>{{objRet.numObj}}</p>
    <button @click="hdClick1">click1</button>
    <button @click="objRet.numObj++">click2</button>
    <p>{{objRef.numObj2}}</p>
    <button @click="hdClick2">click3</button>
    <button @click="objRef.numObj2++">click4</button>
    <hr>
    <!-- reactive处理数组 -->
    <p>{{listArrObjRet.listArr}}</p>
    <button @click="reviseArr2">修改数组</button>
    <hr>
    <p>{{obj3.name}}</p>
    <button @click="show">show</button>
    <hr>
    <p>{{deepObjsRet.objInner.name}}</p>
    <button @click="riviseDeepObj">修改</button>
  </div>
</template>

<script lang="ts">
//reactive的使用
import {defineComponent, reactive, ref,readonly, shallowReactive} from 'vue'
export default defineComponent({
  setup(){
    //双向数据绑定
    //与ref的区别在于，访问数据的值不需要再添加.value
    //即，使用ref封装后的对象value属性的值就等于使用reactive封装后的对象
    //ref()内部调用了reactive方法
    //ref支持所有的数据类型，多用来实现基本数据类型的双向绑定
    //reactive只支持引用数据类型的双向绑定
    // 修改数据时，都是修改例如对象的属性或者数组中的元素，不能对对象及数组的整体进行修改
    // 处理对象
    let obj = {
      numObj: 20,
    }
    //将obj封装成一个Proxy对象
    let objRet = reactive(obj);
    console.log('objRet',objRet);
    console.log('objRet.numObj',objRet.numObj);
    const hdClick1 = ()=>{
      // objRet.numObj++;
      // 不能直接对对象的整体进行修改，可以修改其内部的属性
      obj = {
        numObj:28
      }
    }
    //ref
    let obj2 = {
      numObj2 : 20,
    }
    let objRef = ref(obj2);
    console.log('objRef',objRef);
    console.log('objRef.value',objRef.value);
    console.log('objRef.value.numObj2',objRef.value.numObj2);
    const hdClick2 = ()=>objRef.value.numObj2++;

    // 处理数组
    let listRet = reactive<string[]>([]);
    // 往数组中传值
    function reviseArr(){
      // 每次点击时，结合push往数组中添加'1'
      // listRet.push('1');
      // 但是不能直接将数组整体进行修改，修改后数据会改变，页面不会重新渲染
      // listRet = ['1','2','3'];
      console.log(listRet);
      // 但是结合push和解构的方式可以实现数据和页面的更新
      listRet.push(...['1','2','3']);
    }
    // 或者直接将数组写成对象的形式，让reactive处理对象
    let listArrObjRet = reactive<{
      listArr:string[],
    }>({
      listArr:[]
    })
    function reviseArr2(){
      listArrObjRet.listArr = ['1','2','3']
      // 但是同样也不能对对象的整体进行修改
      // listArrObjRet = {
        // listArr:['1','2','3']
      // }
    }


    // readonly，使一个对象是只读的
    let obj3 = reactive({name:"Alice"});
    let obj3Read = readonly(obj3);
    const show = ()=>{
      console.log(obj3,obj3Read);
      // 修改时会报错
      // obj3Read.name = 'Alice2';
      // obj3.name = 'Alice3'
    }


    // shallowReactive()浅层次响应
    // 定义一个双层的obj
    let deepObj = {
      objInner:{
        name:"两层Obj"
      }
    }
    // let deepObjRet = reactive(deepObj);
    let deepObjsRet = shallowReactive(deepObj);
    const riviseDeepObj = ()=>{
      // 使用reactive可以正常修改最里面的name的值
      // deepObjRet.objInner.name = '使用reactive修改后的值'
      //使用shallowReactive()修改深层次时只会改变数据，不会引起页面的重新渲染
      deepObjsRet.objInner.name = '使用shallowReactive修改后的值';
      console.log(deepObjsRet)
      //只能修改外层的值
      deepObjsRet.objInner = {
        name:'使用shallowReactive修改外层后的值'
      }

    }
    return{
      objRet,
      hdClick1,
      objRef,
      hdClick2,
      listRet,
      reviseArr,
      reviseArr2,
      listArrObjRet,
      obj3,
      show,
      riviseDeepObj,
      // deepObjRet,
      deepObjsRet
    }
  }
})
</script>

<style scoped>

</style>