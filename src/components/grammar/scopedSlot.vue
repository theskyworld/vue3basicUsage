<template>
<!--父组件-->
<!--  展示子组件中的内容-->
  <Child>
<!--    作用域插槽-->
<!--    在<Child>标签中获取并使用<slot>标签中定义的属性的值，除name之外-->
    <template #link="scope">
      <p>{{scope.title}}</p>
      <p>{{scope.myNum}}</p>
    </template>
  </Child>
</template>

<script lang="ts" setup>
import Child from '@/components/13-AppChild.vue'
</script>

<style scoped>

</style>