<template>
  <div>
    <p>{{num}}</p>
    <p>{{objRef.numObj}}</p>
    <button @click="hdClick1">click1</button>
    <button @click="num++">click2</button>
    <button @click="hdClick2">click3</button>
    <button @click="objRef.numObj++">click4</button>
    <p ref="element">这是要获取的p标签</p>
    <p>{{numObjsRef}}</p>
    <p>{{numObjRef}}</p>
    <button @click="addNum">+</button>
    <p>{{name2mRef}}</p>
    <button @click="change">change</button>
<!--    <p @click="MyobjRef.num.value++">{{MyobjRef.num}}</p>-->
    <p @click="obj12.num.first++">{{obj12.num.first}}</p>
  </div>

</template>

<script lang="ts">
//ref的用法
import {defineComponent, nextTick, onMounted, ref, isRef, shallowRef, triggerRef, customRef, toRaw} from "vue";
import {Ref, trigger} from "@vue/reactivity";

export default defineComponent({
  setup(){
    // const MyobjRef = {
    //   num:ref(1),
    // };
    // const MyobjRef = ref(1);
    // console.log('xxx',MyobjRef.num)
    const obj12 = ref({
      num : {
        first : 1
      }
    })
    const num11 = ref(12);
    console.log('num11:',num11);
    //单向数据绑定
    // let num = 10;

    //ref()
    //作用一：实现数据的双向绑定
    //双向数据绑定
    //将数据通过ref()封装成一个对象，实现双向数据绑定（响应式数据）

    //基本数据类型
    //得到的对象中value的值就是num的值
    //以后通过num.value来获取数据的值，但是模板中不需要直接写num即可，因为vue在编译模板的时候已经使用.value获取了
    let num: Ref<number> = ref(10);
    // console.log(num);
    // console.log(num.value);
    const hdClick1 = ()=>{
      num.value++;
    }

    //引用数据类型
    let obj = {
      numObj : 20
    }
    let objRef = ref(obj);
    console.log(objRef);
    const hdClick2 = ()=>{
      objRef.value.numObj++;
    }

    //作用二：通过在元素中增加ref属性和执行ref()方法获取元素
    //注意元素在setup()中获取，在onMounted()或者nextTick()中进行打印输出或使用
    let element = ref();
    console.log('setup',element.value);//undefined 此处获取不到元素
    onMounted(()=>{
      //等组件挂载完毕之后，才能获取到元素
      console.log('onMounted',element.value);
    })
    //nextTick()在下一次dom更新的时候执行，与updated()的区别在与nextTick只调用一次，而updated()在每次dom更新时都会调用
    nextTick(()=>{
      console.log('nextTick',element.value)
    })



    // isRef()、shallowRef()和triggerRef()和customRef()
    // isRef()判断一个对象是否是ref对象
    // shallowRef()浅层次的响应
    // triggerRef()强制页面的刷新
    // customRef()自定义ref
    let nameObj = {
      name:'判断是否是ref对象'
    }
    console.log(isRef(nameObj));//false
    console.log('使用ref()转换之后的结果:',isRef(ref(nameObj)));//true

    // shallowRef()浅层次响应和triggerRef()强制视图的更新
    type numObj = {
      num:number,
    }
    let numObj:numObj= {
      num:3,
    }
    let numObjsRef:Ref<numObj> = shallowRef(numObj);
      // 使用ref
    let numObjRef:Ref<numObj> = ref(numObj);
      // 使用triggerRef()
    console.log('numObj',numObjsRef)
    const addNum = ()=>{
      // 只能修改value的值，无法修改更深一层num的值
      // 只能通过该方式对num的值做出修改
      // numObjsRef.value = {
        // num : 4
      // }
      // 通过以下方式对num的值做出修改后，数据会发生改变，但是视图不会更新
      // numObjsRef.value.num++;
      // console.log(numObjsRef.value);
      // 通过配合使用triggerRef()可以强制视图的更新
      triggerRef(numObjsRef);
      numObjsRef.value.num++;

      // 使用ref则可以直接进行修改，原因在于其在底层调用了triggerRef()
      // numObjRef.value.num++;

      // 但是ref()和shallowRef()两者不要同时使用
    }

    // 使用customRef()进行ref的自定义
    function myRef<T>(value:T){
      let timer:any
      return customRef((track,trigger)=>{
        return {
          get(){
            track();
            return value;
          },
          set(newVal){
            clearTimeout(timer);
            timer = setTimeout(()=>{
              console.log('myRef-set is called...');
              value = newVal;
              timer = null;
              trigger();
            },500)

          }
        }
      })
    }
    let name2 = 'Alice'
    let name2mRef = myRef<string>(name2);
    const change = ()=>{
      name2mRef.value = 'myRef修改后的新值:Alice3'
    }
    return{
      obj12,
      // MyobjRef,
      num,
      hdClick1,
      objRef,
      hdClick2,
      element,
      // nameObj,
      numObjRef,
      addNum,
      numObjsRef,
      name2mRef,
      change,
    }
  }
})
</script>

<style scoped>

</style>