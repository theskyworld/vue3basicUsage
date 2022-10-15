<template>
<!--  父组件-->
<Child>
<!--  具名插槽-->
<!--  使用插槽，（往坑中填内容）-->
<!--  往link插槽中填内容-->
<!--  v-slot:link可简写为#link-->
  <template v-slot:link>
    <a href="#">a标签</a>
  </template>
<!--  <template #link>-->
<!--    <a href="#">a标签</a>-->
<!--  </template>-->
<!--  往btn插槽中填内容-->
  <template v-slot:btn>
    <button>click</button>
  </template>

<!--  匿名插槽-->
<!--  使用插槽，（往坑中填内容）-->
  <template v-slot>
    <p>匿名插槽</p>
  </template>
</Child>
</template>
<script lang="ts" setup>
import Child from './slotChild.vue'

</script>

<style scoped>

</style>