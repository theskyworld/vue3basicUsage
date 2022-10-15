<template>

</template>

<script lang="ts" setup>
//要代理的数据对象
let obj = {
  name : 'vueProxy',
  age:3
}
//创建Proxy的实例对象进行数据的代理
let proxyObj = new Proxy(obj,{
  //getter执行的时机：在通过Proxy的实例对象访问被代理的对象的属性时执行
  get(target,property){
    console.log('getter执行了');
    //target指Proxy的实例对象，代理上面的obj对象之后的
    console.log(target);
    //property指访问的被代理的对象的属性名
    console.log(property);
  //  返回访问的那个属性的值
  //  通过Proxy的实例对象访问被代理对象的属性时会得到该值
    return target[property];
  },
  //setter执行的时机：在通过Proxy的实例对象修改被代理的对象的属性时执行
  set(target,property,newVal){
    console.log('setter执行了');
    console.log(target,property,newVal);
    target[property] = newVal;
    return true;
  }
})
//通过Proxy的实例对象访问被代理对象的属性
console.log(proxyObj.name);//vueProxy
console.log(proxyObj.age);//3
//通过Proxy的实例对象修改被代理对象的属性
proxyObj.age = 5;
console.log(proxyObj.age);//5
console.log(obj.age);//5
</script>

<style scoped>

</style>